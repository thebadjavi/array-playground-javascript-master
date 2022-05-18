/**
 * Poniéndolo todo junto. Y RECUERDA: Lo que sucede en la función, se queda en la función! 
 */

function existePez(listaPeces, he_encontrado_al_pez) {
    let pezEncontrado = false; // Empezamos a buscar en el array. De momento, no hemos encontrado el pez;
    let i = 0; // quiero empezar a buscar por el primer elemento del array, es decir, por listaPeces[0]

    while (!pezEncontrado && i < listapeces.length) {
        // PISTA ERROR 2: usa console.log dentro de este bucle para ver como cambia el valor de las variables 'i' y 'pezEncontrado'.
        pezEncontrado = (listaPeces[i] == he_encontrado_al_pez);
        console.log("posicion de busqueda "+i+" pejcao "+pezEncontrado)

        i++;
    }

    return pezEncontrado; // devolvemos true o false en función de si hemos encontrado el pez
}

let listapeces  = ["Dory", "Nemo", "Shipho", "Estrella"]
let he_encontrado_al_pez = existePez(listapeces , "Estrella")

console.log("He encontrado al pez?: " + he_encontrado_al_pez)

/**
 * Ejecuta el código.
 * Esta functión debería devolver "true"; puesto que "Estrella"; efectivamente está en el array. * Sin embargo devuelve false. Hay dos errores. Los dos errores estan DENTRO de la función, no fuera. NO hace falta modificar ninguna línea de código fuera de la función. 
 * 
 * 1. Un error que impide ejecutar el código. Vigila la información que arroja el TERMINAL de Visual Studio y presta atención.
 * 
 * 2. Cuando resuelvas el error de código, existe en error lógico; que hace que el código no devuelve lo que debería devolver.
 * 
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso. 
 */