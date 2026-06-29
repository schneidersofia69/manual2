console.log("manual");
const consejos = [
    "Buscar zona y herramientas para hacer un refugio",
    "Buscar agua y potabilizarla",
    "Encender un fuego seguro",
    "Llevar herramientas utiles"
];

const botonConsejo =
    document.getElementById("btnConsejo");
const textConsejo =
    document.getElementById("textoConsejo");

function mostrarConsejo(){
    const numero = Math.floor(Math.random() * consejos.length);
    textoConsejo.textContent = consejos [numero];
}

botonConsejo.addEventListener("click", mostrarConsejo);