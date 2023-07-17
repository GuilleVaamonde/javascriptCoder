let contador = 0
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
numeroSecreto()