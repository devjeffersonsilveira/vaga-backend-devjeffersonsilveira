CREATE TABLE IF NOT EXISTS user (
  idUser INTEGER constraint pk_user primary key,
  nameUser TEXT
);
CREATE TABLE IF NOT EXISTS friend (
  idFriend INTEGER constraint pk_friend primary key,
  idUser INTEGER,
  nameFriend TEXT,
  CONSTRAINT fk_userFriend FOREIGN KEY (idUser) REFERENCES user(idUser)
);
CREATE TABLE IF NOT EXISTS post (
  idPost INTEGER constraint pk_post primary key,
  idUser INTEGER,
  idFriend INTEGER,
  datPost DATE,
  desPost TEXT,
  bolSelf BOOLEAN,
  CONSTRAINT fk_userPost FOREIGN KEY (idUser) REFERENCES user(idUser)
  CONSTRAINT fk_friendPost FOREIGN KEY (idFriend) REFERENCES friend(idFriend)
);
