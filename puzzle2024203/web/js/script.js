let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");
let timeDisplay = document.getElementById("time");

let piezas = [
    "Image/split-1.jpeg", "Image/split-2.jpeg", "Image/split-3.jpeg", "Image/split-4.jpeg",
    "Image/split-5.jpeg", "Image/split-6.jpeg", "Image/split-7.jpeg", "Image/split-8.jpeg",
    "Image/split-9.jpeg", "Image/split-10.jpeg", "Image/split-11.jpeg", "Image/split-12.jpeg",
    "Image/split-13.jpeg", "Image/split-14.jpeg", "Image/split-15.jpeg", "" // Espacio vacío
];

let estado = [];
let timer;
let timeLeft = 300; // 5 minutos en segundos

// Funcion para mezclar piezas
function mezclar(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Dibujar el puzzle
function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");

        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            celda.style.backgroundImage = `url(${valor})`;
            celda.addEventListener("click", () => mover(i));
        }
        puzzleContainer.appendChild(celda);
    });
}

// Intentar mover pieza
function mover(indice) {
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);

    // Verificar si es adyacente
    if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
        (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}

// Verificar si gano
function verificar(){
    if(JSON.stringify(estado) === JSON.stringify(piezas)){
        mensaje.innerText = "🎉 ¡Felicidades! Completaste el rompecabezas. 🎉";
        clearInterval(timer); 
        alert("🎉 ¡Felicidades! Has completado el rompecabezas 🎉");
    }
}

// Iniciar temporizador
function iniciarTemporizador() {
    timeLeft = 300; 
    timeDisplay.textContent = "05:00";
    clearInterval(timer); 
    timer = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timeDisplay.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
        if (timeLeft <= 0) {
            clearInterval(timer);
            mensaje.innerText = "⏰ ¡Tiempo agotado! Inténtalo de nuevo. 😥";
            alert("⏰ ¡Se acabó el tiempo! Intenta otra vez 😥");
        }
    }, 1000);
}

    
// Reiniciar juego
function reiniciar() {
    clearInterval(timer);
    estado = mezclar(piezas);
    mensaje.innerText = "";
    dibujar();
    iniciarTemporizador();
}

// Iniciar al cargar
reiniciar();