# API REST usando node.js

Foi a primeira vez que fiz uma api rest, decidi usar node.js e sqlite por serem simples de aprender.<br>
As bibliotecas de node utilizadas foram express, sqlite3 e bodyParser.<br>
Para rodar a API, é só executar na pasta do repositório<br>
`npm install`<br>
E a api já está pronta pra usar :D<br>
Para rodar, basta executar<br>
`node server.js`<br>

Os metodos disponíveis são:

## GET /user

- Irá retornar uma lista de todos os usuários.

## GET /user/X

- Irá retornar o usuário de id X.

## POST /user

- Cria um novo usuário. Duas informações são gravadas:

  1. `id`: um identificador numérico único;
  2. `name`: o nome do usuário;

## GET /friend?id=X

- Irá retornar uma lista de todos os amigos do usuário de id X.

## POST /friend

- Cria uma nova relação de amizade. Devem ser informados dois parâmetros:

  1. `id`: Id do usuário;
  2. `idFriend`: id de outro usuário.

## GET /post?id=X

- Retorna todos os posts dos amigos do usuario de id X

## GET /post/X<br>

- Retorna os posts do usuário X

## POST /post<br>

- Cria um novo post. os parâmetros são:

  1. `id`: id do usuário que está postando;
  2. `post`: o texto do post.
