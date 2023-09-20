function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    } else {
        resposta.innerHTML = 'Contando: '
        let inicio = Number(inicio.value)
        let fim = Number(fim.value)
        let passo = Number(passo.value)

        for(let contador = inicio; contador <= fim; contador += passo) {
            resposta.innerHTML += `${contador}`
        }
    }
}