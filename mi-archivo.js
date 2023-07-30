class Datos {
    constructor(nombre, fecha) {
        this.nombre = nombre ;
        this.fecha = fecha ;
    }
}

function datos(i) {
    let nombre = prompt('Ingrese su nombre ' + i);
    let fecha = prompt('Ingrese su fecha de nacimiento ' + i);

    let datos = new Datos(nombre, fecha);
    return datos;
}

for (let i = ''; i <= 1; i++) {
    let resultado = datos(i);
    alert(resultado.nombre  + ' naciste el ' + resultado.fecha);

}

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */








/* let contador = 0
let numerosecreto = prompt("Adivina el numero entre 1 y 10 para acceder a la informacion")

function numeroSecreto () {
    while (numerosecreto != 2) {
        contador++
        numerosecreto = prompt("Casi")
    }
    alert("Adivinaste, mi nombre es Guillermo, soy de Uruguay y tengo 28 años, gracias por jugar!")

    if (contador > 5) {
        alert ( "medio lento, fallaste mas de 5 veces")
    } else {
        alert ("sos crack, adivinaste en menos de 5 intentos")
    }
}
numeroSecreto() */
// Definimos una función para crear la lista de precios
/* function crearListaPrecios() {
    const articulos = ["Arroz", "Leche", "Manteca", "Fideos"];
    const precios = [10, 20, 15, 25];
    const listaPrecios = [];

    for (let i = 0; i < articulos.length; i++) {
        listaPrecios.push({ articulo: articulos[i], precio: precios[i] });
    }

    return listaPrecios;
}

// Llamamos a la función para obtener la lista de precios
const listaDePrecios = crearListaPrecios();

// Mostramos la lista de precios en la consola
console.log(listaDePrecios);
 */
/* 
const articulos = ['arroz', 'leche', 'pan']
for (let i = 0; i < articulos.length; i++) {articulos
    alert ("Lista de Articulos: " + i +'- '+ articulos[i] );
} */


