CREATE TABLE IF NOT EXISTS users (
  idUser INTEGER constraint pk_user primary key,
  nameUser TEXT
);
CREATE TABLE IF NOT EXISTS friends (
  idFriend INTEGER constraint pk_friend primary key,
  idUser INTEGER,
  CONSTRAINT fk_userFriend FOREIGN KEY (idFriend) REFERENCES user(idUser),
  CONSTRAINT fk_userIdFriend FOREIGN KEY (idUser) REFERENCES user(idUser)
);
CREATE TABLE IF NOT EXISTS posts (
  idPost INTEGER constraint pk_post primary key,
  idUser INTEGER,
  datPost DATE,
  desPost TEXT,
  CONSTRAINT fk_userPost FOREIGN KEY (idUser) REFERENCES user(idUser)
);
