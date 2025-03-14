let valorInicio, valorFim, valorPasso;

document.getElementById('ini').addEventListener('input', function() {
    valorInicio = Number(this.value);
})

document.getElementById('fim').addEventListener('input', function() {
    valorFim = Number(this.value);
})

document.getElementById('pas').addEventListener('input', function() {
    valorPasso = Number(this.value);
})

if (NaN(valorInicio, valorFim, valorPasso)) {
    window.alert('Por favor, digite números válidos!')
}

function clicou() {
    window.alert(`Início: ${valorInicio}, Fim: ${valorFim} e Passos: ${valorPasso}.`)
}
