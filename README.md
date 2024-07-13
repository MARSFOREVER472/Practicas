# Practicas
## **_Ejercicios con JavaScript para practicar!_**

- **_En este proyecto se realizará un trabajo de lógica de programación con JavaScript._**
- **_Este repositorio está orientado a personas que recién están aprendiendo a dominar dicho lenguaje y que quieren mejorar sus habilidades de lógica pero también a la vez mejorar el uso de algunas funciones y palabras reservadas con JavaScript._**
- **_A continuación se mostrarán los siguientes enunciados:_**

  **_1.- Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y otro el nombre de la operación (en minúsculas)._**

  **_NOTA: Si el parámetro de la operación no es válido que arroje un error personalizado a la consola._**

  **_Desarrollo de este ejercicio: Mediante el siguiente código..._**
```
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
```
  **_2.- Realizar una función que permita almacenar en un arreglo rtodos los números pares desde "a" hasta "b"._**

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

**_3.- Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero sin contar con la multiplicación de a * 5._**

               function tablasValores(a = 0, x = 12)
               {
                      // let result;
                      for (let i = 0; i <= x; i++)
                      {
                          // result = a * i;
                          // console.log(result);

                          // CUANDO NO CONSIDERE EL MÚLTIPLO DE 5...

                          if (i !== 5)
                          console.log(`${a} * ${i} = ${a * i}`);
                      }

               }

**_4.- Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100._**


     function ejercicio4 (a = 1, b = 100){

    let multiplos = [];

    for(let i = a; i <= b; i ++){
        if(i % 3 === 0) multiplos.push(i); 
    }
    console.log(multiplos);
}
