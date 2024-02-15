// Crie uma Classe Abstração:
class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      console.log('O animal emite um som.');
    }
  }
  // Crie Pelo Menos Duas Classes Herdeiras:
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    latir() {
      console.log('Au au!');
    }
  }
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
    }
  
    miar() {
      console.log('Miau!');
    }
  }
  //Crie Pelo Menos Três Instâncias de Objetos:
const rex = new Cachorro('Rex', 3, 'Labrador');
const whiskers = new Gato('Whiskers', 2, 'Branco');
const spot = new Cachorro('Spot', 4, 'Dálmata');

// Imprimir informações sobre as instâncias criadas
console.log('Informações sobre as instâncias criadas:');
console.log('Rex:', rex);
console.log('Whiskers:', whiskers);
console.log('Spot:', spot);