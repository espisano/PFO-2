
console.log("////////////////////////////////////////////////////");
console.log("Grupo 10");
console.log("Trabajo Práctico Obligatorio 2");
console.log("Integrantes: Facundo Villarreal, Mariano Lopez y Ernesto Pisano");
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
console.log("\n");

/*
1. Calcular el área de un rectángulo
*/


function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

console.log("Solucion 1: Calcular el área de un rectángulo");
console.log("Ejemplo 1: Base 5 y altura 3");
console.log("Resultado:", calcularAreaRectangulo(5, 3)); 
console.log("Ejemplo 2: Base 10 y altura 4");
console.log("Resultado:", calcularAreaRectangulo(10, 4)); 
console.log("Ejemplo 3: Base 7.5 y altura 2");
console.log("Resultado:", calcularAreaRectangulo(7.5, 2));
console.log("\n----------------------------------------------------\n");

/*
Es un ejercicio simple que no requiere siquiera una explicacion
*/


/*
2. Contar palabras en una cadena
*/

function contarPalabras(cadena) {
    let cadenaSinPuntuacion = cadena.replace(/[^\p{L}\p{N}\s]/gu, ' ');
    let palabras = cadenaSinPuntuacion.trim().split(/\s+/);
    if (palabras.length === 1 && palabras[0] === "") {
        return 0;
    }
    return palabras.length;
}

console.log("Solucion 2: Contar palabras en una cadena");
console.log("Ejemplo 1: Humahuaca es un lugar copado");
console.log("Resultado:", contarPalabras("Humahuaca es un lugar copado"));
console.log("Ejemplo 2: Hola, mundo!");
console.log("Resultado:", contarPalabras("Hola, mundo!"));
console.log("Ejemplo 3:   Pablito   , clavo     un   clavito   ");
console.log("Resultado:", contarPalabras("  Pablito  ,  clavo     un   clavito   "));
console.log("\n----------------------------------------------------\n");

/*
Para esta funcion podemos encontrar 2 problematicas. Que entre palabras haya caracteres que por error hayan quedado entre espacios o
mismo que haya muchos espacios entre palabras o al principio o final de la oracion. Lo primero lo solucionamos con el replace() y esa expresion
que reemplaza todo lo que no sea una letra por un espacio. Lo segundo lo solucionamos con el Split() que en este caso esta eliminando los espacios
entre palabras y el trim que esta eliminando los espacios al principio y el final de las oraciones.
*/


/*
3. Contar vocales en una cadena
*/


function contarVocales(cadena) {
    let contador = 0;
    let cadenaMinuscula = cadena.toLowerCase();
    const vocales = 'aeiouáéíóúü'; 
    for (let i = 0; i < cadenaMinuscula.length; i++) {
        if (vocales.includes(cadenaMinuscula[i])) {
            contador++;
        }
    }
    return contador;
}

console.log("Solucion 3: Contar vocales en una cadena");
console.log("Ejemplo 1: Ornitorrinco");
console.log("Resultado:", contarVocales("Ornitorrinco"));
console.log("Ejemplo 2: Hola, Mundo!");
console.log("Resultado:", contarVocales("Hola, Mundo!"));
console.log("Ejemplo 3: AEIOU y aeioú");
console.log("Resultado:", contarVocales("AEIOU y aeioú"));
console.log("\n----------------------------------------------------\n");

/*
Primero pasamos la cadena a minusculas para limitar las iteraciones a la mitad. Despues en un bucle que tenga el largo de la cadena en minuscula
comparamos la variante previamente creada que contiene las vocales, con el caracter actual de "cadenaMinuscula" con la funcion ".includes" y luego
de compararlas suma (o no) al contador
*/


/*
4. Encontrar el palíndromo
*/


function esPalindromo(cadena) {
    let cadenaAlfanum = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    let cadenaInvertida = cadenaAlfanum.split('').reverse().join('');
    return cadenaAlfanum === cadenaInvertida;
}

console.log("Solucion 4: Encontrar el palíndromo");
console.log("Ejemplo 1: neuquen");
console.log("Resultado:", esPalindromo("neuquen")); 
console.log("Ejemplo 2: Neuquen Quimey");
console.log("Resultado:", esPalindromo("Neuquen Quimey")); 
console.log("Ejemplo 3: Anita lava la tina!");
console.log("Resultado:", esPalindromo("Anita lava la tina!"));

console.log("\n----------------------------------------------------\n");

/*
Como en el ejercicio anterior lo mejor es pasar el string a minuscula y reemplazar todo lo que no sea alfanumerico por un espacio
Despues invertimos la cadena y la comparamos con la original para que devuelva un booleano

*/

/*
5. Crear un programa para convertir la edad de un perro a años humanos

*/


function edadCanina() {
    const edadHumanaStr = prompt("Ingresar edad del perro");
    const edadHumana = parseInt(edadHumanaStr);
    if (isNaN(edadHumana) || edadHumana < 0) {
        console.log("La edad en números... crei que era obvio...");
        return;
    }

    const edadCan = edadHumana * 7;
        console.log(`Ingresaste el numero ${edadHumana} `);

    console.log(`Tu perro tiene ${edadCan} años humanos.`);
}

console.log("Solucion 5: Convertir la edad de un perro a años humanos");
console.log("Ejemplo 1:");
edadCanina(); 
console.log("Ejemplo 2:");
edadCanina(); 
console.log("Ejemplo 3:");
edadCanina();
console.log("\n----------------------------------------------------\n");

/*
Lo principal es parsear lo ingresado a un int para poder usar operaciones aricmeticas. Despues agregar un condicional para evitar que ingresen
cualquier cosa que no sea un numero y por ultimo hacer la operacion normalmente y poner un... placeholder? ${} para que aparezca la resolucion en el
console.log 
*/

/*
6. Convertir la primera letra de cada palabra en mayúscula
*/

function capitalizarPalabras(cadena) {
    const palabras = cadena.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length === 0) {
            return '';
        }
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabrasCapitalizadas.join(' ');
}

console.log("Solucion 6: Convertir la primera letra de cada palabra en mayúscula");
console.log("Ejemplo 1: hola mundo desde javascript");
console.log("Resultado:", capitalizarPalabras("hola mundo desde javascript"));
console.log("Ejemplo 2: lorem ipsum");
console.log("Resultado:", capitalizarPalabras("lorem ipsum")); 
console.log("Ejemplo 3: No Se mE ocUrre nADA mas");
console.log("Resultado:", capitalizarPalabras("No Se mE ocUrre nADA mas"));
console.log("\n----------------------------------------------------\n");

/*
Primero separar las palabras y despues mapearlas para devolver un array donde se transforma la primera letra en mayuscula y las siguientes en minuscula.
Finalmente unir el array para que se vuelva nuevamente una cadena de strings
*/


