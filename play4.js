// Strings. Las posiciones que ocupan 

// Podemos acceder a un carácterdel string mediante la misma notación que los array

let frase = "En esta escuela ya no traen pastas!"
console.log(frase[0]) // Primer carácter
console.log(frase[frase.length -1]) //Último carácter

// la función indexOf es una función especial denominada 'método'; que nos nos indica en que posición se encuentra una cadena de texto 

let posicion = frase.indexOf("escuela")
console.log("Puesto que la palabra 'escuela' empieza en la posición 8 del string; ese es el valor que va a devolver indexOf: ", posicion)
