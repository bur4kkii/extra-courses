# Ambientes de teste
## Segregação de ambientes na produção de software
- É necessária a separação dos ambientes de desenvolvimento, testes e produção de um software para evitar que problemas se tornem evidentes apenas com o software em produção, assim gerando problemas e defeitos mais caros e complicados de se resolver
## Instâncias e transporte de ambientes
- É recomendado que a separação seja:
	- Desenvolvimento
	- Testes
	- Homologação
	- Produção
## Preparação de ambientes para testes
# Aplicação e acompanhamento de testes
- Deve existir um controle sobre:
	- A cobertura dos testes
	- Taxa de sucesso
	- Quantidade de testes remancescentes
- Essas métricas ajudam a ter um controle sobre se o software está realmente apto para lançamento ou atualização
# Automação de testes
![[Pasted image 20240601021548.png]]
![[Pasted image 20240601021559.png]]
## Propósito da automação
- Otimizar os testes padronizados
- Manter um manual de testes, além de métricas devidamente armazenadas
- Focar em outras funcionalidades, atualizações e melhorias do software e seu processo
## Tipos de automação
- Tests scripts -> Criação de códigos em uma linguagem de programação, os quais disparam operações enviando dados e verificando dados de saída mediante uma massa controlada de dados
	- JUnit (JAVA)
- Data driven test -> Extrair dos scripts de teste os dados de teste e armazena-los em arquivos separados dos scripts, assim mantendo apenas os procedimentos de teste e ações sobre a aplicação
- Rec & Play test -> Grava as ações executadas sobre um sistema de um usuário e reproduz como gravado
- Test Central
- Existem diversas ferramentas:
	- Seleniun
	- Visual Studio
	- Borland Silk
	- IBM Rational
	- Eventum
	- Nunit
	- TestLink
	- Mantis
	- Bugzilla
	- BugNet
	- JMeter
	- phpBugTracker
	- Junit
	- Issue Tracker
	- eTraxis
	- Jura...
## Decisão sobre automatizar testes
![[Pasted image 20240601022347.png]]
![[Pasted image 20240601022356.png]]
# Influências dos testes no desenvolvimento e teste de software
## Test driven development (TDD)
- Desenvolvimento orientado a testes
- Desenvolver um software a partir dos seus testes, invertendo o processo natural
## Behaviour driven development (BDD)
- Testes criados com base em histórias de usuários e casos de uso
- Ferramentas:
	-  JBehave
	- EaseB
	- Spock
	- Cucumber