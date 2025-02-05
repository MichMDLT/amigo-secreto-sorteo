//Inicializar variables:
let amigos = [];

//Funciones:
//Fn agrega amigos::
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); //we take value && eliminate extra spaces

    //Validations:
    if (nombre === "") {
        alert("Por favor, inserta un nombre.");
        return;
    }
    amigos.push(nombre); 
    input.value = ""; // clean boxtext
    mostrarAmigos(); // Update list
}


//Fn para mostrar amigos:
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //clean before update

    amigos.forEach(function (amigo) {
        let item = document.createElement("li"); 
        item.textContent = amigo; 
        lista.appendChild(item); // add to list
    });

}

//Fn para sorteo:
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Lista vacía. Agrega nombres antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let ganador = amigos[indiceAleatorio]; // Obtenemos el nombre de la lista

    // Results:
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;
}
