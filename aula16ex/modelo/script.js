function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data  = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong>`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        document.body.style.background = '#e2cd9f'
        img.src = 'manha (1).png'
        console.log('#dia')
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        document.body.style.background = '#b9846f'
        img.src = 'tarde (1).png'
        console.log('#tarde')
    } else {
        // BOA NOITE
        img.src = 'noite (1).png'
        document.body.style.background = '#515154'
        console.log('#noite')
    }
}