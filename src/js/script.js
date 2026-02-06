function pegarValor(id) {
    return Number(document.getElementById(id).value) || 0;
}

function calcularGastos() {
    const aluguel = pegarValor('aluguel');
    const agua = pegarValor('agua');
    const luz = pegarValor('luz');
    const internet = pegarValor('internet');
    const outros = pegarValor('outros');

    const total = aluguel + agua + luz + internet + outros;
    const resultado = document.getElementById('resultado');

    resultado.innerText = `Total mensal: R$ ${total.toFixed(2)}`;

    if (total > 3000) {
        resultado.className = 'alerta';
    } else {
        resultado.className = 'ok';
    }
}
