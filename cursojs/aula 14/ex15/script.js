function contar() {

let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'IMPOSSÍVEL CONTAR!'
    window.alert('[ERRO] FALTAM DADOS!')
    
    } else{
    res.innerHTML = 'Contando...<br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
         p = 1
    }
        if (i < f){
         //CONTAGEM CRESCENTE 
        for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} 👉`
        }
        

            //CONTAGEM REGRESSIVA
    } else {
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c}  👉`
        }
        
    }
     res.innerHTML += `✅`
}
} 