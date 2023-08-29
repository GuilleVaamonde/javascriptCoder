/* CLASE8 */



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
        
        Swal.fire({ /* MODAL PARA USUARIO ELIMINADO */
        icon: "error",
        title: "Estas seguro/a?",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",})
        .then((result) => {
            if(result.isConfirmed){
                nuevoUsuarioItem.remove();  // para eliminar usuarios
            }
        })
    });
    Swal.fire({ /* MODAL PARA USUARIO AGREGADO */
        icon: "success",
        title: "Usuario creado",})
    listaUsuarios.appendChild(nuevoUsuarioItem);

}

const productosData = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 120
        }
        },
        {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
        "rate": 4.1,
        "count": 259
        }
        },
        {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
        "rate": 4.7,
        "count": 500
        }
        },
        {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
        "rate": 2.1,
        "count": 430
        }
        },
];
const productosDiv = document.getElementById("productos");

productosData.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    productoDiv.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>${producto.description}</p>
        <p>Price: $${producto.price}</p>
        <p>Category: ${producto.category}</p>
        <p>Rating: ${producto.rating.rate} (${producto.rating.count} reviews)</p>
    `;

    productosDiv.appendChild(productoDiv);
});


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


