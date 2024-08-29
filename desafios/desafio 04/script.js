function tabuada () {
    var num = document.getElementById('num')
    var res = document.getElementById('seltab')

    if (num.value.length == '') {
        window.alert("digite um número:")
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for (var c = 1; c <= 10; c = c + 1) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
}

//function limpar () {
    //location.reload()
//} UM SEGUNDO JEITO DE LIMPAR A TELA 