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
        res.innerHTML = '' // limpa a função finalizar e retorna a inserir valores na lista
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''  // apaga o numero da caixa de texto para que seja inserido um novo
    num.focus()  // permanece o cursor na caixa de inserção de valores para que não tenha que clicar para digitar um novo número
}

function finalizar() {
    if (valores.length == 0) {   // se a lista valores estiver 'zerada'...
        alert('Adicione valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {  // para cada posição em valores
            soma += valores[pos]  // vai somando os valores das posições
            if (valores[pos] > maior) // se o valor na posição for maior que o maior valor atual...
            maior = valores[pos]     // ...ele passa a ser o maior valor atual
            if (valores[pos] < menor)  // se o valor da posição for menor que o menor valor...
            menor  = valores[pos] // ...o mesmo passa a ser o menor valor atual
        }
        media = soma/total  // media = é a soma divido pelo total de numeros da lista.
        res.innerHTML = '' 
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados, são eles: ${valores}.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores da lista é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}