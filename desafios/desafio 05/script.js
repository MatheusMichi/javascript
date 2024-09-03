var num = document.getElementById('txtn')
var lista = document.getElementById('selnum')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        window.alert('valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
                    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Não foi possível finalizar pois não há valores')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if ( valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados`
        res.innerHTML += `<p> O maior número informado é ${maior} </p>`
        res.innerHTML += `<p> O menor número informado é ${menor} </p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p> A média de todos os valores é ${media} </p>`
    }
    



