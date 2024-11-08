//REGISTRO 1
let nuevoUsuario = {
    usuario: 'Valentino Bellitto',
    edad: 18,
    direccion: '40 nro 119 entre 117 y 118',
    fechaDeNacimiento: '11/10/2005',
    contrasena: ''
};

console.log(nuevoUsuario);

//Variable miAuto
let miAuto = {}
miAuto.marca = 'Peugeot';
miAuto.año = 1983;
miAuto.nuevo = true;

let propertyKey = 'modelo';
miAuto[propertyKey] = '205';

let anotherPropertyKey = 'precio';
miAuto[anotherPropertyKey] = 10.000; 

let nextProperty = 'color';
miAuto[nextProperty] = 'gris';

for (let key in miAuto) {
console.log(key + ': ' + miAuto[key]);
}

console.log(miAuto);

//AUMENTAR LA NOTA
let estudiantes = [
    { Estudiante: 'Julio', nota: 6 },
    { Estudiante: 'Mariano', nota: 8 },
    { Estudiante: 'Alejo', nota: 10 },
    { Estudiante: 'Gustavo', nota: 2 }
];

for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > 5) {
    estudiantes[i].nota += 2;
    if (estudiantes[i].nota > 10) {
        estudiantes[i].nota = 10;
    }}}

console.log(estudiantes);

//BASE DE DATOS DE PELICULAS
let peliculas = [
    { titulo: 'El Joker', rating: 9, loHasVisto: true },
    { titulo: 'Titanic', rating: 10, loHasVisto: true },
    { titulo: 'Saw', rating: 6, loHasVisto: true },
    { titulo: 'El aro', rating: 8, loHasVisto: true }
];

for (let i = 0; i < peliculas.length; i++) {
    let pelicula = peliculas[i];
    let mensaje = '';

    if (pelicula.loHasVisto) {
    mensaje = `Viste "${pelicula.titulo}" - ${pelicula.rating} estrellas`;
    } else {
    mensaje = `No viste "${pelicula.titulo}" - ${pelicula.rating} estrellas`;
    }

    console.log(mensaje);}

//NUMEROS DUPLICADOS 
let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

for (let i = 0; i < numeros.length; i++) {
let numero = numeros[i];
    numeros_duplicados[numero] = numero * 2;
}
console.log(numeros_duplicados);

//DESAFIO + 27
let personas = [
    { nombre: 'Miguel', edad: 22 },
    { nombre: 'Juan', edad: 19 },
    { nombre: 'Carlos', edad: 42 }
];
let personasConMasDe27 = personas.filter(persona => persona.edad > 27);
console.log(personasConMasDe27);

//CAMINO AL OSCAR
//Paso 1

let actoresVocales = [];
let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher'];

for (let actor of actoresPrincipales) {
    let [nombre, apellido] = actor.split(' ');
    if ('AEIOU'.includes(nombre.charAt(0).toUpperCase()) || 'AEIOU'.includes(apellido.charAt(0).toUpperCase())) {
        actoresVocales.push(actor);
    }
}

// Paso 2
let pelicula = [];
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Joker": "Joaquin Fenix",
    "Sadako": "Rie Ino",
    "Amanda Young": "Shawnee Smith",
    "Michael Myers": "Nick Castle",
    "El Padrino": "Al Pacino"
};

actoresPrincipales = []; 

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if (!actoresPrincipales.includes(actor)) {
        actoresPrincipales.push(actor);
    }
}

// Paso 3
for (let pelicula in actoresPrincipalesPorPelicula) {
    peliculas.push(pelicula);
}

// Paso 4
let peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    peliculaPorActor[actor] = pelicula;
}

// Paso 5
peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if (!peliculaPorActor[actor]) {
        peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula);
}

console.log('Actores vocales:', actoresVocales);
console.log('Actores principales:', actoresPrincipales);
console.log('Peliculas:', peliculas);
console.log('Pelicula por actor:', peliculaPorActor);

//Software Factory
let TelefonosEComerce = [
    {nombre: "Iphone8", precio: 6000, articulos: 7},
    {nombre: "Iphone10", precio: 4000, articulos: 6},
    {nombre: "Iphone13", precio: 1500, articulos: 12},
    {nombre: "Iphone14", precio: 12000, articulos: 10},
    {nombre: "Iphone15", precio: 3000, articulos: 15}
];

function calcularValoresTotales(productos) {
    // Crear un nuevo arreglo para almacenar los resultados
    let valoresTotales = [];

    // Iterar sobre el arreglo de productos
    for (let producto of productos) {
        // Calcular el valor total de cada artículo
        let valorTotal = producto.precio * producto.articulos;
        // Agregar el resultado al nuevo arreglo
        valoresTotales.push({nombre: producto.nombre, valorTotal: valorTotal});
    }

    return valoresTotales;
}

// Llamar a la función con el arreglo TelefonosEComerce
let resultado = calcularValoresTotales(TelefonosEComerce);

// Imprimir el resultado
console.log(resultado);