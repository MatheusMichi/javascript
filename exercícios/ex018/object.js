let cliente = {
    nome: 'José' ,
    sexo: 'M' ,
    idade: 46 ,
    peso: 83.2 ,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}

cliente.engordar(2)
console.log(`A ficha do cliente ${cliente.nome} é: `)
console.log(cliente)
console.log(`${cliente.nome} passou a pesar ${cliente.peso} Kg após as férias`)