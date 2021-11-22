/* function Gato(patas, color, edad, alimento) {
    this.patas = patas
    this.color = color
    this.edad = edad
    this.alimento = alimento
}

const eris = new Gato (4, "Blanco y marron", "1 año", "balanceado")
console.log (Gato) */

class Producto {
    constructor (codigo, nombre, precio, moneda, envio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio 
        this.moneda = moneda
        this.envio  = envio
    }

    conIva(){
        return this.moneda + " " + (this.precio * 1.21)
    }
    
    conEnvioeIva(){
        return this.moneda + " " + (this.precio * 1.21 + this.envio)
    }
}

const Iphone13 = new Producto ("IP212D", "Iphone13", 1200, "USD", 150)
console.log (Iphone13.conEnvioeIva())
