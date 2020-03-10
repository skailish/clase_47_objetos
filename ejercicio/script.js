// Volumen de caja
// Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo.El volumen se calcula multiplicando entre sí dichos valores.
// const size = { width: 2, length: 5, height: 1 }
// getBoxVolume(size) // returns 10

// const size = { width: 2, length: 5, height: 1 }

const getBoxVolume = (size) => {
    let volume = 1;
    for (let value of Object.values(size)) {

        volume *= value;
    }
    return volume
}

// Redondeo
// Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo(Math.floor), hacia arriba(Math.ceil) y dependiendo de su punto flotante(Math.round)
// round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }


const round = number => {

    const rounding = {
        floor: Math.floor(number),
        ceil: Math.ceil(number),
        round: Math.round(number),
    }

    return rounding
}

// Unión de objetos
// Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos.Es decir, debe contener las propiedades de ambos objetos.Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
// const info1 = { a: 1, b: 2, c: 3 }
// const info2 = { d: 4, b: 5 }
// merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}

const info1 = { a: 1, b: 2, c: 3 }
const info2 = { d: 4, b: 5 }
const merge = (info1, info2) => {

    const newObject = Object.assign({}, info1, info2);

    return newObject

} // returns {a: 1, b: 2, c: 3, d: 4}


// Diferencia de objetos
// Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos
// const info1 = { a: 1, b: 2, c: 3 }
// const info2 = { d: 4, b: 5 }
// differentiate(info1, info2) // returns {a: 1, c: 3, d: 4}


const differentiate = (info1, info2) => {

    const newObject = {};
    for (let prop1 in info1) {
        if (!(prop1 in info2)) {
            newObject[prop1] = info1[prop1]
        }
    }
    for (let prop2 in info2) {

        if (!(prop2 in info1)) {
            newObject[prop2] = info2[prop2]
        }
    }
    return newObject
}

// Eliminar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array
// const data = { a: 1, b: 2, c: 3 }
// const props = ["c"]
// removeProperties(data, props) // returns {a: 1, b: 2}



const removeProperties = (data, props) => {
    const newObject = {};
    for (let prop in data) {
        if (!(props.includes(prop))) {
            newObject[prop] = data[prop]
        }
    }
    return newObject
}

// Filtrar propiedades
// Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array
// const data = { a: 1, b: 2, c: 3 }
// const props = ["c", "b"]
// filterProperties(data, props) // returns {b: 2, c: 3}



const filterProperties = (data, props) => {
    const newObject = {};
    for (let prop in data) {
        if (props.includes(prop)) {
            newObject[prop] = data[prop]
        }
    }
    return newObject
}