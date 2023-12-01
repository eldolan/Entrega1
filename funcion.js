function solicitarNota() {
    let notaIngresada = prompt("Ingrese una nota o escriba 'fin' para terminar:");
    if (notaIngresada.toLowerCase() === "fin") {
        return null;
    }
    return Number(notaIngresada);
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

function main() {
    let sumaNotas = 0;
    let numeroDeNotas = 0;
    let nota;

    while (true) {
        nota = solicitarNota();
        if (nota === null) {
            break;
        }
        sumaNotas += nota;
        numeroDeNotas++;
    }
    if (numeroDeNotas > 0) {
        let promedio = calcularPromedio(sumaNotas, numeroDeNotas);
        window.alert("El promedio es: " + Math.round(promedio * 100) / 100);
    } else {
        window.alert("No se ingresaron notas.");
    }
}

main();

