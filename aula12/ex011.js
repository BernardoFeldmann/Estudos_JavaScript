/*
var idade = 18
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto OPCIONAL')
    } else {
        console.log('Voto OBRIGATÓRIO')
    }
}

////// OU //////*/

var idade = 68
console.log(`Você tem ${idade} anos de idade.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 67) {
    console.log('Voto OPCIONAL')
} else if (idade >= 18) {
    console.log('Voto OBRIGATÓRIO')
}