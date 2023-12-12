//funções geradoras

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield "Valor 3";
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

for(let valor of g1) {
    console.log(valor);

}

function* geradora2() {
    value = 0;
    while(true) {
        yield value;
        value++;
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);