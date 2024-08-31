const val = [3 , 7 , 9 , 1 , 6]
    val.push(5) //  ENCREMENTA UM VALOR AO ARRAY  //
    val.sort()  // COLOCA EM ORDEM CRESCENTE OS ELEMENTOS DO ARRAY //
    console.log(`o primeiro valor do array é ${val[0]}`)
    console.log(`o array possui os valores ${val} nesta ordem`)
    console.log(`o array possui ${val.length} elementos`) // O LENGTH LE O TAMANHO DO ARRAY//
    let pos = val.indexOf(9)
    if (pos == -1) {
        console.log(`o valor em questão não foi encontrado`)
    } else {
        console.log(`o valor procurado está no índice ${pos}`)
    }
    