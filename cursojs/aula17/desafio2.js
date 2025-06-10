function inverter(texto){

    let letras = texto.split('')

    let LetrasInvertidas = letras.reverse()

    let resultado = LetrasInvertidas.join('')
    return resultado
}

console.log(inverter("banana"))