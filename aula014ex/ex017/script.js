function gerar() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    
    if (num.value.length <= 0) {
        arlet('Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `v${i}`;
            tab.appendChild(item);
        }
    }
}