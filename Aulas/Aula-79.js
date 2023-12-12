//Função recursivas


function recursiva(n) {
    if(n<15) {
        n++;
        console.log(n);
        recursiva(n);
    } else {
        return console.log("FIM")
    }
}

recursiva(0);