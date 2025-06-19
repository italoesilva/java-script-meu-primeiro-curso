// calculadora simples.

function calcSimples(num1, num2, operacao){

 

    if(operacao === '+'){
        console.log(num1 + num2)
    }else if (operacao === '-'){
        console.log(num1 - num2)
        }else if(operacao === '/'){
            console.log(num1 / num2)
            }else if(operacao === '*'){
                console.log(num1 * num2)
            }
        }

calcSimples(10, 20, '*')