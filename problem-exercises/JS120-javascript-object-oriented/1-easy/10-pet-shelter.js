class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  info() {
    return `a ${this.type} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(pet.info()));
  }
}

class Shelter {
  constructor() {
    this.owners = [];
    this.unadoptedPets = [];
  }

  addUnadoptedPet(pet) {
    if (!this.unadoptedPets.includes(pet)) this.unadoptedPets.push(pet);
  }

  addOwner(owner) {
    if (!this.owners.includes(owner)) this.owners.push(owner);
  }

  numberOfUnadoptedPets() {
    return this.unadoptedPets.length;
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    this.addOwner(owner);
  }

  printAdoptions() {
    this.owners.forEach(owner => {
      console.log(`${owner.name} has adopted the following pets:`);
      owner.printPets();
      console.log();
    });
  }

  printUnadopted() {
    console.log(`The Animal Shelter has the following unadopted pets:`);
    this.unadoptedPets.forEach(pet => console.log(pet.info()));
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// Further exploration

let asta       = new Pet('dog', 'Asta');
let laddie     = new Pet('dog', 'Laddie');
let fluffy     = new Pet('cat', 'Fluffy');
let kat        = new Pet('cat', 'Kat');
let ben        = new Pet('cat', 'Ben');
let chatterbox = new Pet('parakeet', 'Chatterbox');
let bluebell   = new Pet('parakeet', 'Bluebell');

shelter.addUnadoptedPet(asta);
shelter.addUnadoptedPet(laddie);
shelter.addUnadoptedPet(fluffy);
shelter.addUnadoptedPet(kat);
shelter.addUnadoptedPet(ben);
shelter.addUnadoptedPet(chatterbox);
shelter.addUnadoptedPet(bluebell);

shelter.printUnadopted();
console.log(`The Animal shelter has ${shelter.numberOfUnadoptedPets()} unadopted pets.`);
