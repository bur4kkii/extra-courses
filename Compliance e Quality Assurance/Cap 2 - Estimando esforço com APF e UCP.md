# Introdução às estimativas de projetos de software
- Métodos mais populares para estimativas de projetos são:
	- FPA - Function Point Analysis
	- COCOMO - Constructive Cost Model
	- UCP - Use case point
# Objetivos e dinâmica das técnicas de estimativa
- Auxiliar o cálculo de esforço e custo de um projeto de software quanto à mão de obra
- Para conseguir encontrar existem algumas coisas que precisamos pensar sobre:
	- Aspectos funcionais (Como será esse projeto, o que ele será, quais os objetivos, o que vai conter)
	- Aspectos não funcionais (Materiais, linguagens e recursos a serem utilizados)
	- Recursos (Como serão aplicadas as ferramentas, modelo de trabalho)
# O método de estimativa de pontuação por julgamento simples
- Planning Poker
- Sustentada principalmente pelo julgamento da equipe, baseado em opiniões
- Único modelo dentre os 3 abordados que não implica em nenhuma equação matemática
- Surgiu dentro de metodologias ágeis como SCRUM ou XP, mas pode ser aplicado em qualquer modelo de produção
- Passo a passo:
	1. Ter em mãos a lista de requisitos, ou backlog, do produto
	2. Componha uma equipe de produção que realizará o julgamento da complexidade, normalmente composta por quem realizará o projeto, é ideal que o julgamento seja de acordo com a competência da equipe
	3. Para cada um dos itens na lista os avaliadores deverão pontuar de acordo com um baralho de cartas numeradas, podendo esse valor ser definido de acordo com diversos métodos, como a sequência de Fibonacci ou de acordo com o tempo, até então os valores escolhidos por cada avaliador deve ficar escondido
	4. Após todos selecionarem uma carta então todas as cartas devem ser reveladas e em conjunto como time entrar em um acordo em relação ao valor escolhido por cada um, seja pela maioria ou por cada um justificando sua avaliação
	5. Então todos os pontos dos itens devem ser somados, assim encontrando o valor total do projeto
- Para definir o custo total do projeto, primeiro é necessário entender a forma que será distribuido as atividades do projeto, encontrando quanto tempo demorará pra entregar de acordo com a pontuação, após isso encontrando quantos pontos podem ser entregues por hora e assim multiplicando pelo valor do profissional por hora, utilizando uma formula parecida com a seguinte, podendo ser adaptada de acordo com a metodologia de gestão de projeto escolhida:
$$
c = v \cdot h \cdot (x / p)
$$
onde: 
c = Custo total
v = Valor médio do funcionário/hora
h = Horas trabalhadas/dia
x = Pontos totais do projeto
p = Pontos entregues/dia
# Métrica de estimativa function point analysis
- A FPA é bem parecida com o planning poker, porém suas pontuações são baseados em cálculos e fórmulas bem definidos, não apenas em julgamento do time
- Ela avaliará os requisitos funcionais, formando uma pontuação chamada Pontos de Função não ajustados, e os requisitos não funcionais, que serão utilizados para melhorar as estimativas, gerando os Pontos de Função Ajustados
- Para iniciar a Análise de Pontos de Função, precisamos decompor o projeto em Componentes funcionais básicos, classificando os requisitos funcionais da seguinte forma:
![[Pasted image 20240528210936.png]]
# Métrica de estimativa - use case points
- Foi criada após o inicio da aplicação das práticas de desenvolvimento de software Orientado a Objetos e do uso comercial da UML
- O modelo de estimativa UCP (Use case point) requer que os Casos de Uso do projeto de software tenham sido descritos com diagramas e documentos de descrição de Casos de Uso da UML