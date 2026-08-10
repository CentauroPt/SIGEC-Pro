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
