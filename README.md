# projetosM4_locadoraFilmes

Neste projeto a tarefa foi desenvolver uma API de um serviço de locação de filmes.
Esta API é altamente funcional e oferece recursos essenciais, incluindo a capacidade de registrar novos filmes, listar todos os filmes cadastrados, atualizar detalhes de um filme com base em seu ID e remover filmes do sistema com facilidade, utilizando o ID correspondente.
Para a rota GET/movies foi criado um middleware de paginação.
Tecnologias: TypeScript, TypeORM, Express, PostgresSQL, serialização de dados utilizando a biblioteca Zod.

Método	 Endpoint	      Responsabilidade
POST  	 /movies	      Cadastra um novo filme
GET	     /movies        Lista todos os filmes cadastrados
PATCH	   /movies/:id 	  Atualiza o filme passado por id
DELETE   /movies/:id 	  Deleta o filme passado por id
