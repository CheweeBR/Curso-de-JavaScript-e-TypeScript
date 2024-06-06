// Promisses

function espera(msg, time) {

    return new Promise((resolve, reject) => {
        
    setTimeout(() => {
        if(typeof msg !== 'string') reject("Valor inválido.");
        resolve(msg);
    }, time);

    });

}

espera("Ola", 3000)
    .then(resposta => {console.log(resposta)
        return espera(["Calabreso"], 1000);
    })
    .then(resposta => {
            console.log(resposta);
            return espera("Seloco cachoeira", 2000);
    })
    .then(resposta=>{
                console.log(resposta);
    })
    .catch((e) => console.log(e));



