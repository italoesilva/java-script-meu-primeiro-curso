// Contador de vogais

function ContadorVogais(texto){
    const vogais = ['a', 'e', 'i', 'o', 'u']
    texto = texto.toLowerCase()
    let contador = 0;

    for(let i = 0; i < texto.length; i++ ){
        if(vogais.includes(texto[i])){
            contador++
        }
    }
    return contador;
}

console.log(ContadorVogais('Tima e Leao'))