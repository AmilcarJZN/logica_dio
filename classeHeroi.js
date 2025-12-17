class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque = "nenhum"
    atacar() {
        if (this.tipo == "guerreiro") {
            this.ataque = "espada"
        } else if
            (this.tipo == "mago") {
            this.ataque = "magia"
        } else if
        (this.tipo == "monge"){
            this.ataque = "artes marciais"
        }else {
            this.ataque= "shuriquen"
        }
    }
    
    escrever(){
        console.log (`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let ze = new hero ("Zézinho",23,"monge")
ze.atacar()
ze.escrever()
