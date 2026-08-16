# AGENTS.md - Regras do Sistema SIGEC-Pro

## REGRA CRÍTICA DE ATUALIZAÇÃO E PRESERVAÇÃO INTEGRAL DE DADOS

### 1. NUNCA ALTERAR OU SOBRESCREVER DADOS REGISTADOS
Quando se atualiza o software (seja via atualização de ficheiros do sistema, pacotes de versão .json, scripts ou reinstalação de pacotes), **NÃO PODE HAVER QUALQUER ALTERAÇÃO DOS DADOS QUE ESTÃO REGISTADOS NO PROGRAMA ONDE VAI SER INSTALADO**.

### 2. RESPEITO ABSOLUTO PELOS DADOS DO UTILIZADOR
- Todos os dados existentes no programa do utilizador (Clientes, Contactos, Projetos, Interações, Utilizadores e Histórico de Atividade Real) têm prioridade absoluta.
- Ficheiros de atualização gerados ou pacotes de instalação NUNCA podem substituir, sobrescrever, alterar ou apagar registos já existentes na base de dados ativa (`localStorage`).
- Em caso de fusão de dados durante uma atualização de versão, se um registo já existir no programa de destino, o registo existente do utilizador DEVE SER MANTIDO INTACTO (`db.item = { ...incomingItem, ...existingUserItem }`).

### 3. ISOLAMENTO DE DADOS FICTÍCIOS
Nenhum ficheiro de atualização deve introduzir dados fictícios ou alterar os PINs, nomes ou registos de utilizadores configurados no programa onde é instalado.

### 4. GERAÇÃO DE PACOTES DE ATUALIZAÇÃO ESTRITAMENTE DE SOFTWARE
Ao gerar pacotes de atualização (botão "Gerar Pacote"), o pacote gerado DEVE conter EXCLUSIVAMENTE componentes e definições de software/sistema. NUNCA recolher, exportar ou incluir dados de registo de clientes, contactos ou projetos em pacotes de atualização. Os pacotes de atualização servem unicamente para atualizar ou restaurar o software e são armazenados na pasta "Atualização" do servidor GitHub.

### 5. GERAÇÃO DE ORÇAMENTOS (PDF / WORD) COM BLOCOS DE TEXTO CONTEXTUAIS OBRIGATÓRIOS
Ao gerar qualquer orçamento em PDF ou Word (via `printBudgetPDF` ou `exportBudgetToWord`):
- É **OBRIGATÓRIO** incluir integralmente todos os blocos de texto formais descritivos e contratuais:
  1. *Nota de Experiência Comprovada* (contextualizada ao setor de atividade real da proposta: bancário, saúde, governamental, formação tecnológica);
  2. *1. Descrição dos Trabalhos* (3 parágrafos realistas e precisos adaptados ao veículo específico: furgão, camião, smartbus, semirreboque ou unidade à medida);
  3. *2. Especificações Técnicas e Orçamentação por Capítulo*;
  4. *3. Avaliação Económica* (Quadro destacado do valor total global s/ IVA);
  5. *4. Prazo de Entrega, Garantia e Condições Comerciais* (prazos ajustados, garantias de equipamento e transformação, validade e transporte);
  6. *Notas Finais e Certificação ISO 9001:2015 Bureau Veritas*;
  7. *Assinatura e Contactos Oficiais da alegría-activity, S.L.*.
- Os textos devem ser realistas, profissionais, verdadeiros e sem dados inventados, sempre gerados a partir da função contextual do sistema (`generateBudgetContextualTexts`).

