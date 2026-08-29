```javascript
// =====================================
// SISTEMA DE DIAPOSITIVAS
// =====================================

const diapositivas = document.querySelectorAll(".diapositiva");

let actual = 0;


// Mostrar diapositiva
function mostrarDiapositiva(numero) {

    diapositivas.forEach((diapositiva) => {

        diapositiva.classList.remove("activa");

    });


    diapositivas[numero].classList.add("activa");


    document.getElementById("contador").textContent =
        `${numero + 1} / ${diapositivas.length}`;

}


// =====================================
// SIGUIENTE
// =====================================

function siguiente() {

    if (actual < diapositivas.length - 1) {

        actual++;

        mostrarDiapositiva(actual);

    }

}


// =====================================
// ANTERIOR
// =====================================

function anterior() {

    if (actual > 0) {

        actual--;

        mostrarDiapositiva(actual);

    }

}


// =====================================
// VOLVER AL PRINCIPIO
// =====================================

function volverInicio() {

    actual = 0;

    mostrarDiapositiva(actual);

}


// =====================================
// TECLADO
// =====================================

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {

        siguiente();

    }


    if (event.key === "ArrowLeft") {

        anterior();

    }

});


// =====================================
// CORAZONES FLOTANDO
// =====================================

function crearCorazon() {

    const contenedor =
        document.querySelector(".corazones");


    const corazon =
        document.createElement("div");


    corazon.classList.add("corazon");


    const corazones = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];


    corazon.innerHTML =
        corazones[
            Math.floor(
                Math.random() * corazones.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "%";


    corazon.style.fontSize =
        (15 + Math.random() * 25) + "px";


    corazon.style.animationDuration =
        (5 + Math.random() * 7) + "s";


    contenedor.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 12000);

}


// Crear corazones constantemente

setInterval(crearCorazon, 700);


// =====================================
// INICIAR
// =====================================

mostrarDiapositiva(0);
```
