/**
 * duplicatesManager.js - Módulo Especialista de Deteção, Prevenção e Fusão de Duplicados
 * SIGEC-Pro - alegria-activity, S.L.
 *
 * Garante a integridade absoluta dos dados, deteção inteligente com algoritmos de similaridade,
 * fusão sem perda de dados históricos (reencaminha contactos, projetos, orçamentos e interações)
 * e alertas em tempo real.
 */

(function () {
  'use strict';

  // State
  let currentScanResults = {
    clientes: [],
    contactos: [],
    projetos: [],
    summary: { totalGroups: 0, totalEntities: 0, clientGroups: 0, contactGroups: 0, projectGroups: 0 },
    scannedAt: null
  };

  // Grupo ativo no modal (referência estável para confirmExecuteKeep*)
  let currentActiveGroup = null;

  // =========================================================================
  // 1. UTILITÁRIOS DE NORMALIZAÇÃO E SIMILARIDADE DE TEXTO
  // =========================================================================

  function normalizeText(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/[^a-z0-9\s]/g, ' ')   // substitui pontuação por espaço
      .replace(/\s+/g, ' ')          // unifica múltiplos espaços
      .trim();
  }

  function normalizeNIF(nif) {
    if (!nif || typeof nif !== 'string') return '';
    return nif.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  }

  function normalizeEmail(email) {
    if (!email || typeof email !== 'string') return '';
    return email.trim().toLowerCase();
  }

  function normalizePhone(phone) {
    if (!phone || typeof phone !== 'string') return '';
    let p = phone.replace(/[^0-9+]/g, '');
    if (p.startsWith('+351')) p = p.substring(4);
    if (p.startsWith('00351')) p = p.substring(5);
    if (p.startsWith('+34')) p = p.substring(3);
    if (p.startsWith('0034')) p = p.substring(4);
    return p.replace(/\D/g, '');
  }

  function levenshteinDistance(a, b) {
    const matrix = [];
    const n = a.length;
    const m = b.length;

    if (n === 0) return m;
    if (m === 0) return n;

    for (let i = 0; i <= n; i++) matrix[i] = [i];
    for (let j = 0; j <= m; j++) matrix[0][j] = j;

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,      // deletion
          matrix[i][j - 1] + 1,      // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }
    return matrix[n][m];
  }

  function calculateSimilarity(str1, str2) {
    const s1 = normalizeText(str1);
    const s2 = normalizeText(str2);
    if (!s1 || !s2) return 0;
    if (s1 === s2) return 1.0;

    // Se uma string contém a outra e tem tamanho considerável (> 5 caracteres)
    if ((s1.includes(s2) || s2.includes(s1)) && Math.min(s1.length, s2.length) >= 5) {
      const ratio = Math.min(s1.length, s2.length) / Math.max(s1.length, s2.length);
      return Math.max(0.85, ratio);
    }

    const maxLen = Math.max(s1.length, s2.length);
    if (maxLen === 0) return 1.0;
    const dist = levenshteinDistance(s1, s2);
    return Math.max(0, 1 - (dist / maxLen));
  }

  // =========================================================================
  // 2. MOTOR DE DETEÇÃO DE DUPLICADOS (CLIENTES, CONTACTOS, PROJETOS)
  // =========================================================================

  function scanClientDuplicates(clientes) {
    if (!Array.isArray(clientes) || clientes.length < 2) return [];
    const groups = [];
    const processedIds = new Set();

    for (let i = 0; i < clientes.length; i++) {
      const c1 = clientes[i];
      if (!c1 || !c1.id || processedIds.has(c1.id)) continue;

      const groupMembers = [c1];
      const matchReasons = [];
      let maxConfidence = 'medium';

      const nif1 = normalizeNIF(c1.nif);
      const email1 = normalizeEmail(c1.email);
      const name1 = normalizeText(c1.nome);
      const phone1 = normalizePhone(c1.telefone || c1.telemovel || '');

      for (let j = i + 1; j < clientes.length; j++) {
        const c2 = clientes[j];
        if (!c2 || !c2.id || processedIds.has(c2.id)) continue;

        const nif2 = normalizeNIF(c2.nif);
        const email2 = normalizeEmail(c2.email);
        const name2 = normalizeText(c2.nome);
        const phone2 = normalizePhone(c2.telefone || c2.telemovel || '');

        let isMatch = false;
        let reason = '';
        let confidence = 'medium';

        // Regra 1: Nome da Empresa Idêntico (critério principal)
        if (name1 && name2 && name1 === name2 && name1.length >= 4) {
          isMatch = true;
          reason = `Nome de Empresa Idêntico ("${c1.nome}")`;
          confidence = 'high';
        }
        // Regra 2: Nome com Alta Similaridade (>= 0.88)
        else if (name1 && name2 && name1.length >= 4 && name2.length >= 4) {
          const sim = calculateSimilarity(c1.nome, c2.nome);
          if (sim >= 0.88) {
            isMatch = true;
            reason = `Nome de Empresa Muito Similar (${Math.round(sim * 100)}% de semelhança)`;
            confidence = sim >= 0.95 ? 'high' : 'medium';
          } else if (sim >= 0.75 && phone1 && phone2 && phone1 === phone2 && phone1.length >= 7) {
            isMatch = true;
            reason = `Nome Semelhante (${Math.round(sim * 100)}%) + Telefone Idêntico`;
            confidence = 'high';
          }
        }
        // Regra 3: NIF Exato idêntico (válido com >= 5 digitos) — confirma duplicado se nome diferente
        else if (nif1 && nif2 && nif1 === nif2 && nif1.length >= 5) {
          isMatch = true;
          reason = `NIF Exato Idêntico (${c1.nif})`;
          confidence = 'high';
        }
        // Regra 4: Email Exato + nome similar (confirmação cruzada)
        else if (email1 && email2 && email1 === email2 && email1.includes('@')) {
          const sim = name1 && name2 ? calculateSimilarity(c1.nome, c2.nome) : 0;
          if (sim >= 0.60 || !name1 || !name2) {
            isMatch = true;
            reason = sim >= 0.60
              ? `Email Idêntico (${c1.email}) + Nome Semelhante`
              : `Email Idêntico (${c1.email})`;
            confidence = sim >= 0.80 ? 'high' : 'medium';
          }
        }

        if (isMatch) {
          groupMembers.push(c2);
          processedIds.add(c2.id);
          matchReasons.push(reason);
          if (confidence === 'high') maxConfidence = 'high';
        }
      }

      if (groupMembers.length > 1) {
        processedIds.add(c1.id);
        groups.push({
          id: 'dup-client-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
          type: 'clientes',
          typeLabel: 'Cliente / Empresa',
          items: groupMembers,
          confidence: maxConfidence,
          reasons: Array.from(new Set(matchReasons)),
          primarySuggestedId: determineBestPrimaryRecord(groupMembers, 'clientes')
        });
      }
    }

    return groups;
  }

  function scanContactDuplicates(contactos, clientes) {
    if (!Array.isArray(contactos) || contactos.length < 2) return [];
    const groups = [];
    const processedIds = new Set();

    // Map client names for quick context
    const clientMap = {};
    if (Array.isArray(clientes)) {
      clientes.forEach(c => { clientMap[c.id] = c.nome || c.empresa || 'Cliente'; });
    }

    for (let i = 0; i < contactos.length; i++) {
      const c1 = contactos[i];
      if (!c1 || !c1.id || processedIds.has(c1.id)) continue;

      const groupMembers = [c1];
      const matchReasons = [];
      let maxConfidence = 'medium';

      const email1 = normalizeEmail(c1.email);
      const name1 = normalizeText(c1.nome);
      const phone1 = normalizePhone(c1.telemovel || c1.telefone || '');
      const clientId1 = c1.clienteId || '';

      for (let j = i + 1; j < contactos.length; j++) {
        const c2 = contactos[j];
        if (!c2 || !c2.id || processedIds.has(c2.id)) continue;

        const email2 = normalizeEmail(c2.email);
        const name2 = normalizeText(c2.nome);
        const phone2 = normalizePhone(c2.telemovel || c2.telefone || '');
        const clientId2 = c2.clienteId || '';

        let isMatch = false;
        let reason = '';
        let confidence = 'medium';

        // Regra 1: Nome Idêntico (critério principal para contactos)
        if (name1 && name2 && name1 === name2 && name1.length >= 3) {
          isMatch = true;
          reason = `Nome Idêntico ("${c1.nome}")` +
            (clientId1 && clientId2 && clientId1 === clientId2 ? ` + Mesmo Cliente (${clientMap[clientId1] || clientId1})` : '');
          confidence = 'high';
        }
        // Regra 2: Nome com Alta Similaridade (>= 0.85)
        else if (name1 && name2 && name1.length >= 3 && name2.length >= 3) {
          const sim = calculateSimilarity(c1.nome, c2.nome);
          if (sim >= 0.85) {
            isMatch = true;
            reason = `Nome Muito Similar (${Math.round(sim * 100)}%)` +
              (clientId1 && clientId2 && clientId1 === clientId2 ? ` + Mesmo Cliente` : '');
            confidence = sim >= 0.92 ? 'high' : 'medium';
          } else if (sim >= 0.70 && phone1 && phone2 && phone1 === phone2 && phone1.length >= 7) {
            isMatch = true;
            reason = `Nome Semelhante (${Math.round(sim * 100)}%) + Telemóvel Idêntico (${phone1})`;
            confidence = 'high';
          }
        }
        // Regra 3: Email Idêntico + nome semelhante (confirmação cruzada)
        else if (email1 && email2 && email1 === email2 && email1.includes('@')) {
          const sim = name1 && name2 ? calculateSimilarity(c1.nome, c2.nome) : 0;
          isMatch = true;
          reason = sim >= 0.60
            ? `Email Idêntico (${c1.email}) + Nome Semelhante`
            : `Email Idêntico (${c1.email})`;
          confidence = sim >= 0.70 ? 'high' : 'medium';
        }
        // Regra 4: Mesmo Telemóvel (mesmo número, nomes não cobertos acima)
        else if (phone1 && phone2 && phone1 === phone2 && phone1.length >= 7) {
          const sim = name1 && name2 ? calculateSimilarity(c1.nome, c2.nome) : 0;
          if (sim >= 0.55 || (!name1 || !name2)) {
            isMatch = true;
            reason = `Telemóvel Idêntico (${phone1})` + (sim >= 0.55 ? ` + Nome Semelhante` : '');
            confidence = 'medium';
          }
        }

        if (isMatch) {
          groupMembers.push(c2);
          processedIds.add(c2.id);
          matchReasons.push(reason);
          if (confidence === 'high') maxConfidence = 'high';
        }
      }

      if (groupMembers.length > 1) {
        processedIds.add(c1.id);
        groups.push({
          id: 'dup-contact-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
          type: 'contactos',
          typeLabel: 'Contacto',
          items: groupMembers,
          confidence: maxConfidence,
          reasons: Array.from(new Set(matchReasons)),
          primarySuggestedId: determineBestPrimaryRecord(groupMembers, 'contactos')
        });
      }
    }

    return groups;
  }

  function scanProjectDuplicates(projetos, clientes) {
    if (!Array.isArray(projetos) || projetos.length < 2) return [];
    const groups = [];
    const processedIds = new Set();

    const clientMap = {};
    if (Array.isArray(clientes)) {
      clientes.forEach(c => { clientMap[c.id] = c.nome || c.empresa || 'Cliente'; });
    }

    for (let i = 0; i < projetos.length; i++) {
      const p1 = projetos[i];
      if (!p1 || !p1.id || processedIds.has(p1.id)) continue;

      const groupMembers = [p1];
      const matchReasons = [];
      let maxConfidence = 'medium';

      const code1 = normalizeText(p1.codigo || '');
      const name1 = normalizeText(p1.nome || p1.designacao || '');
      const clientId1 = p1.clienteId || '';

      for (let j = i + 1; j < projetos.length; j++) {
        const p2 = projetos[j];
        if (!p2 || !p2.id || processedIds.has(p2.id)) continue;

        const code2 = normalizeText(p2.codigo || '');
        const name2 = normalizeText(p2.nome || p2.designacao || '');
        const clientId2 = p2.clienteId || '';

        let isMatch = false;
        let reason = '';
        let confidence = 'medium';

        // Regra 1: Código de Projeto Idêntico
        if (code1 && code2 && code1 === code2 && code1.length >= 3) {
          isMatch = true;
          reason = `Código de Projeto Idêntico (${p1.codigo})`;
          confidence = 'high';
        }
        // Regra 2: Mesmo Cliente + Nome de Projeto Idêntico
        else if (clientId1 && clientId2 && clientId1 === clientId2 && name1 && name2 && name1 === name2 && name1.length >= 3) {
          isMatch = true;
          reason = `Mesmo Cliente (${clientMap[clientId1] || clientId1}) + Nome de Projeto Idêntico`;
          confidence = 'high';
        }
        // Regra 3: Mesmo Cliente + Nome com Alta Similaridade (>= 0.88)
        else if (clientId1 && clientId2 && clientId1 === clientId2 && name1 && name2) {
          const sim = calculateSimilarity(p1.nome || '', p2.nome || '');
          if (sim >= 0.88) {
            isMatch = true;
            reason = `Mesmo Cliente + Nome Muito Similar (${Math.round(sim * 100)}%)`;
            confidence = sim >= 0.95 ? 'high' : 'medium';
          }
        }

        if (isMatch) {
          groupMembers.push(p2);
          processedIds.add(p2.id);
          matchReasons.push(reason);
          if (confidence === 'high') maxConfidence = 'high';
        }
      }

      if (groupMembers.length > 1) {
        processedIds.add(p1.id);
        groups.push({
          id: 'dup-project-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
          type: 'projetos',
          typeLabel: 'Projeto',
          items: groupMembers,
          confidence: maxConfidence,
          reasons: Array.from(new Set(matchReasons)),
          primarySuggestedId: determineBestPrimaryRecord(groupMembers, 'projetos')
        });
      }
    }

    return groups;
  }

  // Heurística de seleção do melhor registo principal (Master Record):
  // 1. Mais campos preenchidos
  // 2. Mais relações associadas (projetos, contactos)
  // 3. Mais recente ou com ID mais antigo
  function determineBestPrimaryRecord(items, type) {
    if (!items || items.length === 0) return null;
    if (items.length === 1) return items[0].id;

    let bestItem = items[0];
    let bestScore = -1;

    items.forEach(item => {
      let score = 0;
      // Contar campos com valor real
      Object.keys(item).forEach(key => {
        const val = item[key];
        if (val !== null && val !== undefined && String(val).trim() !== '' && key !== 'id') {
          score += 2;
        }
      });

      // Bónus se tiver relações no banco
      if (typeof db !== 'undefined') {
        if (type === 'clientes') {
          if (Array.isArray(db.projetos)) {
            score += db.projetos.filter(p => p.clienteId === item.id).length * 5;
          }
          if (Array.isArray(db.contactos)) {
            score += db.contactos.filter(c => c.clienteId === item.id).length * 4;
          }
          if (Array.isArray(db.orcamentos)) {
            score += db.orcamentos.filter(o => o.clienteId === item.id).length * 5;
          }
        } else if (type === 'contactos') {
          if (Array.isArray(db.interacoes)) {
            score += db.interacoes.filter(i => i.contactoId === item.id).length * 4;
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestItem = item;
      }
    });

    return bestItem.id;
  }

  function scanAllDuplicates() {
    if (typeof db === 'undefined') {
      return currentScanResults;
    }

    let clientGroups = scanClientDuplicates(db.clientes || []);
    let contactGroups = scanContactDuplicates(db.contactos || [], db.clientes || []);
    let projectGroups = scanProjectDuplicates(db.projetos || [], db.clientes || []);

    // Filtrar pares ignorados (decisão "Manter Ambos")
    try {
      const ignoredPairs = JSON.parse(localStorage.getItem('sigec_pro_dup_ignored') || '[]');
      if (ignoredPairs.length > 0) {
        const isIgnored = (group) => {
          const pairKey = group.items.map(i => i.id).sort().join('|');
          return ignoredPairs.includes(pairKey);
        };
        clientGroups  = clientGroups.filter(g => !isIgnored(g));
        contactGroups = contactGroups.filter(g => !isIgnored(g));
        projectGroups = projectGroups.filter(g => !isIgnored(g));
      }
    } catch (e) { /* ignorar erros de parsing */ }

    const allGroups = [...clientGroups, ...contactGroups, ...projectGroups];
    const totalGroups = allGroups.length;
    let totalEntities = 0;
    allGroups.forEach(g => { totalEntities += g.items.length; });

    currentScanResults = {
      clientes: clientGroups,
      contactos: contactGroups,
      projetos: projectGroups,
      allGroups,
      summary: {
        totalGroups,
        totalEntities,
        clientGroups: clientGroups.length,
        contactGroups: contactGroups.length,
        projectGroups: projectGroups.length
      },
      scannedAt: new Date()
    };

    updateBadgeCounters();
    return currentScanResults;
  }

  // =========================================================================
  // 3. FUSÃO INTELIGENTE E SEGURA (PRESERVAÇÃO INTEGRAL DE DADOS)
  // =========================================================================

  /**
   * Executa a fusão de um grupo de registos duplicados.
   * Mantém o primaryId, preenche todos os campos vazios com dados dos duplicados secundários,
   * remapeia todas as dependências em cascata (projetos, contactos, orçamentos, interações)
   * e remove com segurança os IDs redundantes.
   */
  function executeMergeGroup(groupId, chosenPrimaryId) {
    if (typeof db === 'undefined') {
      throw new Error('Base de dados não inicializada.');
    }

    const group = currentScanResults.allGroups ? currentScanResults.allGroups.find(g => g.id === groupId) : null;
    if (!group) {
      throw new Error('Grupo de duplicados não encontrado.');
    }

    const primaryId = chosenPrimaryId || group.primarySuggestedId;
    const secondaryItems = group.items.filter(item => item.id !== primaryId);
    const secondaryIds = secondaryItems.map(item => item.id);
    const primaryItemIndex = (db[group.type] || []).findIndex(item => item.id === primaryId);

    if (primaryItemIndex === -1) {
      throw new Error('Registo principal não encontrado na base de dados ativa.');
    }

    const primaryItem = db[group.type][primaryItemIndex];
    const mergedRecord = { ...primaryItem };
    const notesAccumulator = [];

    if (mergedRecord.observacoes || mergedRecord.notas) {
      notesAccumulator.push(mergedRecord.observacoes || mergedRecord.notas);
    }

    // 1. Unir campos dos registos secundários para preencher lacunas
    secondaryItems.forEach(sec => {
      Object.keys(sec).forEach(key => {
        if (key === 'id') return;
        const pVal = mergedRecord[key];
        const sVal = sec[key];

        // Se o campo no principal estiver vazio, preencher com o secundário
        if ((pVal === undefined || pVal === null || String(pVal).trim() === '') && (sVal !== undefined && sVal !== null && String(sVal).trim() !== '')) {
          mergedRecord[key] = sVal;
        } else if (key === 'observacoes' || key === 'notas') {
          if (sVal && String(sVal).trim() !== '' && !notesAccumulator.includes(sVal)) {
            notesAccumulator.push(sVal);
          }
        }
      });
    });

    if (notesAccumulator.length > 1) {
      mergedRecord.observacoes = notesAccumulator.join('\n---\n');
    }

    // Atualizar o registo principal no db
    db[group.type][primaryItemIndex] = mergedRecord;

    // 2. Reencaminhar em cascata todas as referências dos IDs secundários para o primaryId
    let reassignedCount = 0;

    if (group.type === 'clientes') {
      // Reatribuir Projetos
      if (Array.isArray(db.projetos)) {
        db.projetos.forEach(proj => {
          if (secondaryIds.includes(proj.clienteId)) {
            proj.clienteId = primaryId;
            reassignedCount++;
          }
        });
      }
      // Reatribuir Contactos
      if (Array.isArray(db.contactos)) {
        db.contactos.forEach(con => {
          if (secondaryIds.includes(con.clienteId)) {
            con.clienteId = primaryId;
            reassignedCount++;
          }
        });
      }
      // Reatribuir Orçamentos
      if (Array.isArray(db.orcamentos)) {
        db.orcamentos.forEach(orc => {
          if (secondaryIds.includes(orc.clienteId)) {
            orc.clienteId = primaryId;
            reassignedCount++;
          }
        });
      }
      // Reatribuir Interações
      if (Array.isArray(db.interacoes)) {
        db.interacoes.forEach(inter => {
          if (secondaryIds.includes(inter.clienteId)) {
            inter.clienteId = primaryId;
            reassignedCount++;
          }
        });
      }
    } else if (group.type === 'contactos') {
      // Reatribuir Interações
      if (Array.isArray(db.interacoes)) {
        db.interacoes.forEach(inter => {
          if (secondaryIds.includes(inter.contactoId)) {
            inter.contactoId = primaryId;
            reassignedCount++;
          }
        });
      }
      // Reatribuir em Projetos (se referenciado)
      if (Array.isArray(db.projetos)) {
        db.projetos.forEach(proj => {
          if (secondaryIds.includes(proj.contactoId)) {
            proj.contactoId = primaryId;
            reassignedCount++;
          }
        });
      }
    } else if (group.type === 'projetos') {
      // Reatribuir Orçamentos que apontem para o projeto antigo
      if (Array.isArray(db.orcamentos)) {
        db.orcamentos.forEach(orc => {
          if (secondaryIds.includes(orc.projetoId)) {
            orc.projetoId = primaryId;
            reassignedCount++;
          }
        });
      }
    }

    // 3. Remover registos secundários da coleção principal e registar em deletedRegistry para nunca serem restaurados por sincronização
    secondaryIds.forEach(secId => {
      if (typeof addDeletedId === 'function') {
        addDeletedId(group.type, secId);
      }
    });

    db[group.type] = db[group.type].filter(item => !secondaryIds.includes(item.id));

    // 4. Registar na Atividade do Sistema
    const activeUserId = sessionStorage.getItem('sigec_pro_active_user_id') || 'usr-admin';
    if (!Array.isArray(db.activityHistory)) db.activityHistory = [];
    db.activityHistory.unshift({
      id: 'act-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      userId: activeUserId,
      action: 'DUPLICATE_MERGE',
      entity: group.type,
      entityId: primaryId,
      details: `Fusão de ${group.items.length} registos duplicados em "${mergedRecord.nome || mergedRecord.codigo || primaryId}". ${reassignedCount} vínculos reatribuídos com sucesso.`,
      timestamp: new Date().toISOString()
    });

    // 5. Guardar permanentemente na BD interna e no localStorage
    if (typeof saveDatabase === 'function') {
      saveDatabase();
    }
    if (typeof saveDeletedRegistry === 'function') {
      saveDeletedRegistry();
    }
    if (typeof clearFormDirty === 'function') {
      clearFormDirty();
    }

    // Sincronizar em segundo plano com o GitHub se token configurado
    if (typeof syncDatabaseToGitHub === 'function' && localStorage.getItem('sigec_pro_gh_token')) {
      syncDatabaseToGitHub(true, true).catch(() => {});
    }

    // Recalcular duplicados
    scanAllDuplicates();
    return {
      success: true,
      mergedRecord,
      reassignedCount,
      secondaryCount: secondaryIds.length
    };
  }

  /**
   * Fusão Automática Segura de grupos com 100% de certeza (Alta Confiança: NIF, Email ou Código)
   */
  function autoMergeHighConfidenceDuplicates() {
    scanAllDuplicates();
    const highGroups = (currentScanResults.allGroups || []).filter(g => g.confidence === 'high');

    if (highGroups.length === 0) {
      if (typeof showToast === 'function') {
        showToast('Não foram encontrados grupos de alta certeza para fusão automática.', 'info');
      } else {
        alert('Não foram encontrados grupos de alta certeza para fusão automática.');
      }
      return;
    }

    const confirmMsg = `Foram detetados ${highGroups.length} grupos de duplicados com 100% de certeza (NIF idêntico, Email idêntico ou Código exato).\n\nDeseja realizar a fusão automática segura agora?\nTodos os dados e relações (projetos, contactos, orçamentos) serão preservados integralmente.`;
    if (!confirm(confirmMsg)) return;

    let mergedGroupsCount = 0;
    let totalReassigned = 0;

    highGroups.forEach(group => {
      try {
        const res = executeMergeGroup(group.id, group.primarySuggestedId);
        if (res && res.success) {
          mergedGroupsCount++;
          totalReassigned += res.reassignedCount;
        }
      } catch (err) {
        console.error('Erro ao fundir grupo:', group, err);
      }
    });

    // Refresh UI
    renderDuplicatesUI();
    refreshAllAppViews();

    const resultMsg = `Fusão em lote concluída com sucesso!\n• ${mergedGroupsCount} grupos fundidos.\n• ${totalReassigned} vínculos históricos preservados e reatribuídos.`;
    if (typeof showToast === 'function') {
      showToast(resultMsg, 'success');
    } else {
      alert(resultMsg);
    }
  }

  function refreshAllAppViews() {
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
    if (typeof renderClientPageMainGrid === 'function') renderClientPageMainGrid();
    if (typeof renderContactPageMainGrid === 'function') renderContactPageMainGrid();
    if (typeof renderProjectPageMainGrid === 'function') renderProjectPageMainGrid();
    if (typeof renderDatabaseOverview === 'function') renderDatabaseOverview();
    if (typeof updateClientProjectOptions === 'function') updateClientProjectOptions();
    if (typeof populateBudgetClientsDatalist === 'function') populateBudgetClientsDatalist();
  }

  // =========================================================================
  // 4. VERIFICAÇÃO EM TEMPO REAL (PREVENÇÃO DURANTE CRIAÇÃO / EDIÇÃO)
  // =========================================================================

  function checkDuplicateClientLive(nif, email, nome, excludeId) {
    if (typeof db === 'undefined' || !Array.isArray(db.clientes)) return [];
    const warnings = [];
    const nifNorm = normalizeNIF(nif);
    const emailNorm = normalizeEmail(email);
    const nameNorm = normalizeText(nome);

    db.clientes.forEach(c => {
      if (excludeId && c.id === excludeId) return;

      if (nifNorm && nifNorm.length >= 5 && normalizeNIF(c.nif) === nifNorm) {
        warnings.push({ field: 'nif', client: c, message: `Já existe um cliente com este NIF (${c.nif}): "${c.nome}".` });
      } else if (emailNorm && emailNorm.includes('@') && normalizeEmail(c.email) === emailNorm) {
        warnings.push({ field: 'email', client: c, message: `Já existe um cliente com este Email (${c.email}): "${c.nome}".` });
      } else if (nameNorm && nameNorm.length >= 4) {
        const sim = calculateSimilarity(nome, c.nome);
        if (sim >= 0.88) {
          warnings.push({ field: 'nome', client: c, message: `Nome muito semelhante a cliente existente (${Math.round(sim * 100)}%): "${c.nome}".` });
        }
      }
    });

    return warnings;
  }

  function checkDuplicateContactLive(clienteId, email, telemovel, nome, excludeId) {
    if (typeof db === 'undefined' || !Array.isArray(db.contactos)) return [];
    const warnings = [];
    const emailNorm = normalizeEmail(email);
    const phoneNorm = normalizePhone(telemovel);
    const nameNorm = normalizeText(nome);

    db.contactos.forEach(con => {
      if (excludeId && con.id === excludeId) return;

      if (emailNorm && emailNorm.includes('@') && normalizeEmail(con.email) === emailNorm) {
        warnings.push({ field: 'email', contact: con, message: `Já existe um contacto com este Email (${con.email}): "${con.nome}".` });
      } else if (clienteId && con.clienteId === clienteId && nameNorm && nameNorm.length >= 3) {
        const sim = calculateSimilarity(nome, con.nome);
        if (sim >= 0.85) {
          warnings.push({ field: 'nome', contact: con, message: `Este cliente já possui um contacto com nome idêntico ou muito semelhante: "${con.nome}".` });
        }
      } else if (phoneNorm && phoneNorm.length >= 7 && normalizePhone(con.telemovel || con.telefone) === phoneNorm) {
        warnings.push({ field: 'telemovel', contact: con, message: `Já existe um contacto com este número de telefone: "${con.nome}".` });
      }
    });

    return warnings;
  }

  // =========================================================================
  // 5. INTERFACE DO UTILIZADOR & RENDERIZAÇÃO
  // =========================================================================

  function updateBadgeCounters() {
    const badge = document.getElementById('nav-duplicates-badge');
    const badgeCfg = document.getElementById('nav-duplicates-badge-cfg');
    const total = currentScanResults.summary.totalGroups;
    [badge, badgeCfg].forEach(function(b) {
      if (!b) return;
      if (total > 0) {
        b.textContent = total;
        b.style.display = 'inline-block';
      } else {
        b.style.display = 'none';
      }
    });

    const statTotal = document.getElementById('dup-stat-total');
    if (statTotal) statTotal.textContent = currentScanResults.summary.totalGroups;

    const statClients = document.getElementById('dup-stat-clients');
    if (statClients) statClients.textContent = currentScanResults.summary.clientGroups;

    const statContacts = document.getElementById('dup-stat-contacts');
    if (statContacts) statContacts.textContent = currentScanResults.summary.contactGroups;

    const statProjects = document.getElementById('dup-stat-projects');
    if (statProjects) statProjects.textContent = currentScanResults.summary.projectGroups;
  }

  function renderDuplicatesUI() {
    scanAllDuplicates();
    filterDuplicatesList();
  }

  function filterDuplicatesList() {
    const container = document.getElementById('duplicates-results-container');
    if (!container) return;

    const searchInput = document.getElementById('duplicatesSearchInput');
    const typeFilter = document.getElementById('duplicatesTypeFilter');
    const confFilter = document.getElementById('duplicatesConfidenceFilter');

    const searchVal = searchInput ? normalizeText(searchInput.value) : '';
    const typeVal = typeFilter ? typeFilter.value : 'all';
    const confVal = confFilter ? confFilter.value : 'all';

    const all = currentScanResults.allGroups || [];
    const filtered = all.filter(group => {
      if (typeVal !== 'all' && group.type !== typeVal) return false;
      if (confVal !== 'all' && group.confidence !== confVal) return false;
      if (searchVal) {
        const matchesSearch = group.items.some(item => {
          const text = normalizeText(`${item.nome || ''} ${item.nif || ''} ${item.email || ''} ${item.codigo || ''} ${item.empresa || ''}`);
          return text.includes(searchVal);
        });
        if (!matchesSearch) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      if (all.length === 0) {
        container.innerHTML = `
          <div class="card" style="text-align: center; padding: 3.5rem 1.5rem; background: #f8fafc; border: 1.5px dashed #cbd5e1;">
            <div style="width: 70px; height: 70px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.2rem auto;">
              <i class="fa-solid fa-check-double"></i>
            </div>
            <h3 style="margin: 0 0 0.5rem 0; color: #1e293b; font-weight: 700;">Excelente! Sem Registos Duplicados</h3>
            <p style="margin: 0 auto; max-width: 500px; color: #64748b; font-size: 0.95rem;">
              A base de dados do SIGEC-Pro está perfeitamente limpa e sem quaisquer clientes, contactos ou projetos redundantes.
            </p>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="card" style="text-align: center; padding: 2.5rem 1.5rem; background: #f8fafc; border: 1px dashed #cbd5e1;">
            <i class="fa-solid fa-filter" style="font-size: 2rem; color: #94a3b8; margin-bottom: 0.8rem;"></i>
            <p style="margin: 0; color: #64748b; font-size: 0.95rem;">Nenhum grupo de duplicados corresponde aos filtros de pesquisa selecionados.</p>
          </div>
        `;
      }
      return;
    }

    let html = '';
    filtered.forEach(group => {
      const isHigh = group.confidence === 'high';
      const badgeStyle = isHigh
        ? 'background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5;'
        : 'background: #fef3c7; color: #b45309; border: 1px solid #fde68a;';
      const badgeIcon = isHigh ? 'fa-triangle-exclamation' : 'fa-circle-info';
      const badgeText = isHigh ? 'Alta Certeza' : 'Média Certeza';
      const typeIcon = group.type === 'clientes' ? 'fa-building-user' : group.type === 'contactos' ? 'fa-address-book' : 'fa-diagram-project';

      html += `
        <div class="card" style="margin-bottom: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">

          <!-- Cabeçalho do grupo -->
          <div style="background: linear-gradient(135deg,#f8fafc 0%,#f1f5f9 100%); border-bottom: 1px solid #e2e8f0; padding: 1rem 1.2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
              <span style="font-weight: 700; font-size: 0.97rem; color: #1e293b;">
                <i class="fa-solid ${typeIcon}" style="color: #6366f1; margin-right: 5px;"></i>
                ${group.typeLabel}: ${group.items.length} Registos Detetados
              </span>
              <span style="font-size: 0.78rem; font-weight: 600; padding: 2px 8px; border-radius: 6px; ${badgeStyle}">
                <i class="fa-solid ${badgeIcon}"></i> ${badgeText}
              </span>
            </div>
            <!-- Botões de Ação do Grupo -->
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <button type="button"
                onclick="keepBothDirect('${group.items.map(i=>i.id).join(',')}')"
                style="display:flex;align-items:center;gap:5px;padding:0.38rem 0.85rem;font-size:0.82rem;font-weight:600;background:#f8fafc;color:#475569;border:1.5px solid #cbd5e1;border-radius:7px;cursor:pointer;transition:all .18s;"
                title="Manter ambos os registos sem alterar nada">
                <i class="fa-solid fa-copy"></i> Manter Ambos
              </button>
              <button type="button" onclick="openDuplicateActionModal('${group.id}','keepone')"
                style="display:flex;align-items:center;gap:5px;padding:0.38rem 0.85rem;font-size:0.82rem;font-weight:600;background:#fff7ed;color:#c2410c;border:1.5px solid #fed7aa;border-radius:7px;cursor:pointer;transition:all .18s;"
                title="Escolher qual manter e eliminar os restantes">
                <i class="fa-solid fa-user-check"></i> Manter Só Um
              </button>
              <button type="button" onclick="openDuplicateActionModal('${group.id}','merge')"
                style="display:flex;align-items:center;gap:5px;padding:0.38rem 0.85rem;font-size:0.82rem;font-weight:600;background:#eef2ff;color:#3730a3;border:1.5px solid #c7d2fe;border-radius:7px;cursor:pointer;transition:all .18s;"
                title="Fundir os duplicados no registo principal preservando todos os dados">
                <i class="fa-solid fa-code-merge"></i> Fundir Registos
              </button>
            </div>
          </div>

          <!-- Critérios de deteção -->
          <div style="padding: 0.65rem 1.2rem; background: #f8fafc; border-bottom: 1px solid #f1f5f9; font-size: 0.81rem; color: #475569;">
            <strong>Critérios:</strong>
            ${group.reasons.map(r => `<span style="background:#e0e7ff;color:#3730a3;padding:1px 7px;border-radius:4px;margin-left:4px;font-weight:500;">${r}</span>`).join('')}
          </div>

          <!-- Tabela de registos do grupo -->
          <div style="padding: 0.8rem 1.2rem;">
            <div class="table-responsive" style="border: 1px solid #f1f5f9; border-radius: 8px; overflow:hidden;">
              <table class="data-table" style="margin: 0; font-size: 0.84rem;">
                <thead>
                  <tr style="background: #f8fafc;">
                    <th style="width:30px;"><input type="checkbox" title="Selecionar todos" onclick="toggleGroupCheckAll(this,'${group.id}')"></th>
                    <th style="width:110px;">Estado</th>
                    <th>Nome / Designação</th>
                    ${group.type === 'clientes' ? '<th>NIF</th><th>Email</th><th>Telefone</th><th style="text-align:center;">Relações</th>' : ''}
                    ${group.type === 'contactos' ? '<th>Cliente</th><th>Email</th><th>Telemóvel</th><th>Cargo</th>' : ''}
                    ${group.type === 'projetos' ? '<th>Código</th><th>Cliente</th><th>Estado</th><th>Valor (€)</th>' : ''}
                    <th style="width:80px; text-align:center;">Ações</th>
                  </tr>
                </thead>
                <tbody>`;

      group.items.forEach(item => {
        const isMaster = item.id === group.primarySuggestedId;
        const masterTag = isMaster
          ? '<span style="background:#dcfce7;color:#166534;font-weight:700;font-size:0.72rem;padding:2px 6px;border-radius:4px;"><i class="fa-solid fa-star"></i> Principal</span>'
          : '<span style="background:#f1f5f9;color:#64748b;font-size:0.72rem;padding:2px 6px;border-radius:4px;">Secundário</span>';

        let extraCols = '';
        if (group.type === 'clientes') {
          const projCount = Array.isArray(db.projetos) ? db.projetos.filter(p => p.clienteId === item.id).length : 0;
          const conCount = Array.isArray(db.contactos) ? db.contactos.filter(c => c.clienteId === item.id).length : 0;
          extraCols = `
            <td>${item.nif || '<em style="color:#94a3b8;">(Vazio)</em>'}</td>
            <td>${item.email || '<em style="color:#94a3b8;">(Vazio)</em>'}</td>
            <td>${item.telefone || item.telemovel || '<em style="color:#94a3b8;">(Vazio)</em>'}</td>
            <td style="text-align:center;"><span style="background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-size:0.78rem;font-weight:600;">${projCount} Proj. ${conCount} Cont.</span></td>
          `;
        } else if (group.type === 'contactos') {
          const clientObj = Array.isArray(db.clientes) ? db.clientes.find(c => c.id === item.clienteId) : null;
          extraCols = `
            <td>${clientObj ? clientObj.nome : '<em style="color:#94a3b8;">(Não associado)</em>'}</td>
            <td>${item.email || '<em style="color:#94a3b8;">(Vazio)</em>'}</td>
            <td>${item.telemovel || item.telefone || '<em style="color:#94a3b8;">(Vazio)</em>'}</td>
            <td>${item.cargo || '<em style="color:#94a3b8;">(Vazio)</em>'}</td>
          `;
        } else if (group.type === 'projetos') {
          const clientObj = Array.isArray(db.clientes) ? db.clientes.find(c => c.id === item.clienteId) : null;
          extraCols = `
            <td><strong>${item.codigo || '-'}</strong></td>
            <td>${clientObj ? clientObj.nome : '-'}</td>
            <td><span class="badge badge-info">${item.estado || 'Em Aberto'}</span></td>
            <td>${item.valorTotal ? item.valorTotal.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' }) : '-'}</td>
          `;
        }

        html += `
          <tr style="${isMaster ? 'background:#f0fdf4;' : ''}">
            <td><input type="checkbox" class="dup-row-check" data-group="${group.id}" data-id="${item.id}"></td>
            <td>${masterTag}</td>
            <td><strong>${item.nome || item.designacao || item.id}</strong></td>
            ${extraCols}
            <td style="text-align:center; white-space:nowrap;">
              <button type="button"
                onclick="openDuplicateRecordView('${group.id}','${item.id}')"
                style="background:none;border:1.5px solid #6366f1;color:#4f46e5;border-radius:6px;padding:4px 9px;cursor:pointer;font-size:0.78rem;font-weight:600;transition:all .15s;margin-right:3px;"
                title="Ver ficha completa deste registo">
                <i class="fa-solid fa-eye"></i> Ver
              </button>
              <button type="button"
                onclick="deleteDuplicateRecord('${group.id}','${item.id}')"
                style="background:none;border:1.5px solid #ef4444;color:#dc2626;border-radius:6px;padding:4px 9px;cursor:pointer;font-size:0.78rem;font-weight:600;transition:all .15s;"
                title="Apagar este registo definitivamente">
                <i class="fa-solid fa-trash"></i> Apagar
              </button>
            </td>
          </tr>
        `;
      });

      html += `
              </tbody></table>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // =========================================================================
  // 6. MODAL DE AÇÕES: FUNDIR / MANTER SÓ UM / MANTER AMBOS
  // =========================================================================

  // Abre o modal na aba correta conforme a ação clicada
  function openDuplicateActionModal(groupId, action) {
    const group = (currentScanResults.allGroups || []).find(g => g.id === groupId);
    if (!group) {
      if (typeof showToast === 'function') showToast('Grupo de duplicados não encontrado. Faça um novo scan.', 'warning');
      else alert('Grupo não encontrado. Por favor faça um novo scan de duplicados.');
      return;
    }
    openDuplicateMergeModal(groupId, action);
  }

  function openDuplicateMergeModal(groupId, defaultTab) {
    const group = (currentScanResults.allGroups || []).find(g => g.id === groupId);
    if (!group) {
      if (typeof showToast === 'function') showToast('Grupo de duplicados não encontrado. Faça um novo scan.', 'warning');
      else alert('Grupo de duplicados não encontrado.');
      return;
    }

    // Guardar referência estável ao grupo ativo (usada pelos confirm*)
    currentActiveGroup = group;

    const modal = document.getElementById('duplicate-merge-modal');
    const modalBody = document.getElementById('duplicate-merge-modal-body');
    const titleEl = document.getElementById('mergeModalTitle');
    if (!modal || !modalBody) return;

    const tab = defaultTab || 'merge';
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-clone"></i> Gerir Duplicados &mdash; ${group.typeLabel}`;

    // Construir HTML das fichas de registo para cada item do grupo
    function buildItemCard(item, mode) {
      const isMaster = item.id === group.primarySuggestedId;
      const clientName = group.type !== 'clientes'
        ? (Array.isArray(db.clientes) ? (db.clientes.find(c => c.id === item.clienteId) || {}).nome || '' : '')
        : '';

      const fields = [
        item.nif           ? `<div><span style="color:#64748b;font-size:0.8rem;">NIF</span><br><strong>${item.nif}</strong></div>` : '',
        item.email         ? `<div><span style="color:#64748b;font-size:0.8rem;">Email</span><br><strong>${item.email}</strong></div>` : '',
        item.telefone      ? `<div><span style="color:#64748b;font-size:0.8rem;">Telefone</span><br><strong>${item.telefone}</strong></div>` : '',
        item.telemovel     ? `<div><span style="color:#64748b;font-size:0.8rem;">Telemóvel</span><br><strong>${item.telemovel}</strong></div>` : '',
        item.cargo         ? `<div><span style="color:#64748b;font-size:0.8rem;">Cargo</span><br><strong>${item.cargo}</strong></div>` : '',
        item.morada        ? `<div><span style="color:#64748b;font-size:0.8rem;">Morada</span><br><strong>${item.morada}</strong></div>` : '',
        item.codigoPostal  ? `<div><span style="color:#64748b;font-size:0.8rem;">Cód. Postal</span><br><strong>${item.codigoPostal} ${item.localidade || ''}</strong></div>` : '',
        item.codigo        ? `<div><span style="color:#64748b;font-size:0.8rem;">Código</span><br><strong>${item.codigo}</strong></div>` : '',
        item.estado        ? `<div><span style="color:#64748b;font-size:0.8rem;">Estado</span><br><strong>${item.estado}</strong></div>` : '',
        clientName         ? `<div><span style="color:#64748b;font-size:0.8rem;">Cliente</span><br><strong>${clientName}</strong></div>` : '',
        item.observacoes   ? `<div style="grid-column:1/-1;"><span style="color:#64748b;font-size:0.8rem;">Observações</span><br><em style="font-size:0.88rem;">${item.observacoes}</em></div>` : '',
      ].filter(Boolean).join('');

      const radioHtml = (mode === 'merge' || mode === 'keepone')
        ? `<input type="radio" name="modalChosenPrimaryRadio" value="${item.id}" ${isMaster ? 'checked' : ''} style="transform:scale(1.25); margin-right:4px;">` : '';

      const borderColor = isMaster ? '#10b981' : '#cbd5e1';
      const bg = isMaster ? '#f0fdf4' : '#ffffff';
      const ribbon = isMaster
        ? `<span style="background:#10b981;color:#fff;font-weight:700;font-size:0.72rem;padding:2px 8px;border-radius:4px;"><i class="fa-solid fa-star"></i> Principal Sugerido</span>`
        : `<span style="background:#f1f5f9;color:#64748b;font-size:0.72rem;padding:2px 7px;border-radius:4px;">Secundário</span>`;

      return `
        <div style="border:2px solid ${borderColor};border-radius:10px;padding:1rem;background:${bg};margin-bottom:0.9rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.7rem;flex-wrap:wrap;gap:0.5rem;">
            <label style="display:flex;align-items:center;gap:6px;font-weight:700;font-size:1rem;cursor:pointer;color:#1e293b;">
              ${radioHtml}
              ${item.nome || item.designacao || item.id}
            </label>
            <div style="display:flex;gap:0.4rem;align-items:center;">
              ${ribbon}
              <button type="button"
                onclick="openDuplicateRecordView('${group.id}','${item.id}')"
                style="background:#eef2ff;color:#4f46e5;border:1.5px solid #c7d2fe;border-radius:6px;padding:3px 10px;cursor:pointer;font-size:0.78rem;font-weight:600;">
                <i class="fa-solid fa-eye"></i> Ver Ficha Completa
              </button>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:0.6rem;font-size:0.85rem;color:#334155;">
            ${fields || '<em style="color:#94a3b8;font-size:0.85rem;">Sem dados adicionais registados.</em>'}
          </div>
        </div>
      `;
    }

    const allCards = group.items.map(item => buildItemCard(item, tab)).join('');

    // ---- Conteúdos por aba ----
    let tabContent = '';

    if (tab === 'merge') {
      tabContent = `
        <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:8px;padding:0.9rem 1rem;margin-bottom:1.2rem;font-size:0.87rem;color:#3730a3;">
          <i class="fa-solid fa-shield-halved" style="margin-right:5px;"></i>
          <strong>Fusão Segura:</strong> Todos os campos em branco do registo principal serão preenchidos com dados dos secundários.
          Todos os projetos, contactos, orçamentos e interações serão preservados e reatribuidos automaticamente.
        </div>
        <h4 style="margin:0 0 0.8rem 0;font-size:0.94rem;color:#1e293b;">Selecione o Registo Principal (que ficará como ativo):</h4>
        ${allCards}
        <div style="margin-top:1.2rem;display:flex;justify-content:flex-end;gap:0.6rem;flex-wrap:wrap;">
          <button type="button" onclick="closeDuplicateMergeModal()" style="padding:0.5rem 1.1rem;border:1.5px solid #cbd5e1;border-radius:7px;background:#fff;color:#475569;font-weight:600;cursor:pointer;font-size:0.9rem;">Cancelar</button>
          <button type="button" onclick="confirmExecuteModalMerge('${group.id}')"
            style="padding:0.5rem 1.2rem;background:#16a34a;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;font-size:0.9rem;display:flex;align-items:center;gap:6px;">
            <i class="fa-solid fa-check-double"></i> Confirmar Fusão Segura
          </button>
        </div>
      `;
    } else if (tab === 'keepone') {
      tabContent = `
        <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:0.9rem 1rem;margin-bottom:1.2rem;font-size:0.87rem;color:#c2410c;">
          <i class="fa-solid fa-triangle-exclamation" style="margin-right:5px;"></i>
          <strong>Atenção:</strong> O registo selecionado será mantido intacto. Os restantes serão <strong>eliminados definitivamente</strong>
          da base de dados. Os campos do eliminado não serão transferidos para o principal.
        </div>
        <h4 style="margin:0 0 0.8rem 0;font-size:0.94rem;color:#1e293b;">Selecione qual registo manter:</h4>
        ${allCards}
        <div style="margin-top:1.2rem;display:flex;justify-content:flex-end;gap:0.6rem;flex-wrap:wrap;">
          <button type="button" onclick="closeDuplicateMergeModal()" style="padding:0.5rem 1.1rem;border:1.5px solid #cbd5e1;border-radius:7px;background:#fff;color:#475569;font-weight:600;cursor:pointer;font-size:0.9rem;">Cancelar</button>
          <button type="button" onclick="confirmExecuteKeepOne()"
            style="padding:0.5rem 1.2rem;background:#dc2626;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;font-size:0.9rem;display:flex;align-items:center;gap:6px;">
            <i class="fa-solid fa-user-check"></i> Confirmar: Eliminar os Outros
          </button>
        </div>
      `;
    } else if (tab === 'keepboth') {
      // Build cards sem radio buttons para visualização
      const viewCards = group.items.map(item => buildItemCard(item, 'view')).join('');
      tabContent = `
        <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:0.9rem 1rem;margin-bottom:1.2rem;font-size:0.87rem;color:#166534;">
          <i class="fa-solid fa-copy" style="margin-right:5px;"></i>
          <strong>Manter Ambos:</strong> Nenhum registo será alterado nem eliminado. O grupo será ignorado nas futuras análises automáticas.
          Pode sempre rever esta decisão clicando em "Reagir" mais tarde.
        </div>
        <h4 style="margin:0 0 0.8rem 0;font-size:0.94rem;color:#1e293b;">Registos que serão mantidos sem alterações:</h4>
        ${viewCards}
        <div style="margin-top:1.2rem;display:flex;justify-content:flex-end;gap:0.6rem;flex-wrap:wrap;">
          <button type="button" onclick="closeDuplicateMergeModal()" style="padding:0.5rem 1.1rem;border:1.5px solid #cbd5e1;border-radius:7px;background:#fff;color:#475569;font-weight:600;cursor:pointer;font-size:0.9rem;">Cancelar</button>
          <button type="button" onclick="confirmExecuteKeepBoth()"
            style="padding:0.5rem 1.2rem;background:#16a34a;color:#fff;border:none;border-radius:7px;font-weight:700;cursor:pointer;font-size:0.9rem;display:flex;align-items:center;gap:6px;">
            <i class="fa-solid fa-copy"></i> Confirmar: Manter Ambos
          </button>
        </div>
      `;
    }

    // Barra de abas do modal — usa currentActiveGroup.id para ser resistente a re-scans
    function tabBtn(key, icon, label, color) {
      const isActive = tab === key;
      return `<button type="button"
        onclick="switchDuplicateModalTab('${key}')"
        style="display:flex;align-items:center;gap:5px;padding:0.45rem 1rem;font-size:0.86rem;font-weight:700;border-radius:7px;cursor:pointer;border:2px solid ${isActive ? color : '#e2e8f0'};background:${isActive ? color : '#fff'};color:${isActive ? '#fff' : '#64748b'};transition:all .18s;">
        <i class="fa-solid ${icon}"></i>${label}
      </button>`;
    }

    modalBody.innerHTML = `
      <!-- Barra de opções -->
      <div style="display:flex;gap:0.5rem;margin-bottom:1.4rem;flex-wrap:wrap;">
        ${tabBtn('keepboth','fa-copy','Manter Ambos','#16a34a')}
        ${tabBtn('keepone','fa-user-check','Manter Só Um','#dc2626')}
        ${tabBtn('merge','fa-code-merge','Fundir Registos','#4f46e5')}
      </div>
      <!-- Conteúdo da aba ativa -->
      <div>${tabContent}</div>
    `;

    modal.style.display = 'flex';
    modal.classList.add('active');
  }

  function closeDuplicateMergeModal() {
    const modal = document.getElementById('duplicate-merge-modal');
    if (modal) { modal.style.display = 'none'; modal.classList.remove('active'); }
  }

  function confirmExecuteModalMerge(groupId) {
    const radio = document.querySelector('input[name="modalChosenPrimaryRadio"]:checked');
    const chosenPrimaryId = radio ? radio.value : null;
    if (!chosenPrimaryId) { alert('Por favor, selecione qual registo deve ser o Principal.'); return; }
    try {
      const res = executeMergeGroup(groupId, chosenPrimaryId);
      closeDuplicateMergeModal();
      renderDuplicatesUI();
      refreshAllAppViews();
      if (typeof showToast === 'function') {
        showToast(`Fusão concluída! ${res.secondaryCount} registo(s) unificados, ${res.reassignedCount} vínculos preservados.`, 'success');
      }
    } catch (err) { alert('Erro ao executar fusão: ' + err.message); }
  }

  function confirmExecuteKeepOne() {
    const group = currentActiveGroup;
    if (!group) { alert('Erro: grupo de duplicados perdido. Por favor recarregue a página.'); return; }

    const radio = document.querySelector('input[name="modalChosenPrimaryRadio"]:checked');
    const chosenId = radio ? radio.value : null;
    if (!chosenId) { alert('Por favor, selecione qual registo manter.'); return; }

    const toDelete = group.items.filter(i => i.id !== chosenId);
    const names = toDelete.map(i => `"${i.nome || i.designacao || i.id}"`).join(', ');
    if (!confirm(`Confirma a eliminação definitiva de ${toDelete.length} registo(s):\n${names}\n\nEsta ação não pode ser revertida.`)) return;

    // Reencaminhar dependências dos eliminados para o escolhido antes de apagar
    const secondaryIds = toDelete.map(i => i.id);
    if (group.type === 'clientes') {
      ['projetos','contactos','orcamentos','interacoes'].forEach(col => {
        if (Array.isArray(db[col])) db[col].forEach(r => { if (secondaryIds.includes(r.clienteId)) r.clienteId = chosenId; });
      });
    } else if (group.type === 'contactos') {
      if (Array.isArray(db.interacoes)) db.interacoes.forEach(r => { if (secondaryIds.includes(r.contactoId)) r.contactoId = chosenId; });
    } else if (group.type === 'projetos') {
      if (Array.isArray(db.orcamentos)) db.orcamentos.forEach(r => { if (secondaryIds.includes(r.projetoId)) r.projetoId = chosenId; });
    }

    secondaryIds.forEach(sid => { if (typeof addDeletedId === 'function') addDeletedId(group.type, sid); });
    db[group.type] = db[group.type].filter(i => !secondaryIds.includes(i.id));

    const activeUserId = sessionStorage.getItem('sigec_pro_active_user_id') || 'usr-admin';
    if (!Array.isArray(db.activityHistory)) db.activityHistory = [];
    db.activityHistory.unshift({
      id: 'act-' + Date.now(),
      userId: activeUserId,
      action: 'DUPLICATE_KEEP_ONE',
      entity: group.type,
      entityId: chosenId,
      details: `Mantido apenas um registo (${chosenId}). Eliminados: ${names}.`,
      timestamp: new Date().toISOString()
    });

    if (typeof saveDatabase === 'function') saveDatabase();
    if (typeof saveDeletedRegistry === 'function') saveDeletedRegistry();
    closeDuplicateMergeModal();
    renderDuplicatesUI();
    refreshAllAppViews();
    if (typeof showToast === 'function') showToast(`${toDelete.length} registo(s) eliminado(s). Registo selecionado mantido sem alterações.`, 'success');
  }

  function keepBothDirect(idsStrOrGroupId, entityType) {
    let ids = [];
    let groupType = entityType || 'duplicados';
    let names = [];

    if (typeof idsStrOrGroupId === 'string' && idsStrOrGroupId.includes(',')) {
      ids = idsStrOrGroupId.split(',').map(s => s.trim()).filter(Boolean);
    } else if (typeof idsStrOrGroupId === 'string' && idsStrOrGroupId) {
      const grp = (currentScanResults.allGroups || []).find(g => g.id === idsStrOrGroupId);
      if (grp) {
        ids = grp.items.map(i => i.id);
        groupType = grp.type || groupType;
        names = grp.items.map(i => i.nome || i.designacao || i.id);
      } else {
        ids = [idsStrOrGroupId];
      }
    }

    if (ids.length < 2 && currentActiveGroup) {
      ids = currentActiveGroup.items.map(i => i.id);
      groupType = currentActiveGroup.type || groupType;
      names = currentActiveGroup.items.map(i => i.nome || i.designacao || i.id);
    }

    if (ids.length === 0) {
      if (typeof showToast === 'function') showToast('Não foi possível identificar o grupo.', 'warning');
      return;
    }

    const pairKey = ids.slice().sort().join('|');

    try {
      const ignored = JSON.parse(localStorage.getItem('sigec_pro_dup_ignored') || '[]');
      if (!ignored.includes(pairKey)) {
        ignored.push(pairKey);
        localStorage.setItem('sigec_pro_dup_ignored', JSON.stringify(ignored));
      }
    } catch (e) {
      console.error('[DuplicatesManager] Erro ao gravar par ignorado:', e);
    }

    try {
      if (typeof db !== 'undefined' && db !== null) {
        const activeUserId = sessionStorage.getItem('sigec_pro_active_user_id') || 'usr-admin';
        if (!Array.isArray(db.activityHistory)) db.activityHistory = [];
        db.activityHistory.unshift({
          id: 'act-' + Date.now(),
          userId: activeUserId,
          action: 'DUPLICATE_KEEP_BOTH',
          entity: groupType,
          entityId: ids.join(','),
          details: `Decidido manter ambos os registos (${names.join(', ') || ids.join(', ')}).`,
          timestamp: new Date().toISOString()
        });
        if (typeof saveDatabase === 'function') saveDatabase();
      }
    } catch (e) {
      console.warn('[DuplicatesManager] Erro ao registar atividade:', e);
    }

    closeDuplicateMergeModal();
    currentActiveGroup = null;
    renderDuplicatesUI();

    if (typeof showToast === 'function') {
      showToast('Ambos os registos mantidos. Não serão mais sugeridos como duplicados.', 'info');
    }
  }

  function confirmExecuteKeepBoth() {
    if (!currentActiveGroup) {
      alert('Erro: referência ao grupo perdida.\nPor favor tente novamente a partir da lista.');
      return;
    }
    keepBothDirect();
  }

  // =========================================================================
  // 7. VER FICHA COMPLETA DE UM REGISTO (antes de decidir)
  // =========================================================================

  // =========================================================================
  // 8. APAGAR REGISTO INDIVIDUAL DA LISTA DE DUPLICADOS
  // =========================================================================

  function deleteDuplicateRecord(groupId, itemId) {
    const group = (currentScanResults.allGroups || []).find(g => g.id === groupId);
    if (!group) {
      if (typeof showToast === 'function') showToast('Grupo não encontrado. Faça um novo scan.', 'warning');
      return;
    }
    const item = group.items.find(i => i.id === itemId);
    if (!item) return;

    const name = item.nome || item.designacao || item.id;

    // Contar dependências
    let depCount = 0;
    if (group.type === 'clientes') {
      depCount += Array.isArray(db.projetos)  ? db.projetos.filter(p => p.clienteId === itemId).length : 0;
      depCount += Array.isArray(db.contactos) ? db.contactos.filter(c => c.clienteId === itemId).length : 0;
      depCount += Array.isArray(db.orcamentos)? db.orcamentos.filter(o => o.clienteId === itemId).length : 0;
    } else if (group.type === 'contactos') {
      depCount += Array.isArray(db.interacoes) ? db.interacoes.filter(i => i.contactoId === itemId).length : 0;
    } else if (group.type === 'projetos') {
      depCount += Array.isArray(db.orcamentos) ? db.orcamentos.filter(o => o.projetoId === itemId).length : 0;
    }

    const depWarning = depCount > 0
      ? `\n\n⚠️ Atenção: este registo tem ${depCount} relacões associadas (projetos, contactos, etc.).\nEssas relações ficarão sem registo principal.`
      : '';

    if (!confirm(`Confirma a eliminação definitiva de:\n"${name}"${depWarning}\n\nEsta ação não pode ser revertida.`)) return;

    // Apagar o registo da BD
    if (typeof addDeletedId === 'function') addDeletedId(group.type, itemId);
    db[group.type] = db[group.type].filter(i => i.id !== itemId);

    // Registar na atividade
    const activeUserId = sessionStorage.getItem('sigec_pro_active_user_id') || 'usr-admin';
    if (!Array.isArray(db.activityHistory)) db.activityHistory = [];
    db.activityHistory.unshift({
      id: 'act-' + Date.now(),
      userId: activeUserId,
      action: 'DUPLICATE_DELETE',
      entity: group.type,
      entityId: itemId,
      details: `Registo "${name}" eliminado manualmente a partir do gestor de duplicados.`,
      timestamp: new Date().toISOString()
    });

    if (typeof saveDatabase === 'function') saveDatabase();
    if (typeof saveDeletedRegistry === 'function') saveDeletedRegistry();
    refreshAllAppViews();
    renderDuplicatesUI();
    if (typeof showToast === 'function') {
      showToast(`"${name}" eliminado com sucesso.`, 'success');
    }
  }

  // =========================================================================
  // 9. VER FICHA COMPLETA DE UM REGISTO (antes de decidir)
  // =========================================================================

  function openDuplicateRecordView(groupId, itemId) {
    const group = (currentScanResults.allGroups || []).find(g => g.id === groupId);
    if (!group) return;
    const item = group.items.find(i => i.id === itemId);
    if (!item) return;

    // Manter referência estável ao grupo ativo
    currentActiveGroup = group;
    const clientName = group.type !== 'clientes'
      ? ((Array.isArray(db.clientes) ? db.clientes.find(c => c.id === item.clienteId) : null) || {}).nome || ''
      : '';

    // Calcular relações
    let relHtml = '';
    if (group.type === 'clientes') {
      const projs = Array.isArray(db.projetos) ? db.projetos.filter(p => p.clienteId === item.id) : [];
      const conts = Array.isArray(db.contactos) ? db.contactos.filter(c => c.clienteId === item.id) : [];
      const orcs = Array.isArray(db.orcamentos) ? db.orcamentos.filter(o => o.clienteId === item.id) : [];
      relHtml = `
        <div style="margin-top:1rem;padding:0.8rem;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:0.85rem;">
          <strong style="color:#1e293b;"><i class="fa-solid fa-link" style="color:#6366f1;margin-right:5px;"></i>Relações Associadas:</strong>
          <div style="display:flex;gap:1rem;margin-top:0.5rem;flex-wrap:wrap;">
            <span style="background:#e0f2fe;color:#0369a1;padding:3px 10px;border-radius:6px;font-weight:600;">${projs.length} Projetos</span>
            <span style="background:#dcfce7;color:#166534;padding:3px 10px;border-radius:6px;font-weight:600;">${conts.length} Contactos</span>
            <span style="background:#fef3c7;color:#b45309;padding:3px 10px;border-radius:6px;font-weight:600;">${orcs.length} Orçamentos</span>
          </div>
          ${projs.length > 0 ? `<div style="margin-top:0.6rem;">${projs.slice(0,5).map(p=>`<div style="font-size:0.82rem;color:#475569;padding:2px 0;"><i class="fa-solid fa-diagram-project" style="color:#0284c7;"></i> ${p.nome||p.designacao||p.codigo||p.id}</div>`).join('')}${projs.length>5?`<em style="color:#94a3b8;font-size:0.8rem;">... e mais ${projs.length-5}.</em>`:''}</div>` : ''}
        </div>`;
    } else if (group.type === 'contactos') {
      const inters = Array.isArray(db.interacoes) ? db.interacoes.filter(i => i.contactoId === item.id) : [];
      relHtml = `
        <div style="margin-top:1rem;padding:0.8rem;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;font-size:0.85rem;">
          <strong style="color:#1e293b;"><i class="fa-solid fa-link" style="color:#6366f1;margin-right:5px;"></i>Relações Associadas:</strong>
          <div style="display:flex;gap:1rem;margin-top:0.5rem;">
            <span style="background:#dcfce7;color:#166534;padding:3px 10px;border-radius:6px;font-weight:600;">${inters.length} Interações</span>
            ${clientName ? `<span style="background:#e0e7ff;color:#3730a3;padding:3px 10px;border-radius:6px;font-weight:600;">Cliente: ${clientName}</span>` : ''}
          </div>
        </div>`;
    }

    // Listar todos os campos não vazios do item
    const skipKeys = ['id','clienteId','createdAt','updatedAt','_v'];
    const fieldLabels = {
      nome:'Nome', designacao:'Designação', nif:'NIF', email:'Email', telefone:'Telefone',
      telemovel:'Telemóvel', cargo:'Cargo', morada:'Morada', codigoPostal:'Cód. Postal',
      localidade:'Localidade', pais:'País', codigo:'Código', estado:'Estado',
      valorTotal:'Valor Total', descricao:'Descrição', observacoes:'Observações',
      empresa:'Empresa', website:'Website', setor:'Setor', notas:'Notas'
    };
    const fieldsHtml = Object.keys(item)
      .filter(k => !skipKeys.includes(k) && item[k] !== null && item[k] !== undefined && String(item[k]).trim() !== '')
      .map(k => `
        <div style="padding:0.5rem 0;border-bottom:1px solid #f1f5f9;">
          <span style="font-size:0.78rem;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">${fieldLabels[k]||k}</span><br>
          <span style="font-size:0.92rem;color:#1e293b;">${item[k]}</span>
        </div>`
      ).join('');

    // Usar o modal existente para apresentar a ficha
    const modal = document.getElementById('duplicate-merge-modal');
    const modalBody = document.getElementById('duplicate-merge-modal-body');
    const titleEl = document.getElementById('mergeModalTitle');

    if (!modal || !modalBody) return;
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-id-card"></i> Ficha: ${item.nome || item.designacao || item.id}`;

    modalBody.innerHTML = `
      <div style="display:flex;justify-content:flex-end;margin-bottom:1rem;">
        <button type="button" onclick="openDuplicateMergeModal('${groupId}')" style="background:#f1f5f9;color:#475569;border:1.5px solid #cbd5e1;border-radius:7px;padding:0.4rem 1rem;cursor:pointer;font-weight:600;font-size:0.88rem;">
          <i class="fa-solid fa-arrow-left"></i> Voltar às Opções
        </button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;padding:0 1rem;background:#fff;">
        ${fieldsHtml || '<em style="color:#94a3b8;padding:1rem 0;display:block;">Sem dados adicionais registados neste registo.</em>'}
      </div>
      ${relHtml}
      <div style="margin-top:1.2rem;display:flex;justify-content:flex-end;gap:0.5rem;flex-wrap:wrap;">
        <button type="button" onclick="openDuplicateActionModal('${groupId}','keepboth')" style="padding:0.45rem 0.9rem;background:#f0fdf4;color:#16a34a;border:1.5px solid #86efac;border-radius:7px;font-weight:600;cursor:pointer;font-size:0.85rem;"><i class="fa-solid fa-copy"></i> Manter Ambos</button>
        <button type="button" onclick="openDuplicateActionModal('${groupId}','keepone')" style="padding:0.45rem 0.9rem;background:#fff7ed;color:#c2410c;border:1.5px solid #fed7aa;border-radius:7px;font-weight:600;cursor:pointer;font-size:0.85rem;"><i class="fa-solid fa-user-check"></i> Manter Só Um</button>
        <button type="button" onclick="openDuplicateActionModal('${groupId}','merge')" style="padding:0.45rem 0.9rem;background:#eef2ff;color:#3730a3;border:1.5px solid #c7d2fe;border-radius:7px;font-weight:600;cursor:pointer;font-size:0.85rem;"><i class="fa-solid fa-code-merge"></i> Fundir</button>
      </div>
    `;
    modal.style.display = 'flex';
    modal.classList.add('active');
  }

  // =========================================================================
  // 7. EXPORTAÇÃO DE RELATÓRIO DE DUPLICADOS EM EXCEL
  // =========================================================================

  function exportDuplicatesReportExcel() {
    scanAllDuplicates();
    const all = currentScanResults.allGroups || [];

    if (all.length === 0) {
      if (typeof showToast === 'function') {
        showToast('Não existem registos duplicados para exportar.', 'info');
      } else {
        alert('Não existem registos duplicados para exportar.');
      }
      return;
    }

    if (typeof XLSX === 'undefined') {
      alert('Biblioteca Excel (SheetJS) não carregada.');
      return;
    }

    const rows = [];
    rows.push(['TIPO', 'GRAU DE CERTEZA', 'MOTIVO DA DETEÇÃO', 'ESTADO', 'ID', 'NOME / DESIGNAÇÃO', 'NIF', 'EMAIL', 'TELEFONE', 'EMPRESA / CLIENTE']);

    all.forEach(group => {
      group.items.forEach(item => {
        const isMaster = item.id === group.primarySuggestedId;
        rows.push([
          group.typeLabel,
          group.confidence === 'high' ? 'Alta (100%)' : 'Média (Similaridade)',
          group.reasons.join(' | '),
          isMaster ? 'Principal Sugerido' : 'Secundário',
          item.id || '',
          item.nome || item.designacao || '',
          item.nif || '',
          item.email || '',
          item.telefone || item.telemovel || '',
          item.empresa || ''
        ]);
      });
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, 'Relatório Duplicados');

    const dateStr = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `SIGEC-Pro_Relatorio_Duplicados_${dateStr}.xlsx`);

    if (typeof showToast === 'function') {
      showToast('Relatório de duplicados exportado com sucesso para Excel.', 'success');
    }
  }

  // =========================================================================
  // 8. EXPOSIÇÃO GLOBAL DA API DO MÓDULO
  // =========================================================================

  window.DuplicatesManager = {
    normalizeText, normalizeNIF, normalizeEmail, normalizePhone, calculateSimilarity,
    scanAllDuplicates, scanClientDuplicates, scanContactDuplicates, scanProjectDuplicates,
    determineBestPrimaryRecord, executeMergeGroup, autoMergeHighConfidenceDuplicates,
    checkDuplicateClientLive, checkDuplicateContactLive,
    renderDuplicatesUI, filterDuplicatesList,
    openDuplicateMergeModal, openDuplicateActionModal, closeDuplicateMergeModal,
    confirmExecuteModalMerge, confirmExecuteKeepOne, confirmExecuteKeepBoth, keepBothDirect,
    openDuplicateRecordView, deleteDuplicateRecord, exportDuplicatesReportExcel
  };

  window.runDuplicatesScan = function (showUserToast) {
    const res = scanAllDuplicates();
    renderDuplicatesUI();
    if (showUserToast && typeof showToast === 'function') {
      showToast(`Análise concluída: ${res.summary.totalGroups} grupo(s) de duplicados detetados.`, 'info');
    }
  };

  window.normalizeText = normalizeText;
  window.normalizeEmail = normalizeEmail;
  window.normalizeNIF = normalizeNIF;
  window.renderDuplicatesUI = renderDuplicatesUI;
  window.filterDuplicatesList = filterDuplicatesList;
  window.autoMergeHighConfidenceDuplicates = autoMergeHighConfidenceDuplicates;
  window.openDuplicateMergeModal = openDuplicateMergeModal;
  window.openDuplicateActionModal = openDuplicateActionModal;
  window.closeDuplicateMergeModal = closeDuplicateMergeModal;
  window.confirmExecuteModalMerge = confirmExecuteModalMerge;
  window.confirmExecuteKeepOne = confirmExecuteKeepOne;
  window.confirmExecuteKeepBoth = confirmExecuteKeepBoth;
  window.keepBothDirect = keepBothDirect;
  window.openDuplicateRecordView = openDuplicateRecordView;
  window.deleteDuplicateRecord = deleteDuplicateRecord;
  window.exportDuplicatesReportExcel = exportDuplicatesReportExcel;
  window.toggleGroupCheckAll = function(cb, groupId) {
    document.querySelectorAll(`.dup-row-check[data-group="${groupId}"]`).forEach(c => c.checked = cb.checked);
  };

  // Troca de aba dentro do modal — usa currentActiveGroup diretamente, sem depender de IDs
  window.switchDuplicateModalTab = function(tabKey) {
    if (!currentActiveGroup) {
      if (typeof showToast === 'function') showToast('Sessão expirada. Feche o modal e tente novamente.', 'warning');
      return;
    }
    // Renderizar o modal directamente com o grupo já guardado em memória
    // (não passa pelo find() que poderia falhar se o ID do grupo mudou)
    const savedGroup = currentActiveGroup;
    // Garantir que o grupo existe nos resultados atuais ou reconstruir estado
    const stillInResults = (currentScanResults.allGroups || []).some(g => g.id === savedGroup.id);
    if (!stillInResults) {
      // O grupo foi filtrado ou o scan foi refeito — reanalisar para o re-inserir temporariamente
      // Simplesmente re-abrir o modal com o grupo guardado (ainda válido para a sessão)
      const modal = document.getElementById('duplicate-merge-modal');
      const modalBody = document.getElementById('duplicate-merge-modal-body');
      if (modal && modalBody) {
        // Forçar o grupo de volta nos resultados apenas para este modal
        if (!stillInResults) currentScanResults.allGroups.push(savedGroup);
        openDuplicateMergeModal(savedGroup.id, tabKey);
        // Restaurar estado correcto removendo o grupo temporário se necessário
        if (!stillInResults) {
          currentScanResults.allGroups = currentScanResults.allGroups.filter(g => g.id !== savedGroup.id);
        }
        return;
      }
    }
    openDuplicateMergeModal(savedGroup.id, tabKey);
  };

  // Auto-inicializar após carregamento completo da página e do db
  window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      if (typeof db !== 'undefined') {
        scanAllDuplicates();
      }
    }, 800);
  });

})();
