function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA   
                img.setAttribute('src', 'foto-menino.png')
            }   else if (idade < 21) {
                //JOVEM
                img.setAttribute('src','foto-homemjovem.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'foto-homem.png')
            } else {
                //IDOSO
                img.setAttribute('src','foto-homemvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA  
                img.setAttribute('src', 'foto-menina.png') 
            }   else if (idade < 21) {
                //JOVEM
                img.setAttribute('src','foto-mulherjovem.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto.mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }
}
   