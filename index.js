class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    attack() {
        if (this.type === "mago") {
            console.log(`O ${this.type} atacou usando magia`)
        } else if (this.type === "guerreio") {
            console.log(`O ${this.type} atacou usando espada`)
        } else if (this.type === "monge") {
            console.log(`O ${this.type} atacou usando artes marciais`)
        } else {
            console.log(`O ${this.type} atacou usando shuriken`)
        }
    }

}
let hero1 = new hero("Pebi", 24, "mago")
let hero2 = new hero("felipao", 44, "guerreio")
let hero3 = new hero("Cleber", 28, "monge")
let hero4 = new hero("Ana", 20, "ninja")

hero1.attack()
for (let i = 1; i <= 2; i++) {
    console.log("O " + hero2.name + " sofre dano")
}

hero2.attack()
for (let i = 1; i <= 2; i++) {
    console.log("O " + hero1.name + " sofre dano")
}

hero3.attack()
for (let i = 1; i <= 2; i++) {
    console.log("O " + hero4.name + " sofre dano")
}

hero4.attack()
for (let i = 1; i <= 4; i++) {
    console.log("O " + hero3.name + " sofre dano")
}