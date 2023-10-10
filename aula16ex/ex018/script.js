var num = document.querySelector('input#fnum')
var lista = document.getElementById('flista')
var res  = document.querySelector('div#res')
var valores = []

function isNumero(numero) {
    if(Number(numero) >= 1 && Number(numero) <= 100) { // se o numero for maior ou igual a 1 e TAMBÉM for menor ou igual a 100...
        return true
    } else {
        return false
    }
}
function inLista(numero, lista) {
    if(lista.indexOf(Number(numero)) != -1) { // se na lista o numero for diferente de -1 (ou seja, se o valor não foi encontrado na lista)
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // analisa se é um número E se já está na lista (ou seja, adiciona na lista apenas se for um número e se não está na lista) lembrando que ele adiciona no vetor "valores" também.
        console.log(10)
        valores.push(Number(num.value)) // adiciona o numero no vetor 'VALORES'
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}