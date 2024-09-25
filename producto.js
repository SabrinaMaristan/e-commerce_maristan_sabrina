// 19.09

// Definir una clase Producto con sus propiedades
class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

/* 17.09 -
Definir el objeto del producto
const producto = {
    titulo: "Producto 1",
    detalle: "BMW Azul",
    precio: 29000.0,
    stock: 6,
    imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg"
}; */

// Crear instancias de la clase Producto


// Crear una instancia del producto con valores predeterminados
const producto = new Producto(
    "Producto 1",  // Título
    "Este es el detalle del producto 1.",  // Descripción
    "$100",  // Precio
    20,  // Stock
    "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"  // Imagen
);

// Crear una plantilla HTML con las propiedades del producto
const etiquetas = `
<div class="card">
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
    <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <p class="card-text">${producto.detalle}</p>
        <p class="card-text">Precio: ${producto.precio}</p>
        <p class="card-text">Stock: ${producto.stock}</p>
    </div>
</div>
`;

// Insertar la plantilla generada dentro del main en producto.html
document.querySelector('main').innerHTML = etiquetas;
