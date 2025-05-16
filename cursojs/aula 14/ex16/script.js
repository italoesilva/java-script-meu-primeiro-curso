const select = document.getElementById('numero');
const resultado = document.getElementById('resultado');

// GERAR AS OPÇÕES DE -10 A 10
for (let i = -10; i <= 10; i++) {
    let option = document.createElement('option');
    option.value = i; // Aqui estava com '-' em vez de '='
    option.text = i;  // Estava 'tet', o correto é 'text'
    select.appendChild(option);
}

// EVENTO QUANDO O USUÁRIO MUDAR O NÚMERO
select.addEventListener('change', () => { // Aqui faltava a flecha =>
    const valor = Number(select.value);
    resultado.innerHTML = '';

    if (select.value === '') {
        resultado.innerHTML = '<p>Por favor, selecione um número!</p>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement('p');
        linha.textContent = `${valor} x ${i} = ${valor * i}`;
        resultado.appendChild(linha);   
    }
});