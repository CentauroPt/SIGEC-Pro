# AGENTS.md - Regras do Sistema SIGEC-Pro

## REGRA FUNDAMENTAL DE ESCOPO E INTERVENÇÃO

### NÃO ALTERAR NADA QUE NÃO SEJA ESPECIFICAMENTE PEDIDO
- **PROIBIÇÃO ABSOLUTA DE ALTERAÇÕES NÃO SOLICITADAS**: O assistente/agente NUNCA deve modificar, adicionar, remover, refatorar ou estilizar qualquer ficheiro, código, layout, CSS ou funcionalidade que **NÃO tenha sido prévia e explicitamente solicitada pelo utilizador**.
- **SEM INICIATIVAS ADICIONAIS OU PRESUNÇÕES**: É expressamente proibido assumir tarefas adicionais por iniciativa própria, "melhorar" código adjacente não solicitado, antecipar passos não pedidos ou estender o escopo dos pedidos.
- **EXECUÇÃO ESTRITA E CIRÚRGICA**: Todas as respostas e edições devem limitar-se única e exclusivamente ao que foi pedido com precisão milimétrica.

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

### 6. INTEGRAÇÃO OBRIGATÓRIA DE CAMPOS E QUADROS DINÂMICOS NOS BLOCOS DE TEXTO
- Todos os campos e linhas adicionados dinamicamente nos quadros de orçamentação, assim como novos quadros/capítulos adicionados pelo utilizador (ex: capítulos 10, 11 ou títulos personalizados), **DEVEM ser obrigatoriamente incluídos nos blocos de texto descritivos e técnicos** ao gerar documentos em PDF e Word.
- O motor contextual com IA (`generateBudgetContextualTexts`) deve analisar os itens e descrições desses novos campos e capítulos, gerando parágrafos e especificações técnicas realistas, verdadeiras e fiéis aos padrões industriais e certificações da *alegría-activity, S.L.*, sem inventar dados, garantindo que nada do que foi orçamentado fique omitido na memória descritiva do projeto.

### 7. FILTRAGEM ESTRITA DE CAMPOS PREENCHIDOS NA IMPRESSÃO/EXPORTAÇÃO (PDF / WORD)
- Ao dar ordem de impressão de um orçamento para PDF ou para Word (`printBudgetPDF` ou `exportBudgetToWord`), **devem constar desse orçamento exclusivamente os campos que foram preenchidos** no formulário que está no separador Orçamentos (itens que possuam descrição informada ou valor atribuído).
- Em **todos os quadros do orçamento** (incluindo o quadro de **EQUIPAMENTOS OPCIONAIS** e quadros dinâmicos), se um campo/linha estiver vazio (sem descrição e com valor 0.00 / nulo), **NÃO deve constar da estrutura do documento impresso ou exportado**. Da mesma forma, capítulos ou quadros sem qualquer linha preenchida não devem ser impressos, e não deve ser introduzido nenhum dado fictício de fallback.
- O quadro **EQUIPAMENTOS OPCIONAIS** só deve aparecer no documento impresso em PDF ou Word se tiver campos preenchidos.
- **Quando se inicia um novo orçamento (ou se limpa o formulário), ele deve ter todos os valores a 0.00**, sem dados pré-preenchidos ou valores residuais, com o total a 0,00 €.
- A conformidade estrita com as regras de preservação de dados aplica-se integralmente a estes campos, garantindo que os dados reais introduzidos pelo utilizador são fielmente representados e preservados sem alterações.

### 8. CRITÉRIOS DE COMPARAÇÃO PARA DETEÇÃO DE DUPLICADOS (CLIENTES E CONTACTOS)
- **Comparação de Clientes**: A verificação e deteção de duplicados de clientes (tanto no modal de validação em tempo real como na página de Configuração no separador Duplicados) deve ser feita tendo em conta o **Nome do Cliente** (e não NIF genérico, email ou telefone isolados que possam colidir entre entidades distintas).
- **Comparação de Contactos**: A verificação e deteção de duplicados de contactos (tanto no modal de validação como na página de Configuração no separador Duplicados) deve ser feita através do **Nome e apelidos de cada contacto** (`nome + apelido`).
- **Preservação de Estrutura**: A estrutura visual, os modais e o fluxo do programa mantêm-se inalterados, modificando-se exclusivamente os dados e campos utilizados para a comparação.


