// Constantes para las tasaS
const tasaInteresMenor36Cuotas = 143;
const tasaInteresMayor36Cuotas = 131;

// Solicitar información al usuario
let plazoMeses = 0;
let montoPrestamo = 0;

montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:\n0 - PARA FINALIZAR."));
if (montoPrestamo != 0)
    plazoMeses = parseInt(prompt("Ingrese el plazo en meses:"));

while(montoPrestamo != 0){

    // Calcular la tasa de interés mensual
    let tasaInteres = 0;

    if(plazoMeses <= 36)
        tasaInteres = tasaInteresMenor36Cuotas;
    else
        tasaInteres = tasaInteresMayor36Cuotas;

    let tasaMensual = tasaInteres / 100 / 12;

    // Calcular la cuota mensual
    let cuotaMensual = CalcularCuota(montoPrestamo, tasaMensual, plazoMeses);

    // Mostrar detalles del préstamo en consola
    console.log("Detalles del préstamo:");
    console.log("Monto del préstamo: $" + montoPrestamo.toFixed(2));
    console.log("Tasa de interés anual: " + tasaInteres.toFixed(2) + "%");
    console.log("Plazo en meses: " + plazoMeses);
    console.log("Cuota mensual: $" + cuotaMensual.toFixed(2));

    // Calcular e informar las cuotas mensuales individuales
    console.log("Cuotas mensuales:");
    for (let mes = 1; mes <= plazoMeses; mes++) {
        let saldoRestante = montoPrestamo - (cuotaMensual * (1 - Math.pow(1 + tasaMensual, mes - plazoMeses)) / tasaMensual);
        console.log("Mes " + mes + ": $" + cuotaMensual.toFixed(2) + " - Saldo pagado: $" + saldoRestante.toFixed(2));
    }

    montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:\n0 - PARA FINALIZAR."));
    if (montoPrestamo != 0)
        plazoMeses = parseInt(prompt("Ingrese el plazo en meses (Máximo 60):"));
}

function CalcularCuota(montoPrestamo, tasaMensual, plazoMeses){
    let cuotaMensualAux = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses));
    return cuotaMensualAux;
}