
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
        res.innerHTML = '<p style="color: red">Por favor, digite números válidos!</p>';
        return;
    } 

    if (valorPasso <= 0) {
        res.innerHTML = '<p style="color: red">O valor do passo deve ser maior que zero!</p>';
        return;
    }

    res.innerHTML = '';

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