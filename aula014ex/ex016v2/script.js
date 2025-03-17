function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passos = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = '<p style="color: red">[ERRO] Faltam dados!</p>';
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passos.value);

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
               res.innerHTML += `${c} \u{27A1} `
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1} `
            }
        }

        res.innerHTML += '\u{1F3C1}'
    }
}