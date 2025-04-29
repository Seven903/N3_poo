const db = require("./banco");
const prompt = require("prompt-sync")();

class Musicas {
  constructor(id = null, nome, genero) {
    this.id = id;
    this.nome = nome;
    this.genero = genero;
  }
}

class Artistas {
  constructor(id = null, nome) {
    this.id = id;
    this.nome = nome;
  }

  salvar() {
    const smt = db.prepare(`INSERT INTO artistas (nome) VALUES (?)`);
    for (let i = 1; i <= 5; i++) {
    
    }
    smt.finalize();
  }
}

class Programa {
  constructor(id = null, nome) {
    this.id = id;
    this.nome = nome;
  }
}

class Pedido {
  constructor(horario, id_musica, id_progama, id_ouvinte) {
    this.horario = horario;
    this.id_musica = id_musica;
    this.id_progama = id_progama;
    this.id_ouvinte = id_ouvinte;
  }
}

let a1 = new Artistas(null, "roberto carlos");

a1;
