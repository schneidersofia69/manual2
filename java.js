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

const elementos =
document.querySelectorAll ("#mochila input");
const listaMochila =
    document.getElementById("listaMochila");
const btnMochila = 
    document.getElementById("btnMochila");

function actualizarMochila(){
    listaMochila.innerHTML ="";
    elementos.forEach(function(item){
        if (item.checked){
            const li = document.createElement("li");
            li.textContent = "✅" + item.value;
            listaMochila.appendChild(li);
        }
    });
}

btnMochila.addEventListener("click", actualizarMochila);