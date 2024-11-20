// Función para mostrar todos los productos si no se encuentra uno específico
function mostrarProductos() {
    const productDetail = document.querySelector('#product-detail');
    
    productDetail.innerHTML = data.map(product => `
        <div class="product-card">
            <h3>${product.titulo}</h3>
            <img src="${product.imagen}" alt="${product.titulo}">
            <p>${product.detalle}</p>
            <p>Precio: $${product.precio}</p>
            <p>Stock: ${product.stock}</p>
            <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>    
        </div>
    `).join('');
}

// Función para mostrar el detalle del producto seleccionado en la página
function mostrarDetalleProducto(id) {
    const producto = data.find(prod => prod.id === id); // Busca el producto por su ID
    const productDetail = document.querySelector('#product-detail');

    if (producto) {
        // Muestra el detalle del producto si se encuentra
        productDetail.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <p>${producto.detalle}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
            
            ${localStorage.getItem("email") ?
                `<div class="input-group">
                    <button class="btn btn-outline-secondary" type="button" onclick="decreaseItem(${producto.stock})">-</button>
                    <input type="number" class="form-control" value="1" id="counter" min="1" max="${producto.stock}">
                    <button class="btn btn-outline-secondary" type="button" onclick="increaseItem(${producto.stock})">+</button>
                    <a href="#" class="btn btn-primary col-12" onclick="addItems(${id})">Agregar al carrito</a>
                </div>` :
                `<a href="login.html" class="btn btn-primary col-12">Iniciar Sesión para comprar</a>`
            }
        `;
    } else {
        mostrarProductos();
    }
}

// Obtiene el ID del producto de los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const prodId = parseInt(urlParams.get('prod'), 10);

if (!isNaN(prodId)) {
    mostrarDetalleProducto(prodId);
} else {
    mostrarProductos(); // Si no hay un ID en la URL, muestra todos los productos
}

// Funciones para el carrito
const counter = document.querySelector("#counter");

function increaseItem(stock) {
    if (counter.value < stock) {
        counter.value = Number(counter.value) + 1;
    }
}

function decreaseItem() {
    if (counter.value > 1) {
        counter.value = Number(counter.value) - 1;
    }
}

function addItems(id) {
    Swal.fire({
        text: "¿Estás seguro/a de que querés agregar el producto al carrito?", 
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "#06f",
        cancelButtonColor: "#DB5079",
    }).then(result => {
        if (result.isConfirmed) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const product = data.find(item => item.id === id);
            const existeIdCart = cart.some(item => item.product.id === id);

            if (existeIdCart) {
                cart = cart.map(item => {
                    if (item.product.id === id) {
                        return { ...item, quantity: item.quantity + Number(counter.value) };
                    } else {
                        return item;
                    }
                });
            } else {
                cart.push({ product, quantity: Number(counter.value) });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
            localStorage.setItem("quantity", quantity);

            const quantityTag = document.querySelector("#quantity");
            if (quantityTag) {
                quantityTag.innerText = quantity;
            }
            counter.value = "1";

            Toastify({
                text: "Producto agregado al carrito.",
                style: {
                    background: "#DB5079",
                }, 
            }).showToast();
        } else {
            Toastify({
                text: "No se agregó el producto al carrito.",
                style: {
                    background: "#333",
                },
            }).showToast();
        }
    });
}