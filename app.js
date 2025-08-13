// 
let nombres = []; // Lista de nombres vacía

// Función para agregar un nombre al array
function agregarAmigo() {
    let input = document.querySelector("#amigo"); // Seleccionamos el input por su ID
    let nombre = input.value.trim(); // Tomamos el texto y quitamos espacios

    if (nombre) {
        nombres.push(nombre); // Guardamos el texto en el array
        input.value = ""; // Limpiamos el campo
        mostrarNombres(); // Actualizamos la lista
    } else {
        alert("No ingresaste ningún nombre.");
    }
}

// Función para mostrar la lista de nombres en pantalla
function mostrarNombres() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista

    for (let i = 0; i < nombres.length; i++) {
        let item = document.createElement("li");
        item.textContent = nombres[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[indiceAleatorio];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
}























































































