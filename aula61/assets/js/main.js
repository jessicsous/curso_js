function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta inválida');
                    return
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('conta inválida');
                return;
            }
        },

        inicia() {
          this.cliqueBotoes();
          // this -> calculadora
        },
        cliqueBotoes() {
          // this -> calculadora  
          document.addEventListener('click', e => {
            const el = e.target;
            // this -> document

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    },    

        btnParaDisplay(value) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();