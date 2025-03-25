// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fator(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fator(5))

/* 

CÓDIGO EXPLICADO:

1. fat = 1

2. Primeira iteração (c=5): fat = 1 * 5 = 5

3. Segunda iteração (c=4): fat = 5 * 4 = 20

4. Terceira iteração (c=3): fat = 20 * 3 = 60

5. Quarta iteração (c=2): fat = 60 * 2 = 120

6. Quando c=1, o loop para

7. Retorna 120 (que é 5! = 5×4×3×2×1)

*/