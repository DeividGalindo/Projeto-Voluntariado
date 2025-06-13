# 📜 Sobre o Projeto

O Projeto Voluntário é um website desenvolvido para servir como uma ponte entre boas intenções e ações concretas. A plataforma permite que instituições de caridade, ONGs e outras organizações cadastrem suas necessidades (seja por voluntariado ou doação), enquanto cidadãos podem visualizar, filtrar e encontrar oportunidades para contribuir com a comunidade.

O projeto foi construído utilizando apenas tecnologias front-end (HTML, CSS e JavaScript), com os dados sendo persistidos no navegador do usuário através da LocalStorage API.

## ✨ Funcionalidades
Página Inicial (index.html): Uma landing page convidativa que apresenta o propósito do projeto.
Cadastro de Necessidades (cadastro.html): Um formulário completo para que instituições possam detalhar suas demandas.
Validação de campos obrigatórios.
Consulta automática de endereço via CEP através de integração com a API ViaCEP.
Visualização Dinâmica (visualizacao.html):
Listagem de todas as necessidades cadastradas em formato de cards.
Sistema de pesquisa por texto no título ou descrição.
Filtro por tipo de ajuda (Educação, Saúde, etc.).
Gerenciamento Completo (CRUD):
Create: Adicionar novas necessidades.
Read: Ler e visualizar as necessidades.
Update: Botão para Editar uma necessidade existente, preenchendo o formulário com os dados atuais.
Delete: Botão para Excluir uma necessidade (com diálogo de confirmação).
Persistência de Dados: As informações são salvas localmente no navegador (LocalStorage), permitindo que os dados não se percam ao recarregar a página.
Design Responsivo: A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
## 💻 Tecnologias Utilizadas
``HTML5``: Estrutura semântica das páginas.  
``CSS3``: Estilização completa, utilizando conceitos modernos como:
Flexbox e Grid Layout para organização dos componentes.
Media Queries para responsividade.  
``JavaScript``: Manipulação dinâmica do DOM para criar, ler, atualizar e remover elementos da interface.
Consumo de API externa (fetch).
Gerenciamento de eventos.
Lógica de negócios e persistência de dados.
APIs:
LocalStorage API: Para armazenamento de dados no lado do cliente.
ViaCEP API: Para consulta e preenchimento automático de endereços.

# 👨‍💻 Autor
Deivid Galindo