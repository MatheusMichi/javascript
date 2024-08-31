const num = [3 , 5 , 9 , 7 , 2]
    num.sort()
    for (let pos = 0; pos < num.length; pos++) {
        console.log(`a posição ${pos} tem o valor ${num[pos]}`)
    }

    for (let pos in num) {
        console.log(`aqui também a posição ${pos} tem o valor ${num[pos]}`)
    }