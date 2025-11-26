document.addEventListener(`DOMContentLoaded`, () => {

    const montoCuenta = parseFloat(prompt(`Ingrese en numeros el valor de la cuenta`));
    const porcentajePropina = parseFloat(prompt(`Ingrese en numeros el porcentaje de la propina`));

    const calcularPropina = (montoCuenta, porcentajePropina) => {

        const montoPropina = (montoCuenta * (porcentajePropina / 100));
        return montoPropina;
 
    }

    const resultado = calcularPropina(montoCuenta, porcentajePropina);

    console.log(`--- Resumen de la Cuenta ---`);
    console.log(`Monto de la cuenta: ${montoCuenta}`);
    console.log(`Propina (${porcentajePropina}%): ${resultado}`);
    console.log(`Total a pagar: $${montoCuenta + resultado}`);















});