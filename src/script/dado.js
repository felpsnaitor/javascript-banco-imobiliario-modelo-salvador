const dado = [
    {"id":1, "img-dado":"./src/dados/img/dado-1.png"},
    {"id":2, "img-dado":"./src/dados/img/dado-2.png"},
    {"id":3, "img-dado":"./src/dados/img/dado-3.png"},
    {"id":4, "img-dado":"./src/dados/img/dado-4.png"},
    {"id":5, "img-dado":"./src/dados/img/dado-5.png"},
    {"id":6, "img-dado":"./src/dados/img/dado-6.png"}
]
console.log(rolandoDados())

// FUNÇÂO PARA ROLAR OS DADOS
function rolandoDados(){
    const numeroDoDado = Math.floor(Math.random() * (6 - 0))
    let dadoSelecionado = dado[numeroDoDado]
   
    return dadoSelecionado   
}

// Calculando dados dos 2 dados
function somaDosDados(){
    let somaDados = 0
    let dado01 = rolandoDados().id
    somaDados = dado01
    let dado02 = rolandoDados().id
    somaDados += dado02

    return somaDados

}