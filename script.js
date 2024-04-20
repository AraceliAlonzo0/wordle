console.log("hola mundo");

let intentos = 6;

let lista = ["RATON", "CANAN", "MONTA", "MANTA", "MENTA", "MONTO"];

let posicion = Math.floor(Math.random() * lista.length);

let palabra = lista[posicion];

console.log(palabra);

const INPUT = document.getElementById("guess-input");
const BOTON = document.getElementById("guess-button");

BOTON.addEventListener("click", intentar);

function intentar() {
    const intento = leerIntento();
    const GRID = document.getElementById("grid");


    const ROW = document.createElement("div");
    ROW.className = "row"; // Asignar clase 'row' para estilo CSS

    console.log('div', ROW);

    intentos = intentos - 1;
    console.log("Te quedan", intentos, "intentos");

    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter"; // Asignar clase 'letter' para estilo CSS
        SPAN.textContent = intento[i]; // Mostrar la letra intentada

        if (intento[i] === palabra[i]) {
            console.log(intento[i], "verde");
            SPAN.style.backgroundColor = "green";
        } else if (palabra.includes(intento[i])) {
            console.log(intento[i], "amarillo");
            SPAN.style.backgroundColor = "yellow";
        } else {
            console.log(intento[i], "gris");
            SPAN.style.backgroundColor = "gray";
        }

        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);

    if (intento === palabra) {
        terminar("<h1>¡GANASTE! 😀</h1>");
    }

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE! 😖</h1>");
    }
}

function leerIntento() {
    return INPUT.value.toUpperCase();
}

function terminar(mensaje) {
    const estado = document.getElementById("guesses");
    INPUT.disabled = true;
    BOTON.disabled = true;
    estado.innerHTML = mensaje;
    console.log(estado, mensaje);
}
