// objects
// par key-value, llave-valor, propiedad-valor
// Diccionarios

const personaje = {
    "Nombre Completo": {
        nombre: 'Luke',
        apellido: 'Skywalker',
    },
    edad: 23,
    profesion: 'Jedi',
    poderes: true,
    amigues: ["Han Solo", "Chewaka"],
    origen: {
        galaxia: "xxxxxx",
        planeta: "jjjjjj",
        pueblo: "llllll",
    }

}

// NOTAS
// Un array también es un objeto.
// Las propiedad de los objetos son los "índices"
// Si alguna propiedad es un string con espacio, la notación con punto no funciona para llamarla, debo usar corchete
// personaje["Nombre Completo"]

// se pueden utilizar variables para llamar a las propiedades
const objetoAnidado = "Nombre Completo"
personaje[objetoAnidado] // esti devuelve el contenido del objeto "Nombre Completo"

personaje.objetoAnidado// pero esto no es válido, porque la notación con punto no toma "objetoAnidado" como variable

/// Chequear existencia de propiedad en objeto
"Nombre Completo" in personaje // booleano. El opeardor "in" está relacionado con las PROPIEDADES

// Recorrer un objeto
for (const prop in personaje) {

    console.log(personaje); // muestra en consola cada propiedad
    console.log(personaje[prop]) // muestra en consola el contenido de cada propiedad
}

// acceder a los valores de cada propiedad
Object.values(personaje)

for (let value of Object.values(personaje)) {
    console.log(value)
} /// es muy raro trabajar solo con los valores de cada propiedad, porque así por si solos podrían no tener sentido o podriamos no entender a qué pertenecen

Object.keys(personaje) // nos devuelve un array con todas las KEYs o propiedades

//////////////////////////////////////////////////////
// otro ejemplo

const persona = { nombre: "Luke" }
// const otraPersona = persona;
// otraPersona.nombre = "Leia"; // esto modifica el valor que contiene persona también

// duplicar un objeto sin afectar al original
const otraPersona = Object.assign({}, persona) // le asigna los valores del objeto de origen, al que estoy creando
otraPersona.nombre = "Leia" // NO MODIFICA AL ORIGINAL

