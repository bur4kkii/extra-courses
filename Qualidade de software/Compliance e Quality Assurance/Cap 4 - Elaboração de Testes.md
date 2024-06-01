# Visão da aplicação de estratégia de teste
- É necessário ser objetivo e econômico na hora de testar o software
# Casos de testes
- Conjuntos de simulações de uso e operação
- Casa caso simula uma situação, sob determinada condição operacional de carga de dados, uso e consumo de recursos computacionais
- Podem ser elaborados nas técnicas de:
	- Caixa preta -> Descrevendo o que deve ser alimentado como dado de entrada do programa e detalhado o que se espera como saida
	- Caixa branca -> Descrevendo como dado de entrada do programa de computador e detalhado o que se espera como saída, sendo essas entradas e saídas definidas em função da lógica interna do programa
- Também devem ser elaborados para atender aos diversos níveis de testes
	- Testes unitários -> Avaliando o funcionamento de um programa de forma isolada
	- Testes de integração -> Avaliando a integração do programa com outros programas
	- Testes de sistema -> Operações completas de negócio, baseadas em domínios de assuntos a tratar
	- Testes de aceitação -> Simulação de operações do domínio de negócio, adicionando-se a possibilidade de reailização de testes livres de exploração
![[Pasted image 20240601013356.png]]
- Teste positivo -> Avalia se o software funciona
- Teste negativo -> Avalia o quanto o software tolera e trata das tentativas de uso indevido que deveriam ocasionar falhas
## Testes com critérios livres
- São aqueles em que não são previstos de antemão os dados a serem alimentados no software e saidas previstas, em função do processamento pelo programa
## Testes com critérios dirigidos
- São aqueles que os valores a serem inputados no programa são expressamente pré definidos, exatamente como no cenário de teste
# Organização para executar testes
- Engenheiro de testes -> Que propõe as ferramentas, técnicas e passos para produzir e aplicar testes
- Arquitetos de testes -> Que prepara, ambientes, modularizam e roteirizam, aproveitando características de integração de componentes do produto de software
- Analista de testes -> Que definem os casos de testes
- Testadores -> Que aplicam os casos de testes e apontam resultados alcançados
- Gerentes de testes -> Que criam planos com recursos e cronograma de aplicação de roteiros e casos de testes, distribuem tarefas de testes, acompanham o ritmo dos trabalhos e os resultados alcançados
# Roteiros de testes
- Cada roteiro corresponde a um conjunto de casos de testes a serem aplicados em uma sequência determinada
- Criando um roteiro, aproveitamos as saidas de um caso de teste com entrada de um teste seguinte
## Planos de testes
- Dão uma visão geral de todos os roteiros de testes que serão aplicados pelos diversos testadores ao longo do tempo, criando um cronograma gerenciável
# Criação de casos de testes funcionais
## Modelos para planejamento e especificação de testes unitários com base no algoritmo do software
### Complexidade ciclomática
- A dificuldade de uma programação e testes associados está relacionada às decisões lógicas previstas no código da aplicação
- Thomas McCabe
- Identificação do número de pontos de decisão que o software possui em sua lógica
- Teste de caminhos mínimos
- Métrica de avaliação estrutural
- Caixa branca
- A complexidade de uma aplicação é calculada pela soma de nós de decisão + 1 e indica o numero de casos de teste que deverão ser produzidos para garantir que cada trecho do código de programa seja executado ao menos uma vez
![[Pasted image 20240601015043.png]]
### Teste de enlace
- Testes unitários funcionais
- Execução dos loops de um programa
- Quando testamos os loops devemos testar:
	- Não entrar no loop
	- Entrar no loop e sair sem reexecutar o trecho
	- Entrar no loop e rodar ao menos uma vez o enlace
### Teste de limites
- Modelo de Meyers
- Trabalha sobre 1 nó de decisão de aplicação
- Focar somente na entrada de dados próximos ao limite, sendo demais testes irrelevantes
### Participação/condição e equivalência
- Avaliação funcional e unitária
- Caixa branca
- Avalia grupos de valores que aplicam nas mesmas decisões e assim como o estudo de limite, ajuda a definir quais valores a serem informados para provocar desvios no programa de aplicação
## Modelos para planejamento e especificação de testes de integração com base da especificação de arquitetura e algoritmos
- Nível de integração
- Caixa branca
- Funcional
- Avaliar a troca de parâmetros entre um componente do software e outro componente que se comunica com o componente alvo dos testes
## Modelos para planejamento e especificação de testes finais de sistema
- Nível de sistema
- Aceitação/homologação
- Funcionais e não funcionais
- Caixa preta
### Teste com base em casos de uso
- Cenários de uso que foram desenhados a partir da interpretação dos documentos de caso de uso
- Tem como objetivo compreender o sistema como um todo
### Teste exploratório
- Testador fica livre para explorar a aplicação da forma que desejar
# Criação de casos de testes não funcionais
- Tempo de resposta das transações
- Facilidade de aprendizado
- Facilidade de uso e operação
- Tolerância a falhas
- Carga e estresse de aplicação
- Segurança
- Teste de portabilidade e interoperabilidade