let num = [5, 8, 2, 9, 3]

/*num[5] = 7 (Adiciona um conteúdo a posição que está entre [])*/

num.push(num.length) /*Cria um novo índice no final do vetor e adiciona o conteúdo*/
num.length /*Conta o número de índices*/
num.sort() /*Coloca os valores em ordem*/

/*Lembre-se de que a ordem acima influencia*/

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9) /*Vai buscar o VALOR 9 e mostrar o índice(posição) que ele se econtra, ou seja, 3!*/
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
    /*Mostrou posição 5 por causa do num.sort()*/
}