function verificar() {
    var data = new Date()   //  PEGAR ANO ATUAL/DATA
    var ano = data.getFullYear() // PEGAR O ANO ATUAL COM OS 4 DÍGITOS
    var anonasc = document.getElementById('txtano')  // ANO DE NASCIMENTO DIGITADO
    var res = document.querySelector('div#res')
    if (anonasc.value.length == 0 || Number(anonasc.value) > ano) {  /// SE NÃO FOR DIGITADO NADA OU O ANO INSERIDO FOR MAIOR QUE O ATUAL...
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // var dos botoes de feminino ou masculino
        var idade = ano - Number(anonasc.value) // calculando a idade, fazendo o ano atual MENOS o ano inserido
        var gênero = '' // var do genero, vazio por enquanto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {  // se no formulário for selecionado [0] então é Homem
            gênero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 10) {
                img.setAttribute('src', 'foto-criança-m.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 21) {
             // jovem
                img.setAttribute('src', 'foto-adolescente-m.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {  // se no formulário for selecionado [1] então é Mulher
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 10) {
                img.setAttribute('src', 'foto-criança-f.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-adolescente-f.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'foto-adulta-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'   // ALINHAMENTO NO JavaScript
        res.innerHTML=`Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img) // chama a imagem 
            
    }

}
