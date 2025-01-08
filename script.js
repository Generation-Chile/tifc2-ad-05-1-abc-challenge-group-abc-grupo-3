// Función para obtener un color aleatorio
function obtenerColorAleatorio() {
  const colores = ['green', 'blue', 'red'];
  const indiceAleatorio = Math.floor(Math.random() * colores.length);
  return colores[indiceAleatorio];
}

// Función que cambia el color de un elemento
function cambiarColor(evento) {
  const nuevoColor = obtenerColorAleatorio();
  evento.target.style.color = nuevoColor;
}

// Obtener todas las etiquetas h5
const etiquetasH5 = document.querySelectorAll('h5');

// Agregar el evento 'click' a cada etiqueta h5
etiquetasH5.forEach(etiqueta => {
  etiqueta.addEventListener('click', cambiarColor);
});
