document.addEventListener("DOMContentLoaded", function() {
    // Verificamos si existen submenús en la página
    var submenus = document.querySelectorAll(".submenu");
    if (submenus.length === 0) {
        // Seleccionamos el contenedor de los productos
        var productosContainer = document.getElementById("mas-vendidos");

        // Seleccionamos todos los productos
        var productos = productosContainer.querySelectorAll(".producto");

        // Obtenemos el ancho total del contenedor de productos
        var containerWidth = productosContainer.offsetWidth;

        // Obtenemos el ancho total de todos los productos
        var totalWidth = 0;
        productos.forEach(function(producto) {
            totalWidth += producto.offsetWidth;
        });

        // Calculamos la cantidad de productos clonados que queremos agregar
        var cantidadClones = 100; // Aquí puedes ajustar la cantidad de clones que deseas agregar

        // Clonamos los productos y los agregamos al final del contenedor
        for (var i = 0; i < cantidadClones; i++) {
            productos.forEach(function(producto) {
                var clone = producto.cloneNode(true);
                productosContainer.appendChild(clone);
            });
        }

        // Función para mover los productos al lado izquierdo de manera continua
        function moveProducts() {
            var scrollLeft = productosContainer.scrollLeft;
            if (scrollLeft >= totalWidth) {
                // No necesitamos restablecer la posición del desplazamiento
            }
        }

        // Agregamos el evento de scroll para detectar cuando los productos salen completamente de la pantalla
        productosContainer.addEventListener("scroll", moveProducts);
    }
});
