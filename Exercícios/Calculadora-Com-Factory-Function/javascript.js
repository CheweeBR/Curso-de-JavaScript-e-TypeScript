function CriaCalculadora() {
    return {
        display: document.querySelector(".InputNumber"),

        inicia() {
            this.limparInput();
            this.cliqueBotoes();
            this.pressEnter();
        },
        
        btForInput(valor) {
            this.display.value += valor;
        },

        limparInput() {
            this.display.value = "";
        },

        ApagarCaracter() {
            this.display.value = this.display.value.slice(0, -1);
        },

        Calcular() {
            let calculo = this.display.value;

            try {
                calculo = eval(calculo);
                this.display.value = calculo;

            } catch (error) {
                alert('Conta inválida');
                this.limparInput();
            }
        },

        pressEnter() {
            this.display.addEventListener('keypress', (e) => {
                if(e.keyCode === 13) {
                    this.Calcular();
                }
                if(e.keyCode === 8) {
                    this.ApagarCaracter();
                }
            });
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;
                console.log(el.innerText)

                if(el.classList.contains("bt-num")){
                    this.btForInput(el.innerText);
                } 

                if(el.classList.contains("bt-fun")) {
                    if(el.innerText == 'C') {
                        this.limparInput();
                    }
                    else{
                        if(el.innerText == '<<'){
                            this.ApagarCaracter();
                        } else {
                            if(el.innerText == '='){
                                this.Calcular();
                            }
                        }
                    }
                }

            }.bind(this));
        },


    };
};

const calculadora = CriaCalculadora();

calculadora.inicia();