function Calculadora() {

    this.display = document.querySelector('.InputNumber');

    this.inicia = () => {
        this.capturaCliques();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', eventClique => {
            const clicado = eventClique.target;
            if(clicado.classList.contains('bt-num')) this.adicionaNumDisplay(clicado.innerText);
            if(clicado.classList.contains("bt-fun")) this.funcao(clicado.innerText);
        });
    };

    this.adicionaNumDisplay = (valor) => {
        this.display.value += valor;
    };

    this.funcao = (valor) => {
        if(valor == '=') this.tools.calcular();
        else if(valor == "<<") this.tools.apagar();
        else if(valor == "C") this.tools.limpar();
    };

    this.tools = {
        apagar: () => {
            this.display.value = this.display.value.slice(0, -1);
        },
        limpar: () => {
            this.display.value = "";
        },
        calcular: () => {
            let calculo = this.display.value;
            try {
                calculo = eval(calculo);
                this.display.value = calculo;

            } catch (error) {
                alert('Conta inválida');
                this.limparInput();
            }
        }
    };
}

const calc = new Calculadora();
calc.inicia();