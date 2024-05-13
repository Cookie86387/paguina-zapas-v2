// Función para agregar un producto al carrito
let carrito = [];
function agregarAlCarrito(nombre, precio) {
  let encontrado = false;
  carrito.forEach(producto => {
    if (producto.nombre === nombre) {
      producto.cantidad++;
      encontrado = true;
    }
  });

  if (!encontrado) {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  mostrarCarrito();
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - Precio: $${producto.precio} (${producto.cantidad})`;
    listaCarrito.appendChild(li);

    const botonQuitar = document.createElement('button');
    botonQuitar.textContent = 'Quitar';
    botonQuitar.className = 'boton-quitar'; // Añadir clase para estilos CSS
    botonQuitar.addEventListener('click', () => quitarDelCarrito(index));
    li.appendChild(botonQuitar);

    total += producto.precio * producto.cantidad;
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: $${total}`;

  const carritoElement = document.getElementById('carrito');
  if (carrito.length > 0) {
    carritoElement.classList.add('carrito-lleno');
  } else {
    carritoElement.classList.remove('carrito-lleno');
  }
}

// Función para quitar un producto del carrito
function quitarDelCarrito(index) {
  if (carrito[index].cantidad === 1) {
    carrito.splice(index, 1); // Si hay solo una unidad, elimina el producto del carrito
  } else {
    carrito[index].cantidad--; // Si hay más de una unidad, decrementa la cantidad
  }
  mostrarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

// Agregar un listener para cada imagen adicional
const imagenesAdicionales = document.querySelectorAll('.imagen-adicional img');
imagenesAdicionales.forEach(imagen => {
  imagen.addEventListener('click', function() {
    // Obtener la imagen clickeada
    const imagenClickeada = this.src;
    // Obtener la imagen principal
    const imagenPrincipal = this.closest('.producto').querySelector('.producto-imagen');
    // Cambiar la imagen principal por la imagen clickeada
    imagenPrincipal.src = imagenClickeada;
  });
});

// Asignar funciones al hacer clic en el botón "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.boton-verde');
botonesAgregar.forEach(boton => {
  boton.addEventListener('click', function() {
    const nombreProducto = this.parentElement.querySelector('.descripcion p:first-child').textContent;
    const precioProducto = parseInt(this.parentElement.querySelector('.descripcion p:nth-child(2)').textContent.replace('Precio: $', ''));
    agregarAlCarrito(nombreProducto, precioProducto);
  });
});

// Asignar función al hacer clic en el botón "Vaciar Carrito"
const botonVaciar = document.querySelector('.boton-rojo');
botonVaciar.addEventListener('click', vaciarCarrito);
