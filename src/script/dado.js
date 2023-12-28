const dado = [
    {"id":1, "img-dado":"./src/dados/img/dado-1.png"},
    {"id":2, "img-dado":"./src/dados/img/dado-2.png"},
    {"id":3, "img-dado":"./src/dados/img/dado-3.png"},
    {"id":4, "img-dado":"./src/dados/img/dado-4.png"},
    {"id":5, "img-dado":"./src/dados/img/dado-5.png"},
    {"id":6, "img-dado":"./src/dados/img/dado-6.png"}
]
console.log(rolandoDados())

export async function rolandoDados(){
    const numeroDoDado = Math.floor(Math.random() * dado.length)
    let dadoSelecionado = dado[numeroDoDado-1]
    
    return dadoSelecionado
}

