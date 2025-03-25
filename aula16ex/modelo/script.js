

let numeros = []

function add() {
    let num = document.getElementById('txtnum')
    let n1 = Number(num.value)

    if (n1 == 0 || n1 > 100 || isNaN(n1)) {
        alert('Por favor, digite um número válido para adicionar!')
        return
    } else if (numeros.includes(n1)){
        alert('Esse número já foi adicionado!')
        return
    } else {
        numeros.push(n1)
        let tab = document.getElementById('seltab')
        
        let item = document.createElement('option')
        item.text = `Número ${n1} adicionado`
        tab.appendChild(item)

        num.value = ''
        num.focus()
    }
}

function final() {
    if (numeros.length === 0) {
        alert('Adicione números antes de finalizar!')
        return
    }

    let res = document.getElementById('res')
    numeros.sort()
    
    res.innerHTML = `
    <p>Ao todo, foram adicionados ${numeros.length} números.</p>
    <p>O maior valor informado foi ${numeros[numeros.length - 1]}.</p>
    <p>O menor valor informado foi ${numeros[0]}</p>
    <p>Somando todos os valores temos ${numeros.reduce((total, num) => total + num, 0)}</p>
    <p>A média dos valores informados é ${((numeros.reduce((total, num) => total + num, 0)) / numeros.length).toFixed(2)}</p>
    `
}

function limpar() {
    document.getElementById('seltab').innerHTML = '';
    
    numeros = []

    document.getElementById('res').innerHTML = '';

    document.getElementById('txtnum').focus();
}

