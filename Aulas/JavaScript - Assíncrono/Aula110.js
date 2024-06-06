// await e async

function espera(msg, time) {

    return new Promise((resolve, reject) => {
        
    setTimeout(() => {
        if(typeof msg !== 'string') reject("Valor inválido.");
        resolve(msg);
    }, time);

    });

}

async function executa() {
    try {
        const frase1 = await espera('oi', 1200);
        console.log(frase1);
        const frase2 = await espera(1, 1100);
        console.log(frase2);
        const frase3 = await espera('Tudo bem?.', 1000);
        console.log(frase3);
    } catch(e) {
        console.log(e);
    }
    
}

executa();