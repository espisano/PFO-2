
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

/*
7. Generar los primeros N números de la sucesión de Fibonacci
*/


function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        const secuencia = [0, 1];
        for (let i = 2; i < n; i++) {
            const siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
            secuencia.push(siguienteNumero);
        }
        return secuencia;
    }
}

console.log("Solucion 7: Generar los primeros N números de la sucesión de Fibonacci");
console.log("Ejemplo 1: 5");
console.log("Resultado:", fibonacci(5));
console.log("Ejemplo 2: 0");
console.log("Resultado:", fibonacci(0));
console.log("Ejemplo 1: 10");
console.log("Resultado:", fibonacci(10));
console.log("\n----------------------------------------------------\n");

/*
Lo importante esta en la parte del ELSE, donde arrancamos por default con un array con 2 int (0 y 1) y va agregando el siguiente numero y 
pusheandolo a la secuencia hasta completar el bucle for let con la cantidad de numeros elegidos.
*/

/*
8. Lista de Productos
*/

console.log("Solucion 8: Lista de Productos");

const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
    { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

console.log("8.1 Usando forEach: Mostrar en consola cada producto con su nombre y precio");
productos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
});
console.log("\n");

console.log("8.2 Usando map: Crear un array con solo los nombres de los productos");
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);
console.log("\n");

console.log("8.3 Usando filter: Obtener productos electrónicos con stock mayor a 20");
const productosElectronicosStockAlto = productos.filter(producto =>
    producto.categoria === 'electrónica' && producto.stock > 20
);
console.log(productosElectronicosStockAlto);
console.log("\n");

console.log("8.4 Usando find: Encontrar el producto con id 3");
const productoId3 = productos.find(producto => producto.id === 3);
console.log(productoId3);
console.log("\n");

console.log("8.5 Usando reduce: Calcular el valor total del inventario (precio * stock)");
const valorTotalInventario = productos.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.stock);
}, 0);
console.log(`Valor Total del Inventario: $${valorTotalInventario}`);
console.log("\n----------------------------------------------------\n");



/*
9. Estudiantes y Calificaciones
*/

console.log("Solucion 9: Estudiantes y Calificaciones");

const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

console.log("9.1 Usando forEach: Mostrar nombre y edad de cada estudiante");
estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
});
console.log("\n");

console.log("9.2 Usando map: Crear array de objetos con nombre y promedio de calificaciones");
const estudiantesConPromedio = estudiantes.map(estudiante => {
    const sumaCalificaciones = estudiante.calificaciones.reduce((acc, cal) => acc + cal, 0);
    const promedio = sumaCalificaciones / estudiante.calificaciones.length;
    return { nombre: estudiante.nombre, promedio: promedio.toFixed(2) };
});
console.log(estudiantesConPromedio);
console.log("\n");

console.log("9.3 Usando filter: Obtener estudiantes con promedio mayor a 7.5");
const estudiantesAltoPromedio = estudiantes.filter(estudiante => {
    const sumaCalificaciones = estudiante.calificaciones.reduce((acc, cal) => acc + cal, 0);
    const promedio = sumaCalificaciones / estudiante.calificaciones.length;
    return promedio > 7.5;
});
console.log(estudiantesAltoPromedio);
console.log("\n");

console.log("9.4 Usando find: Encontrar estudiante llamado 'María'");
const maria = estudiantes.find(estudiante => estudiante.nombre === 'María');
console.log(maria);
console.log("\n");

console.log("9.5 Usando reduce: Calcular la edad promedio de los estudiantes");
const sumaEdades = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0);
const edadPromedio = sumaEdades / estudiantes.length;
console.log(`Edad Promedio de los Estudiantes: ${edadPromedio.toFixed(2)}`);
console.log("\n----------------------------------------------------\n");



/*
10. Películas
*/

console.log("Solucion 10: Películas");

const peliculas = [
    { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
    { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
    { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
    { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
    { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

console.log("10.1 Usando forEach: Mostrar título y año de cada película");
peliculas.forEach(pelicula => {
    console.log(`Título: ${pelicula.titulo}, Año: ${pelicula.año}`);
});
console.log("\n");

console.log("10.2 Usando map: Crear array de títulos en mayúsculas");
const titulosMayusculas = peliculas.map(pelicula => pelicula.titulo.toUpperCase());
console.log(titulosMayusculas);
console.log("\n");

console.log("10.3 Usando filter: Obtener películas de drama con rating mayor a 8.5");
const peliculasDramaAltoRating = peliculas.filter(pelicula =>
    pelicula.genero === 'drama' && pelicula.rating > 8.5
);
console.log(peliculasDramaAltoRating);
console.log("\n");

console.log("10.4 Usando find: Encontrar película estrenada en 2014");
const pelicula2014 = peliculas.find(pelicula => pelicula.año === 2014);
console.log(pelicula2014);
console.log("\n");

console.log("10.5 Usando reduce: Calcular la duración total de todas las películas");
const duracionTotal = peliculas.reduce((acumulador, pelicula) => acumulador + pelicula.duracion, 0);
console.log(`Duración Total de Todas las Películas: ${duracionTotal} minutos`);
console.log("\n----------------------------------------------------\n");

/*
Los Ultimos 3 ejercicios no tienen mucho que explicar ya que piden claramente lo que necesitan. Creo que podria aclararse el uso del toFixed para limitar
a 2 decimales los promedios.
*/
