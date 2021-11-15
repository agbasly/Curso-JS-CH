// for(let i = 1; i < 10; i++){
//     console.log("Hola coder")
//     if (i == 5){
//         break
//     }
// }

// let nombreAl = prompt ("Ingrese su nombre");
// //mientras este vacio
// while (nombreAl == ""){
//     nombreAl = prompt ("ingresa tu nombre")
// }
// alert ("Gracias " + nombreAl)

// let dia = prompt ("Ingrese el dia (recuerde ingresar la primera con mayusucula)")

// switch (dia){
//     case "Lunes:":
//         alert(dia + " Clases de spinning 16:30hs y zumba 12:00hs");
//         break
//     case "Martes:":
//         alert (dia + " Clases de futbol 20:00hs y basquet 17:00hs")
//         break
//     case "Miercoles:":
//         alert(dia + " Clases de spinning 16:30hs y zumba 12:00hs");
//         break
//     case "Jueves:":
//         alert(dia + " Clases de futbol 20:00hs y basquet 17:00hs");
//         break
//     case "Viernes:":
//         alert(dia + " LuClases de tap 19:30hs y judo 11:00hs");
//         break
//     default:
//         alert("Hoy es fin de semana :)")
// }
// for (let i = 0; i <= 50; i++) {
//     console.log("Este es la vuelta numero: " + i)
// }

let notas = parseInt(prompt("Ingrese su nota de la prueba de matematicas"))
let promocion = notas <= 10 && notas > 8
switch (notas <= 10 && notas >= 0 ){
    case (promocion):
        alert ("Felicitaciones! Usted promociono la materia")
        break
    case (notas < 6):
        alert("Usted desaprobo. Su nota es un: " + notas + " .Presentarse el dia miercoles para el recuperatorio");
     break
    case (notas >= 6):
        alert ("Usted aprobo ¡Felicitaciones! Su nota es un: " + notas)
     break
     default:
        alert ("ingrese correctamente el numero")
}

// let palabraClaveIngresada = prompt ("Ingrese palabra clave");
// let intentos = 1 ;
// const palabraClave = "admin1234";

// while (palabraClaveIngresada != palabraClave){
//     palabraClaveIngresada = prompt ("ERROR: ingrese la palabra clave");
//     intentos++
// }
// alert ("Bienvenid@ x, intentos realizados: " + intentos);
