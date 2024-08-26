var date = new Date()
var hora = date.getHours()
console.log(`agora são ${hora} horas`)
  if (hora < 5) {
    console.log(`Está de madrugada, vá durmir!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa Tarde!`)
} else if (hora >= 18 && hora <= 24) {
    console.log(`Boa noite!`)
} else {
    console.log(`inválido`)
}