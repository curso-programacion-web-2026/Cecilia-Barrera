

function mostrarInformacion(id, boton) {

    const informacion = document.getElementById(id);

    if (informacion.style.display === "none" || informacion.style.display === "") {

        informacion.style.display = "block";
        boton.textContent = "Ver menos";

    } else {

        informacion.style.display = "none";
        boton.textContent = "Ver más";

    }

} 


const imagenes = [
    { src: "img/primero.png", titulo: "Primero", descripcion: "Registro de su primera presentación" },
    { src: "img/niceto.jpg", titulo: "Niceto Club", descripcion: "Primera presentación como cantante" },
    { src: "img/moron18.jpg", titulo: "Moron a los 18", descripcion: "Recital en el estadio de su ciudad natal" },
    { src: "img/velez.avif", titulo: "Estadio de Vélez", descripcion: "Recital en la cancha de Vélez" },
    { src: "img/tinydesk.jpg", titulo: "Tiny Desk", descripcion: "Recital en Tiny Desk" },
    { src: "img/milan.avif", titulo: "Unplugged Milán", descripcion: "Recital en Milán, Italia" }
];


let indiceActual = 0;


const imagen = document.getElementById("imagen-carrusel");
const titulo = document.getElementById("titulo-carrusel");
const descripcion = document.getElementById("descripcion-carrusel");
const botonAnterior = document.getElementById("prevBtn");
const botonSiguiente = document.getElementById("nextBtn");


function mostrarImagen() {
    imagen.src = imagenes[indiceActual].src;
    imagen.alt = imagenes[indiceActual].titulo;
    titulo.textContent = imagenes[indiceActual].titulo;
    descripcion.textContent = imagenes[indiceActual].descripcion;
}


botonSiguiente.addEventListener("click", function () {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
});

botonAnterior.addEventListener("click", function () {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
});
const botonVolverArriba = document.getElementById("botonVolverArriba");
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }
});
botonVolverArriba.addEventListener("click", function() {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth"
     });
});
const botonCambiar=document.getElementById("botonCambiar");
const textoDinamico=document.getElementById("texto-dinamico");
let contador = 0;
botonCambiar.addEventListener("click", function() {
    contador= (contador + 1 ) % 3;
    if (contador=== 0) {
        textoDinamico.textContent = "En los comienzos,se sostuvo que Milo J, el adolescente rebelde del oeste de Morón,era la nueva promesa del futuro de la musica.";
    } else if (contador === 1) {
        textoDinamico.textContent = "De hecho, lo que a tan corta edad logro  fue obtener su primera nominacion a los premios Grammys Latinos en el 2023.";
    } else if (contador === 2) {
        textoDinamico.textContent = "A su vez, fue el artista mas joven en salir como portada en la Rolling Stone.";
    }
    });
    const formulario=document.getElementById("formulario");
    const resultado= document.getElementById("resultado");
    formulario.addEventListener("submit",function (event) {
        event.preventDefault();
        const nombre=document.getElementById("nombre").value.trim();
        const apellido=document.getElementById("apellido").value.trim();
        const email=document.getElementById("email").value.trim();
        const pais=document.getElementById("pais").value.trim;
        const mensaje=document.getElementById("mensaje").value.trim;
        if (nombre===""||apellido===""||email===""||pais===""||mensaje==="") {
            resultado.textContent="Por favor, completá todos los campos.";

        }else{
            resultado.textContent="¡Mensaje enviado correctamente!";
            formulario.reset();
        }
    });
    const toggleBtn=document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click",function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains ("dark-mode")) {
            toggleBtn.textContent="☀️Cambiar a Modo Claro";

        } else {
            toggleBtn.textContent="🌙Cambiar a Modo Oscuro";
        }
    });
