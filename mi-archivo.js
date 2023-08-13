class Usuario {
    constructor(nombre, apellido, localidad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.localidad = localidad;
        this.email = email;
        /* this.suscrito = true; */ //para q nos indique si quiere correos o no//
    }
}

const form = document.getElementById("registro");
const listaUsuarios = document.getElementById("listaUsuario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const localidad = document.getElementById("localidad").value;
    const email = document.getElementById("email").value;

    if (nombre && apellido && (localidad || email)) {
        const usuario = new Usuario(nombre, apellido, localidad, email);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        agregarUsuarioALista(usuario);
    }

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("email").value = "";
});

function agregarUsuarioALista(usuario) {
    const nuevoUsuarioItem = document.createElement("li");
    nuevoUsuarioItem.innerHTML = ` Datos de usuario: 
        ${usuario.nombre} ${usuario.apellido} | ${usuario.localidad} | ${usuario.email}
        <button class="eliminarBtn">Eliminar</button>`;
    
    nuevoUsuarioItem.querySelector(".eliminarBtn").addEventListener("click", () => {
        nuevoUsuarioItem.remove(); // para eliminar usuarios
    });

    listaUsuarios.appendChild(nuevoUsuarioItem);
}




/* let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let localidad = document.getElementById("localidad")
let email = document.getElementById("email")    */ 

/* class Usuario {
    constructor(nombre,apellido,localidad,email){
        this.nombre =nombre,
        this.apellido = apellido,
        this.localidad = localidad,
        this.email = email
    }
}
let form =  document.getElementById("registro");
const listaUsuarios = document.getElementById("listaUsuario");

form.addEventListener("submit", (e) => {
e.preventDefault()

let nombre = document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let localidad = document.getElementById("localidad").value
let email = document.getElementById("email").value

if (nombre && apellido && localidad || email) {
let usuario = new Usuario(nombre, apellido,localidad,email) 
function agregarUsuarioALista(usuario) {
    const nuevoUsuarioItem = document.createElement("li");
    nuevoUsuarioItem.innerHTML = `${usuario.nombre} ${usuario.apellido} - ${usuario.localidad} - ${usuario.email} - Suscrito: ${usuario.suscrito ? 'Sí' : 'No'}`;
}
localStorage.setItem("usuario", JSON.stringify(usuario) )  

agregarUsuarioALista(usuario);
}
function agregarUsuarioALista(usuario) {
    const nuevoUsuarioItem = document.createElement("li");
    nuevoUsuarioItem.innerHTML = `${usuario.nombre} ${usuario.apellido} - ${usuario.localidad} - ${usuario.email} - Suscrito: ${usuario.suscrito ? 'Sí' : 'No'}`;
}
const agregarUsuario = () =>{
    const usuario = input.value;
    usuarios.push(usuario);
    input.value="";
}
const mostrarUsuarios = () => {
    usuarios.forEach((usuario,index)=>{
        listaUsuarios.innerHTML +=`
        <li>
        <span>${usuario}</span>
        </li>
        `;
    });
    
        
        
    
}


document.getElementById("nombre").value = " "
document.getElementById("apellido").value = " "
document.getElementById("localidad").value = " "
document.getElementById("email").value = " "
}) */



















/* class Datos {
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
 */
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


