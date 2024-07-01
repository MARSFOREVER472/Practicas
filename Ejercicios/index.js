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
        case "resta": // SI ES UNA RESTA...
            return console.log(a - b); // RETORNA EL VALOR DE LA RESTA.
        case "multiplicacion": // SI ES UNA MULTIPLICACIÓN...
            return console.log(a * b); // RETORNA EL VALOR DE LA MULTIPLICACIÓN.
        case "division": // SI ES UNA DIVISIÓN...
            return console.log(a / b); // RETORNA EL VALOR DE LA DIVISIÓN.
        default:
            console.error(`La operacion ${operation} no existe!!`)
            break;
    }

}

/*
EJERCICIO 2: REALIZAR UNA FUNCIÓN QUE PERMITA ALMACENAR EN UN ARREGLO TODOS LOS
NÚMEROS PARES DESDE "a" HASTA "b".
*/

function numerosPares(a = 0, b = 0)
{
    let nums=[];
    // console.log(nums);

    for (let i = a; i <= b; i++)
    {
        // console.log(i);

        if (i % 2 === 0) // SI ES UN NÚMERO PAR...
            nums.push(i); // DESPLIEGA EL ARREGLO CON TODOS LOS NÚMEROS PARES.
    }
    console.log(nums);
}

/*
3.- Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero sin contar con la multiplicación de a * 5.
*/

function tablasValores(a = 0, x = 12)
{
    let result;
    for (let i = 0; i <= x; i++)
        {
            console.log(i);
        }

}
 

// EJECUCIÓN DE FUNCIONES...

operacionMatematica(2, 2, "suma"); // DA 4 EL RESULTADO.
operacionMatematica(10, 10, "resta"); // RESTA DE 2 NÚMEROS DESPLEGADOS POR CONSOLA.
operacionMatematica(4, 4, "multiplicacion"); // MULTIPLICACIÓN DE 2 NÚMEROS DESPLEGADOS POR CONSOLA.
operacionMatematica(15, 5, "division"); // DIVISIÓN DE 2 NÚMEROS DESPLEGADOS POR CONSOLA.
numerosPares(2, 100); // DESPLIEGA LOS NÚMEROS PARES DENTRO DE UN ARREGLO.
tablasValores();
