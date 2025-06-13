let numeros = [5, 9, 4, 3, 1];
let maior = numeros[0];
for(let i = 1; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i];
    }
}

console.log("Maior número:", maior)

//Maior número de um array!
