function contar () {

    let inicio = Number(document.querySelector("#inicio").value)
    let fim = Number(document.querySelector("#fim").value)
    let passo = Number(document.querySelector("#passo").value)
    let res = document.querySelector("#resultado")

    if (passo <= 0){
        alert("[ERRO] Passo inválido! Considerando passo 1")
        passo = 1
    }

    res.innerHTML = "Contando... <br>"

    if (inicio < fim){
        for (let c = inicio; c <= fim; c+= passo){
            res.innerHTML += `${c} 👉`
        }
    } else {
        for (let c = inicio; c >= fim; c -= passo){
            res.innerHTML +=  `${c} 👉`
        }
    }
    res.innerHTML += "🏁"
}