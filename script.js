function Verificar(){
    //pegando valores inseridos do html
    var din = document.getElementById('dinheiro')
    var comb = document.getElementById('combustivel')
    var km = document.getElementById('km')

    // transformando String em Numeros
    var velD = Number(dinheiro.value)
    var velC = Number(combustivel.value)
    var velK = Number(km.value)

    //realizando as contas para obter o resultado final
    var resD = velD
    var resC = resD / velC
    var resK = resC * velK

    //pegando a div para exibir o resultado
    var res = document.getElementById('res')

    //exibindo o resultado da conta na div res
    res.innerHTML = `Com ${resD} reais, você terá ${resC}L de combustivel e andará ${resK}Km/h.`
}