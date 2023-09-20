function contar() {   // puxa o botão 'CLICAR'
    var ini = document.getElementById('txti') // puxa o ID do txti
    var fim = document.getElementById('txtf') // puxa o ID do txtf
    var passo = document.getElementById('txtp') // puxa o ID do txtp
    var res = document.getElementById('res') // puxa o ID da resposta
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {   // se no INICIO tiver dado 0, no FIM  tiver dado 0, no PASSO tiver dado 0...
        res.innerHTML = 'Impossível Contar!' // se não tiver dados no inicio, fim e passo, aparece isso.
        window.alert('[ERRO] Faltam Dados!')   // alerta se se não for passado nenhum dado
    } else {
        res.innerHTML = 'Contando: <br>' 
        var i = Number(ini.value)  // pega o numero da variavel inicio...
        var f = Number(fim.value)  // pega o numero da variavel final...
        var p = Number(passo.value)  // pega o numero da variavel passo...
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')  // se não for inserido o  numero de passos, mostra esse alerta e da continuidade com passo 1
            p = 1 // 
        } 
        if (i < f) {    // se o inicio for menor que o final...
            // Contagem Crescente
            for(var c = i; c <= f; c += p) {   //  
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem Regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}