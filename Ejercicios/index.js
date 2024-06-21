/*
EJERCICIO: Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, 
que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, 
dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). 
Si el parámetro de la operación no es válido que mande un error personalizado a la consola.
*/

// LLAMAREMOS A LA FUNCIÓN...

function operacionMatematica(a, b, operation)
{
    // USAREMOS LA ITERACIÓN "switch" PARA CADA OPERACIÓN MATEMÁTICA CON 2 TÉRMINOS...

    switch(operation)
    {
        case "suma": // SI ES UNA SUMA...
            return console.log(a + b); // RETORNA EL VALOR DE LA SUMA.
        case "resta": // SI ES UNA SUMA...
            return a - b; // RETORNA EL VALOR DE LA SUMA.
            break;
        case "multiplicacion": // SI ES UNA SUMA...
            return a * b; // RETORNA EL VALOR DE LA SUMA.
            break;
        case "division": // SI ES UNA SUMA...
            return a / b; // RETORNA EL VALOR DE LA SUMA.
            break;
        default:
            console.error(`La operacion ${operation} no existe!!`)
            break;
    }

}

// EJECUCIÓN DE FUNCIONES...

operacionMatematica(2, 2, "suma"); // DA 4 EL RESULTADO.
