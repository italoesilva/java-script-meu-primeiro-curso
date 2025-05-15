function verificar(){ //Define a função verificar() que será chamada quando o botão for clicado. 

    var data = new Date() //cria um objeto com a data atual do sistema (computador).
    var ano = data.getFullYear() // extrai somente o ano atual, como 2025
    var fano = document.getElementById('txtano') //pega o valor do campo onde o usuário digita o ano de nascimento.
    var res = document.querySelector('div#res') //res pega a <div> onde o resultado será mostrado.

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
            if (fsex[0].checked)      {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
              img.setAttribute('src', 'bebehomem.png')

        } else if (idade >= 10 && idade < 21){
            //Jovem
              img.setAttribute('src', 'jovemhomem.png')
        } else if (idade < 50){
            //adulto
              img.setAttribute('src', 'adultohomem.png')
        } else {
            // idoso
              img.setAttribute('src', 'idosohomem.png')
        }
        
       } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'bebemulher.png')
        } else if (idade >= 10 && idade < 21){
            //Jovem
              img.setAttribute('src', 'jovemmulher.png')
        } else if (idade < 50){
            //adulto
              img.setAttribute('src', 'adultomulher.png')
        } else {
            // idoso
              img.setAttribute('src', 'idosomulher.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
       
    }

}
