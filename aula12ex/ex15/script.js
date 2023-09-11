function verificar() {
    var data = new Date()   //  PEGAR ANO ATUAL/DATA
    var ano = data.getFullYear() // PEGAR O ANO ATUAL COM OS 4 DÍGITOS
    var anonasc = document.getElementById('txtano')  // ANO DE NASCIMENTO DIGITADO
    var res = document.querySelector('div#res')
    if (anonasc.value.length == 0 || Number(anonasc.value) > ano) {  // SE NÃO FOR DIGITADO NADA OU O ANO INSERIDO FOR MAIOR QUE O ATUAL...
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // var dos botoes de feminino ou masculino
        var idade = ano - Number(anonasc.value) // calculando a idade, fazendo o ano atual MENOS o ano inserido
        var gênero = '' // var do genero, vazio por enquanto
        if (fsex[0].checked) {  // se no formulário for selecionado [0] então é Homem
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
            } else if (idade < 21)
             // jovem
        } else if (fsex[1].checked) {  // se no formulário for selecionado [1] então é Mulher
            gênero = 'Mulher'
        }
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
    }

}
