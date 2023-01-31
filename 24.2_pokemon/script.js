function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  }

  const bulbasaur = new Pokemon('Bulbasaur', 'grass', ['hide', 'fire']);
  const charmander = new Pokemon('Charmander', 'fire', ['burn', 'kick']);
  const squirtle = new Pokemon('Squirtle', 'water', ['kick', 'slide']);

  Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}`);
  }

  Pokemon.prototype.attack = function(attackNum) {
    console.log(`${this.name} used ${this.attackList[attackNum]}`);
  }

  bulbasaur.callPokemon();
  charmander.callPokemon();
  squirtle.callPokemon();

  bulbasaur.attack(1);
  charmander.attack(1);
  squirtle.attack(1);