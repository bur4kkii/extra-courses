# Introdução
- É necessário confirmar se o produto está atendendo aos requisitos funcionais e não funcionais
- Quanto mais demorar para iniciar ações de qualidade mais caro será para lidar com os defeitos 
# Importância da avaliação de software
- As documentações técnicas são a base para esclarescer escopo e a arquitetura do produto e evitar conflitos na hora de codificar o produto
- Algumas das consequências da má qualidade do software  podem ser:
	- Queda da credibilidade;
	- Redução da competitividade pela perda de referências e patrocínio ou para obtenção de orçamento para projetos
	- Desmotivação e rotatividade da equipe em função das cargas excessivas de trabalho por conta das correções e adaptações em sistemas fornecidos pela empresa
	- Recorrência dos esforços extraordinários para ajustar o curso das coisas, com aumento de custos
	- Estresse no relacionamento com clientes
- Etapas para a liberação do software:
	![[Pasted image 20240530200740.png]]
	- Versão Alpha/Beta 
		- Na versão Alpha -> O software ainda está em desenvolvimento e teste dentro da fábrica de software
		- Fase Beta -> O produtor entreva uma versão preliminar 
	- Release candidate -> Potencial produto a ser lançado
	- Release to manufacturing -> Software disponível para uso
	- General availablity -> Produto em fase de sustentação e manutenção
# Modelo de avaliação de software
- Uma estratégia de teste deve estar baseada numa sequência de ações que permitam avaliar de forma ampla os recursos do software, porém sem cometer redundâncias.
- A estratégia correta e bem planejada possibilitará confirmar a ocorrência das falhas ao executar o software que serão alvos de investigação do defeito causador e, então, analisadas a serem descobertos os erros de modelagem e programação que levaram ao defeito.
- Também permite avaliar se o processo de produção de software cumpre com pré-requisitos e padrões da referência estabelecidos.
# Níveis de teste
- Determinam focos de avaliação com profundidade maior ou menor de abstração
## Modelo V
![[Pasted image 20240531235623.png]]

# Tipos de teste
- Definem a ênfase, o propósito do teste
- Existem 5 tipos de testes
	- **Funcionais** -> Avaliam o funcionamento do software, suas funcionalidades
	- **Não funcionais** -> Avaliam outros tipos aspectos do software que não relacionados à funcionalidade, como acessibilidade, velocidade de resposta e estética
	- **Estrutural** -> Avalia a arquitetura e aspectos técnicos do projeto
	- **Confirmação de sucesso na mudança** -> Avalia o componente alterado isoladamente, a fim de confirmar que estão aderentes às funcionalidades e aos requisitos, funcionais, não funcionais e estruturais
	- **Mudança por regressão** -> Verifica o impacto do componente alterado em relação ao restante do sistema
# Técnicas de teste
- Definem a forma de realizar os testes
- Existem os testes de Caixa Preta e os testes de Caixa Branca
	- **Caixa preta** -> Avalia o item sem entrar na forma que foi construído, avaliando inputs e outputs, sem nos importar com a estrutura interna
	- **Caixa branca** -> Avalia o item explorando seus detalhes internos, conhecendo sua lógica
# Avaliações estruturais de projeto de software
- Avaliações que apontarão se o produto será bom ou não
- Testes estruturais de Projeto -> Aplicam métricas para apontar se existem pontos falhos no desenho técnico da solução, os quais podem gerar defeitos
- Testes estruturais de Design
	- Métodos ponderados por classe (WMC - Weight of methods in a class)
	- Profundidade da árvore de herança (DIT - Depth inside the tree)
	- Número de filhos (NOC - Number of Children)
	- Coesão em métodos (LCOM -Level o Cohesion of Method)
	- Acoplamento entre classes (CBO - Coupling Between objects)
	- Resposta para uma Classe (RFC - Response of a class)
## WMC
- Calcula o número de métodos que existe em cada classe de objetos, gerando um CMi (Indicador de métodos de uma classe), o WMC é calculado pela soma dos CMis, com esses valores podemos entender o peso que cada classe terá no sistema
![[Pasted image 20240601001733.png]]
- Nota: o CMi da classe CURSO está errado, o valor seria 2
## DIT
- O DIT apontará o tamanho da árvore de herança, avalia o número de níveis hierárquicos abaixo de uma classe, sendo esse indicador calculado para cada classe modelada
![[Pasted image 20240601002157.png]]
- Se todas, ou quase todas tem DIT 0 possívelmente a herança de atributos e métodos entre classes está comprometida
## NOC
- Aponta o número de classes filhas numa situação de herança de classes
- Avalia o número de classes que são herdeiras diretas de outra classe, verificando se existe uma complexidade desnecessária no sistema
![[Pasted image 20240601002652.png]]
![[Pasted image 20240601002732.png]]
## LCOM
- Aponta o quanto um método de uma clase é coeso, o quanto o método depende apenas de atributos que estão na própria classe
- LCOM = (número de atributos usados no método)/(número de atributos utilizados da classe do método pelo método)
![[Pasted image 20240601003011.png]]
## CBO
- Aponta acoplamento entre as classes
- CBO = numero de associações que partem da classe analisada, apontando para outras classes, com cardinalidade mínima 1
 ![[Pasted image 20240601003342.png]]
## RFC
- Totaliza o número de métodos de outras classes, mais o numero de métodos da propria classe que são chamados por um método da classe que está sendo avalidado
- Quanto maior o RFC mais complexa é a classe e seus métodos
RFC de um método X número de outros métodos da própria classe à qual pertence o método C, mais o número de métodos de outras classes que são chamados na execução do método X
![[Pasted image 20240601003626.png]]

 
# Conclusão