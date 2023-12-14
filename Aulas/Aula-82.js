// Metódo Splice

const pokemon = ['Charmander', 'Squirtle', 'Pikachu', 'Bulbassauro', 'Gyarados', 'Blastoice', 'Snorlax']


// POP
const removido = pokemon.splice(3, 0, 'Charizard');
console.log(pokemon, " - ", removido);

// SHIFT
const removido1 = pokemon.splice(0, 1)
console.log(pokemon, " - ", removido1);

// PUSH
pokemon.splice(pokemon.length, 0, "Miaow")
console.log(pokemon);

// UNSHIFT
pokemon.splice(0, 0, "Miaow");
console.log(pokemon);