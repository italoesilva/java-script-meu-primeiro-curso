function contarVogais(texto){
  let textoMinusculo = texto.toLowerCase()
  let vogais = "aeiou"
  let contador = 0;


  for(let i =0; i < textoMinusculo.length; i++){
    let letra = textoMinusculo[i]
    console.log(letra)

  
    if(vogais.includes(letra)){
      console.log('É UMA VOGAL')
      contador++
    }else{
      console.log('NÃO É VOGAL')
    }
  }
    
  console.log("Total de vogais", contador)
 

}

 contarVogais("Aprender JavaScript é divertido")
  
