
function precioDelcelular() {
    let precioDelCelular = prompt("Ingrese el precio del celular");
    while (precioDelCelular < 0 || precioDelCelular == "") {
        alert ("Ingrese corretamente el precio del celular")
        precioDelCelular = prompt("Ingrese el precio del celular");
    }
    return parseInt(precioDelCelular);
}
function calculoDelIva(precioDelCelular) {
    let celularConIva = (precioDelCelular / 100) * 21 + precioDelCelular;
    return "El precio de su celular con el impuesto es de " + celularConIva;
}
function mostrar(celularConIva) {
    return alert (celularConIva);
}

mostrar(calculoDelIva(precioDelcelular()));