function gerar() {
    var num = document.getElementById('idnum')
    var tabuada = document.getElementById('seltab')
    if(num.value.length == 0) {
        alert('Por favor, digite um número!') // alerta se o valor passado for = 0
    } else {
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML='' // limpa tabuada, para proximo numero
        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}