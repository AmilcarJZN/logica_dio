//Código de desafio DIO Lógica de programação
let xp = 156
let nome ="Zézinho do Gás"
nivel = "vazio"

switch (true) {
    case ( xp < 1001):
        nivel ="Ferro"
        break
    case ( xp <2001):
        nivel ="Bronze"
        break
    case ( xp <5001):
        nivel ="Prata"
        break
    case ( xp <7001):
        nivel ="Ouro"
        break
    case ( xp <8001):
        nivel ="Platina"
        break
    case ( xp <9001):
        nivel ="Ascendente"
        break
    case ( xp <10001):
        nivel ="Radiante"
        break
    case ( xp >10000):
        nivel ="Radiante"
        break
    default:
        nivel ="Nenhum"
        break
}
console.log (`O herói de nome ${nome} está no nível de ${nivel}` )