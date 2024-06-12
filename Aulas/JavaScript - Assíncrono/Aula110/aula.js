// async e await
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

async function executa() {
    try {
        const fase1 = await espera("Fase 1", 3000)
        console.log(fase1);
        const fase2 = await espera("Fase 2", 2000)
        console.log(fase2);
        const fase3 = await espera("Fase 3", 1000)
        console.log(fase3);
    } catch (e) {
        console.log(e)
    }
}

executa();

// estados:
// peding -> pendente
// fullfield -> executada
// reject -> rejeitada