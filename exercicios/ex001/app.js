alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');


// se chute for igual ao número secreto

if (chute == numeroSecreto) {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}`);
    
} else {
  if (chute > numeroSecreto){
    alert(`O numero secreto é menor que ${chute}`);
  } else { 
  alert(`O número secreto é maior que ${chute}`);

  }
}
