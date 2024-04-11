// Sobre a funcionalidade do MAP - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
  { id: 1, nome: "Tiago" },
  { id: 2, nome: "Arthur" },
  { id: 3, nome: "Geovanna" },
];

const novaPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novaPessoas.set(id, { ...pessoas });
}

console.log(novaPessoas.get(1));
