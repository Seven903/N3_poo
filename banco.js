const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("banco.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE musicas(
      id_musica INTEGER PRIMARY KEY, 
      nome TEXT NOT NULL, 
      genero TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE artistas(
      id_artista INTEGER PRIMARY KEY,
      nome TEXT NOT NULL,
    );
  `);

  db.run(`
    CREATE TABLE artista_musica(
      id_artista INTEGER,
      id_musica INTEGER,
      FOREIGN KEY (id_artista) REFERENCES artistas (id_artista),
      FOREIGN KEY (id_musica) REFERENCES musicas (id_musica)
    );
  `);
  db.run(`
    CREATE TABLE programa(
      id_programa INTEGER PRIMARY KEY,
      nome TEXT NOT NULL,
    );
  `);
  db.run(`
    CREATE TABLE ouvinte(
      celular INTEGER PRIMARY KEY,
      nome INTEGER,
      bairro TEXT NOT NULL,
    );
  `);
  db.run(`
    CREATE TABLE pedido(
      dt_hr INTEGER PRIMARY KEY,
      id_musica INTEGER,
      id_programa INTEGER,
      id_ouvinte INTEGER,
      FOREIGN KEY (id_musica) REFERENCES musicas (id_musica),
      FOREIGN KEY (id_programa) REFERENCES programa (id_programa)
    );
  `);
});
db.close();
