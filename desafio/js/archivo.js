let personaje = prompt ("Ingrese el nombre de su personaje")

function entradaAlCastillo() {
    let puertaDelCastillo = parseInt(prompt(
      "Hola " + personaje + ` ¿Desea entrar al castillo?
     1 - Si
     2 - No
    `
    ))
    if (puertaDelCastillo === 1) {
        let curiosidad = parseInt (prompt(
          "Excelente decision " + personaje + ` acabas de ingresar a un castillo con grandes tesoros dentro. Apenas ingresas, ves una puerta entre abierta ¿Quieres investigar?
        1 - Si
        2 - No
        `))
    } else{
        alert("Ohhhh " + personaje + " Perdiste una gran oportunidad...")
    }
    return puertaDelCastillo
}
function peleaEnElCastillo() {
    let encuentro = parseInt (prompt (`¡Increible! Acabas de ingresar llena de oro. Aunque, no todos es color de rosas, un guerrero se encuentra custodiando todo este botin. Al parecer, es muy fuerte pero mas grande es la recompensa... ¿Deseas Pelear?
    1 - Si
    2 - No
    `
    ))
    if (encuentro === 1) {
        let pelea = parseInt (prompt (`¡Acaba de iniciar la pelea! Para poder ganarla, debe resolver la siguiente operacion aritmetica: 7 x 8 + 4 = 
        1 - 57
        2 - 84
        3 - 60
        4 - 53
        `
        )) 
    } else{
        alert (personaje + " Acabas de morir en manos de la guardia imperial")
    } if (pelea === 3) {
        let ganador = parseInt(prompt("¡Perfecto " + personaje + "!" + ` 
        Acabas de impactar sobre el guardia, pero queda tambaleando. Para poder ganarle, debes de resolver el siguiente acertijo: Mis manos se pueden mover, pero no pueden aplaudir. ¿Qué soy?
        1 - Un bebe
        2 - La alarma
        3 - Un gnomo de jardin
        4 - Un reloj 
        `))
    }else{
        alert("Aparecio un guardia por la espalda..." + personaje + "La proxima sera.")
    }
    return ganador
}

function salidaDelCastillo () {
    if (ganador === 4) {
        return alert ("¡Felicitaciones " + personaje + "! Acabas de salir victorioso del castillo. te has llevado un tesoro valudado en un millon de dolares. Pero... la guardia imperial va a tomar venganza")
    } else{
        return alert ("No has logrado escapar")
    }
}

let aventuraEnBath = salidaDelCastillo(peleaEnElCastillo(entradaAlCastillo()));