document.addEventListener(`DOMContentLoaded`, () => {

    const monto = Number(prompt(`Ingrese en numeros el valor de la cuenta`));
    const porcentaje = Number(prompt(`Ingrese en numeros el porcentaje de la propina`));

    const calcularPropina = (monto, porcentaje) => {

        const montoPropina = (monto * (porcentaje / 100));
        return montoPropina;
 
    }

    const resultado = calcularPropina(monto, porcentaje);

    console.log(`--- Resumen de la Cuenta ---`);
    console.log(`Monto de la cuenta: ${monto}`);
    console.log(`Propina (${porcentaje}%): ${resultado}`);
    console.log(`Total a pagar: $${monto + resultado}`);















});