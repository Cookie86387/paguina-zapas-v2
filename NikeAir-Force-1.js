// Función para mostrar el estado de stock
function showStockStatus(status) {
    // Obtener el elemento de estado de stock
    const stockStatus = document.querySelector('.stock-status');
    // Actualizar el texto del estado de stock
    stockStatus.textContent = status;

    // Obtener el círculo
    const stockCircle = document.querySelector('.circle');

    // Cambiar el color del círculo y del texto basado en el estado
    if (status === 'En Stock') {
        stockStatus.style.color = 'green'; // Cambiar el color del texto a verde
        stockCircle.style.backgroundColor = 'green'; // Cambiar el color del círculo a verde
    } else {
        stockStatus.style.color = 'red'; // Cambiar el color del texto a rojo
        stockCircle.style.backgroundColor = 'red'; // Cambiar el color del círculo a rojo
    }
}

// Obtener todos los elementos de tamaño
const sizes = document.querySelectorAll('.size');

// Iterar sobre cada elemento de tamaño
sizes.forEach(size => {
    // Agregar un event listener para el evento click a cada tamaño
    size.addEventListener('click', () => {
        // Verificar si el tamaño seleccionado está disponible o no
        if (size.classList.contains('available')) {
            // Si está disponible, mostrar el texto "Con stock"
            showStockStatus('En Stock');
        } else {
            // Si no está disponible, mostrar el texto "Sin stock"
            showStockStatus('Sin Stock');
        }

        // Remover la clase 'selected' de todos los tamaños
        sizes.forEach(s => s.classList.remove('selected'));
        // Agregar la clase 'selected' solo al tamaño clickeado
        size.classList.add('selected');
    });
});

// Obtén todas las imágenes laterales
const sideImages = document.querySelectorAll('.images img');

// Obtén la imagen principal
const mainImage = document.querySelector('.main-image img');

// Define una función para manejar el clic en las imágenes laterales
function handleSideImageClick(event) {
    // Obtiene la ruta de la imagen clickeada
    const newSrc = event.target.getAttribute('src');

    // Cambia la imagen principal por la imagen clickeada
    mainImage.setAttribute('src', newSrc);
}

// Agrega un event listener a cada imagen lateral para manejar el clic
sideImages.forEach(image => image.addEventListener('click', handleSideImageClick));
