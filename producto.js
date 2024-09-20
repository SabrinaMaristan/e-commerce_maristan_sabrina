// 19.09

// Crear la clase Producto
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
const productos = [
    new Producto("Producto 1", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"),

    new Producto("Producto 2", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"),

    new Producto("Producto 3", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"),

    new Producto("Producto 4", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"),

    new Producto("Producto 5", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"),

    new Producto("Producto 6", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"),

    new Producto("Producto 7", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"),

    new Producto("Producto 8", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"),

    new Producto("Producto 9", "BMW Azul", 29000.0, 6, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg")
];


// Inicializar una variable para almacenar las etiquetas HTML que incluyen las propiedades del objeto
let etiquetas = "";

// Usar un bucle for para crear las tarjetas
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    etiquetas += `
        <div class="card">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <p>${producto.detalle}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        </div>
    `;
}

// Insertar el contenido en el main de producto.html
document.querySelector('main').innerHTML = etiquetas;
