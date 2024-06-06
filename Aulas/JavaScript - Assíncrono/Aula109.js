// Métodos úteis para Promises

// Promise.all -> entregar tudo

function espera(msg, time) {
    return new Promise((resolve, reject) => {

        if(msg.length > 20) {
            reject("MENSAGEM MUITO GRANDE.");
            return;
        }

        setTimeout(() => {
            resolve(msg);
            return;
        }, time);
    })
}

const vetor = [
    espera("oi", 1000),
    espera("o", 1000)
];

Promise.all(vetor)
    .then((valor) => {
        console.log('All: ', valor)
    }).catch((e) => {
        console.log(e);
    })

// Promise.race()

Promise.race(vetor)
    .then((valor) => {
        console.log('Race: ', valor)
    }).catch((e) => {
        console.log(e);
    })

// Promise.resolve()

function downloadPage() {
    const cache = true;

    if(cache) {
        return Promise.resolve("Pagina em cache.")
    } else {
        return espera("Baixando pagina", 2300);
    }
}

downloadPage() 
    .then(data => {
        console.log(data)
    })
    .catch(e => {console.log(e)})
