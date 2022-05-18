// Implementa en este fichero la solución
// Escribe antes todos los pasos que hay que realizar con lenguaje natural

// Estas palabras prohibidas vienen de la base de datos. Úsa la variable palabrasProhibidas, porque sus valores podrían cambiar en función de las necesidades del censor 

let palabrasProhibidas = ["Bugatti", "yummy", "Booty"];

console.log("Es hora de censurar!")

////////////////////////////
let cancion = document.querySelectorAll('span');



for (let i = 0; i < cancion.length; i++) {
    console.log("El nombre del michi es: ", cancion[i].textContent);
   
    if(palabrasProhibidas.includes(cancion[i].textContent)){
        console.log("He encontrado a Bugatti!")
        cancion[i].textContent=("***")
        console.log("y a mutado a "+cancion[i].textContent)
    }
 
};



// Resultado esperado: tras cargar la aplicación Web, las palabras contenidas en el array 'palabrasProhibidas' han sido substituidas por **** en el documento Web ya renderizado.

// Pista: Fíjate que todas las palabras candidatas a ser prohibidas estan dentro de un <span>
// Pista: REcuerda que existe un método de array muy interesante para saber si un elemento esta dentro de un array: https://www.w3schools.com/jsref/jsref_includes_array.asp