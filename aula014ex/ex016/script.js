
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


function clicou() {
    let res = document.getElementById('res');

    if (isNaN(valorInicio) || isNaN(valorFim) || isNaN(valorPasso)) {
        res.innerHTML = '<p style="color: red">Por favor, preencha todos os campos!</p>';
        return;
    }
    
    let resultado = '';

    if (valorInicio < valorFim) {
        for (let i = valorInicio; i <= valorFim; i += valorPasso) {
            if (i + valorPasso > valorFim){
                    resultado += `🏁`;
                } else {
                    resultado += `${i} ➡️ `;
                }
        }
    } else {
        for (let i = valorInicio; i >= valorFim; i -= valorPasso) {
            resultado += `${i} ➡️ `;
        }
    }

    res.innerHTML = resultado;
}