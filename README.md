API REST usando node.js
foi a primeira vez que fiz uma web api rest, decidi usar node.js e sqlite por serem simples de aprender.
 as bibliotecas de node utilizadas foram express, sqlite3 e bodyParser.
 para rodar a API, é só executar na pasta do repositório
 npm install
e depois,
 node server.js
 e a api já está pronta pra usar :D

 os metodos disponiveis são:
 GET /user
  irá retornar uma lista de todos os usuários

  GET /user/X
   irá retornar o usuário de id X

  POST /user
  cria um novo usuário

  GET /friend?id=X
   irá retornar uma lista de todos os amigos do usuário de id X

   POST /friend
   cria uma nova relação de amizade


GET /post?id=X
retorna todos os posts dos amigos do usuario de id X

GET /post/X
retorna os posts do usuário X

POST /post
 cria um novo post
