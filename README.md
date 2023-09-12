# projetosM4_locadoraFilmes

Neste projeto a tarefa foi desenvolver uma API de um serviço de locação de filmes.
Esta API é altamente funcional e oferece recursos essenciais, incluindo a capacidade de registrar novos filmes, listar todos os filmes cadastrados, atualizar detalhes de um filme com base em seu ID e remover filmes do sistema com facilidade, utilizando o ID correspondente.
Para a rota GET/movies foi criado um middleware de paginação. O avanço neste projeto foi a utilização do TypeORM, onde as queries de consulta ao banco de dados são gerandas pelo ORM, assim, escrevemos nosso modelo de dados em apenas um lugar, deixando o projeto mais fácil de ser atualizado, mantido e reutilizável.
Tecnologias: TypeScript, TypeORM, Express, PostgresSQL, serialização de dados utilizando a biblioteca Zod.

Método	 Endpoint	      Responsabilidade
POST  	 /movies	      Cadastra um novo filme
GET	     /movies        Lista todos os filmes cadastrados
PATCH	   /movies/:id 	  Atualiza o filme passado por id
DELETE   /movies/:id 	  Deleta o filme passado por id

Casos de Erro:
Todos os casos de erros listados a seguir, devem ser executados por meio de middlewares.
* O nome (name) deve ser único. Nas rotas POST e PATCH /movies, caso seja enviado um nome já registrado, deve retornar a mensagem de erro e o status code.
* A serialização dos dados de entrada deve ser feita utilizando o zod. Essa serialização deve acontecer nas rotas POST e PATCH. Em caso de erro ao validar os dados, deve retornar a mensagem de erro e o status code.
* Em todas as rotas que recebem id por parâmetro, deve verificar se o id informado existe. Caso o filme (movie) não exista, deve retornar a mensagem de erro e o status code.
