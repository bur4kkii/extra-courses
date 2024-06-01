# Fundamentos de gerenciamento da qualidade em projetos de software
- Uma empresa que garante a qualidade, não garante a ausência de defeitos, na verdade as empresas garantem a qualidade com práticas como:
	- Planejamento, monitoração e controle sobre o que se faz;
	- Execução dos trabalhos seguindo padrões que permitam repetir boas experiências;
	- Identificação rápida de problemas que venham a ocorrer;
	- Rastreabilidade do impacto dos problemas sobre produtos fornecidos e serviços prestados, permitindo notificação dos afetados (clientes e consumidores) e atendimento corretivo
- As empresas garantem a qualidade evidenciando estes pontos
- Os trabalhos da qualidade são divididos em:
	- **Inspeção** -> Realiza a coleta dos indicadores de desempenho e resultados
	- **Controle** -> Observa se os padrões estão sendo seguidos e resultados alcançados, fornece insumos para que a garantia realize seu trabalho de melhoria contínua
	- **Garantia** -> Busca definir práticas que aprimorem as atividades empresariais, estabelecendo padrões e os ajustando continuamente
- Com a aplicação destes pontos cria-se um Ciclo de Melhoria Contínua
- Instituições de referência de desenvolvimento de software desenvolveram normas e padrões que definem regras para o desenvolvimento
- Quando uma empresa garante que estes padrões sejam seguidos e uma empresa auditora realiza uma avaliação dos padrões de qualidade da produção, então pode ser emitido um Selo de Qualidade, como por exemplo o ISO 15504, selo CMMI-3-nível2
- Para isso é essencial que as empresas que realizam a prática de qualidade guarde registros de todo o processo que é realizado
- Um programa de melhoria de qualidade passa por:
	- Estudar modelos de referência de boas práticas
	- Desenhar a sua forma de trabalho, adaptando ou seguindo à risca as recomendações dos guias e normas da qualidade
	- Definir metas de resultado, regras e métricas de apuração desses resultados
	- Inspecionar as atividades de trabalho, coletando evidências sobre resultado e compatibilidade das operações reais com as práticas definidas
	- Controle das pessoas e máquinas para manter o ritmo e compatibilidade (compliance) com metas e processos definidos
	- Aprendizado por meio da observação dos resultados apontados e controles realizados, buscando redesenhar processos, adicionar ferramentas, redefinir metas ou capacitar pessoas para melhorar ainda mais os resultados da qualidade
- As avaliações de qualidade podem ser qualitativas ou quantitavidas
- Existem dois guias que são considerados modelos de referência, o SPICE e o CMMI, além do modelo de práticas brasileiro, que ainda não tem reconhecimento internacional, o MPS.BR
# CMMI
- Surgiu nos anos 90 com o CMM (Capability Maturity Model, ou Modelo Integrado de Maturidade e de Capacidade)
- É um guia de boas práticas e não uma normatização obrigatória
- O guia orienta o que a empresa deve ou não fazer, como:
	- Que seja aplicado um processo formal de produção de software, como RUP, XP ou SCRUM
	- Que seja realizado um planejamento das atividades do projeto, utilizando uma ferramenta formal, como MS-Project ou um painel de cartões de tarefas no Trello
- O CMMI tem como objetivo:
	- Proporcionar o desenvolvimento da capacidade da organização para fazer projetos de software com qualidade
	- Confirmar o alcance da maturidade na gestão da qualidade da produção de software
![[Pasted image 20240527203632.png]]
- O CMMI contém bibliotecas de conteúdos, cada uma voltada para um objetivo de desenvolvimento, montando as constelações do CMMI, como demonstrado na imagem acima
- A sigla CMMI possui diversos significados:
	- (C)apability -> Orienta os passos de capacitação da empresa para melhorar seus processos internos e a qualidade dos seus produtos
	- (M)aturity -> Serve de instrumento de apoio para avaliar a maturidade da empresa em aplicar sistematicamente e repetidamente os processos definidos
	- (M)odel -> Traz modelos de recomendações das técnicas à serem empregadas para realizar os processos de produção de software
	- (I)ntegration -> Integra as disciplinas relacionadas à produção de software com qualidade, caso do gerenciamento do projeto de software e outros serviços associados à produção, como testes, gerenciamento quantitativo e melhoria contínua
- O CMMI pode ser usado como:
	- Um guia para desenvolver e implementar práticas e ferramentas
	- Um instrumento de auditoria da qualidade alcançada por uma empresa
- Existem duas abordagens possíveis para desenvolver e avaliar qualidade através do CMMI:
	1. Estagiada -> Diversos processos são desenvolvidos e maturados simultaneamente, o foco está em resolver um domínio dos assuntos da gestão da qualidade
	2. Continuada -> A empresa escolhe os processos que quer desenvolver e trabalha sobre eles, partindo de uma situação de imaturidade até uma situação de aprimorada qualidade

![[Pasted image 20240527211024.png]]
- Os níveis de capacidade, significam:
	0. **Incompleto** -> As atividades da área de processo não são realizadas do inicio ao fim com regularidade
	1. **Executado** -> As atividades da área do processo são executadas, existindo uma rotina de trabalho estabelecida, embora não se possa garantir que todos os projetos cumpram com a mesma sequência de passos ou empreguem os mesmos recursos na sua execução
	2. **Gerenciad**o -> Existe uma política de trabalho e de alocação de recursos que se é seguida em todos os projetos, mas ainda não padroniza a forma de documentar, aprovar e acompanhar os planos
	3. **Definido** -> Os procedimentos técnicos, ferramentas e competências requiridos da equipe de projeto de software são estabelecidos de forma padronizada e seguidos em todos os projetos em curso

- Os níveis de maturidade, significam:
	1. **Inicial** -> As atividades de produção e gerenciamento da produção de software são executadas, existindo uma rotina de trabalho estabelecida. Embora não se possa garantir que todos os projetos cumpram com a mesma sequencia dos passos ou empreguem os mesmos recursos na sua execução
	2. **Gerenciado** -> Existem práticas de gerenciamento de projetos padronizadas em todos os desenvolvimentos de software, permitindo o planejamento, monitoração, controle e gerenciamento de resultados dentro de uma mesma linha de conduta
	3. **Definido** -> Os procedimentos técnicos, ferramentas e competências requiridos da equipe de projeto de software são estabelecidos de forma padronizada e seguidos em todos os projetos em curso. O que permite que a forma de desenahr, executar a construção e testar o software seja alinhada
	4. **Gerenciado quantitativamente**-> Recolhem-se métricas sobre o desempenho dos processos de gerenciamento e produção de software, guardando históricos sobre os qualis aplica-se estatística para avaliar a regularidade ou irregularidade de resultados e disparar ações corretivas caso esses resultados fiquem aquém dos objetivos e metas da empresa
	5. **Otimizado** -> Existem processos sistemáticos recorrentes de análise das causas dos desvios estatísticos de resultados e de avaliação de possíveis melhorias a implantar
# MPS.BR
- Foi deselvolvido pela associação para promoção da excelência do software brasileiro
- Tem como objetivo ajudar as empresas nacionais a desenvolverem sua capacidade de trabalho para criar softwares com elevados padrões de qualidade
http://www.softwarelivre.gov.br/
![[Pasted image 20240527213357.png]]
# Auditoria e avaliação da qualidade
- A auditoria é realizada por empresas especializadas em avaliação da qualidade, certificadas pela SEI ou pela Softex
- O método de auditoria é padronizado pela detendora do modelo:
	- No caso do CMMI a empresa de auditoria usa o ARC
![[Pasted image 20240527213642.png]]
1. O PIP descreve os objetivos do programa da qualidade, escopo de ação, partes envolvidas, premissas de prazo e custo, modelo de desenvolvimento e avaliação da qualidade
2. O Plano de ação contém atividades de trabalho e responsáveis pelas avaliações. O Cronograma coloca na perspectiva de tempo as atividades de avaliação e o andamento das suas execuções. Atas documentam eventos de reunião, participantes, assuntos tratados deliberações
3. O Relatório de acompanhamento sintetiza a evolução a cada encontro avaliativo. Log do projeto engloba as evidências coletadas nas inspeções, as quais sustentam as avaliações
4. O relatório de métricas contém os item de observações determinados pelo ARC/Scampi e a pontuação alcançada em termos de processos compatibilizados
# Conclusão
- No PMBOK do PMI existe uma área de conhecimento explicitamente dedicada ao assunto da qualidade
![[Pasted image 20240527214108.png]]