


console.log(`o herói tem saldo de ${ranquear(51,13)} e nível de ${determinarNivel (ranquear(51,13))}`)

function ranquear(wins = 0,loses = 0){
    let saldoVitorias = wins-loses
    return saldoVitorias
}

function determinarNivel(saldo){
    if (saldo < 10){
        nivel = "Ferro"
    } else
    if (saldo < 21){
        nivel = "Bronze"
    } else
    if (saldo < 51){
        nivel = "Prata"
    } else
    if (saldo < 81){
        nivel = "Ouro"
    } else
    if (saldo < 91){
        nivel = "Diamante"
    } else
    if (saldo < 101){
        nivel = "Lendário"
    } else
    if (saldo > 100){
        nivel = "Imortal"
    }
    return nivel
}
