S - Single Responsibility Principle

Cada microsserviço possui uma responsabilidade específica.

Exemplo:

Auth Service -> autenticação

Item Service -> itens

Rental Service -> locações
O - Open Closed Principle

Estratégias podem ser adicionadas sem alterar o código existente.

Exemplo:

FineStrategy

VipFineStrategy

DefaultFineStrategy
L - Liskov

Qualquer estratégia de multa pode substituir outra.

I - Interface Segregation

Cada módulo utiliza somente os métodos necessários.

D - Dependency Inversion

UseCases dependem de abstrações.

4. Documentação dos Design Patterns (4 obrigatórios)

Crie:

DESIGN_PATTERNS.md

Factory Pattern

Criação dos repositórios.

RepositoryFactory
Strategy Pattern

Cálculo de multas.

DefaultFineStrategy

VipFineStrategy
Singleton Pattern

Conexão do banco.

DatabaseConnection
Facade Pattern

Integração simplificada dos microsserviços.

ApiFacade