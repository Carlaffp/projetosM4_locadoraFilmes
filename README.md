# projetosM4_locadoraFilmes

Neste projeto a tarefa foi desenvolver uma API de um serviço de locação de filmes.
Esta API é altamente funcional e oferece recursos essenciais, incluindo a capacidade de registrar novos filmes, listar todos os filmes cadastrados, atualizar detalhes de um filme com base em seu ID e remover filmes do sistema com facilidade, utilizando o ID correspondente.
Para a rota GET/movies foi criado um middleware de paginação. O avanço neste projeto foi a utilização do TypeORM, onde as queries de consulta ao banco de dados são gerandas pelo ORM, assim, escrevemos nosso modelo de dados em apenas um lugar, deixando o projeto mais fácil de ser atualizado, mantido e reutilizável.

Tecnologias: TypeScript, TypeORM,NodeJs, Express, PostgresSQL, serialização de dados utilizando a biblioteca Zod.

## Método	 Endpoint	      Responsabilidade
POST  	 /movies	      Cadastra um novo filme,
GET	     /movies        Lista todos os filmes cadastrados,
PATCH	   /movies/:id 	  Atualiza o filme passado por id,
DELETE   /movies/:id 	  Deleta o filme passado por id

## Regras da Aplicação
Deve ser criado um banco de dados em PostgreSQL com uma tabela/entidade nomeada como movies, para armazenar os dados das requisições.

A tabela de movies deve ter as colunas necessárias para armazenar os seguintes dados:

id: inteiro, sequencial e chave primária.
name: string, tamanho máximo de 50, único e obrigatório.
description: texto.
duration: inteiro e obrigatório.
price: inteiro e obrigatório.
Como estamos trabalhando com TypeORM, deve ser criada uma entidade de movies com os campos descritos acima, e essa entidade vai ser convertida em tabela através de uma migração.

Nas rotas POST e PATCH, é necessário serializar os dados de entrada utilizando o zod. Chaves não mapeadas devem ser ignoradas.

Na rota POST /movies, a chave id deve ser ignorada, o próprio serviço deve preencher esse dado. A chave description_ é opcional, caso não seja enviada deve ser salvo como null.

Na rota PATCH /movies, a chave id não pode ser atualizada, caso enviada deve ser ignorada.

## Regras de Paginação
A rota GET /movies deve conter paginação.

Essa rota recebe quatro query params, sendo eles: page, perPage, order e sort.
Essa rota retornará um objeto de paginação que irá conter as seguintes chaves: prevPage, nextPage, count e data.
Segue abaixo o que cada chave significa e a regra de cada um dos query params.

* Query params: order e sort:
  
sort: recebe em qual coluna a ordenação deve ser feita. Pode receber apenas dois valores:
price
duration
Caso nenhum desses valores seja enviado, deve ordenar por id.

* order: recebe qual o tipo de ordenação que será feita. Pode receber apenas dois valores:
asc
desc
Caso nenhum desses valores seja enviado, deve utilizar asc.

O tipo de ordenação só funciona caso sort seja enviado:
caso não seja enviado, o tipo deve ser asc.

* Query params: perPage e page:
  
* perPage: recebe qual a quantidade de dados que devem ser retornados.
Deve receber apenas números inteiros e maiores que 0
Caso o número enviado não atenda esses requisitos:
deve retornar os cinco primeiros dados.
O valor máximo à ser retornado deve ser cinco
Caso o número enviado seja maior que cinco, deve retornar cinco dados.

* page: recebe qual página deve ser retornada.
Recebe apenas números inteiros e maiores que 0
Caso o número enviado não atenda esses requisitos, deve utilizar a primeira página, ou seja, deve ser 1
Deve respeitar o perPage:
se page for igual à três e perPage for igual à dois, deve retornar dois dados, começando pelo id cinco e indo até o id seis.

* Objeto de paginação:
Deve seguir as regras do page e do perPage:

* prevPage: página anterior
tipo: string ou null;
Caso a próxima página exista, deve retornar uma url redirecionando para a página;
Caso contrario deve retornar null;

* nextPage: próxima página;
tipo: string ou null;
Caso a próxima página exista, deve retornar uma url redirecionando para a página;
Caso contrario deve retornar null;

* count: contagem de dados existentes no banco de dados;
tipo: number;

* data: os filmes listados pela requisição;
tipo: Array de movies;

A quantidade de filmes retornados deve seguir as regras do perPage.

## Casos de Erro:
Todos os casos de erros listados a seguir, devem ser executados por meio de middlewares.
* O nome (name) deve ser único. Nas rotas POST e PATCH /movies, caso seja enviado um nome já registrado, deve retornar a mensagem de erro e o status code.
* A serialização dos dados de entrada deve ser feita utilizando o zod. Essa serialização deve acontecer nas rotas POST e PATCH. Em caso de erro ao validar os dados, deve retornar a mensagem de erro e o status code.
* Em todas as rotas que recebem id por parâmetro, deve verificar se o id informado existe. Caso o filme (movie) não exista, deve retornar a mensagem de erro e o status code.
