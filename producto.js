// Función para mostrar el detalle del producto seleccionado en la página
function mostrarDetalleProducto(id) {
    const producto = data.find(prod => prod.id === id);  // Busca el producto por su ID
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
        // Si no se encuentra el producto, muestra una lista de productos
        productDetail.innerHTML = data.map(product => `
            <div class="product-card">
                <h3>${product.titulo}</h3>
                <img src="${product.imagen}" alt="${product.titulo}">
                <p>${product.detalle}</p>
                <p>Precio: $${product.precio.toFixed(2)}</p>
                <p>Stock: ${product.stock}</p>
                <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>    
            </div>
        `).join('');
    }
}

// Obtiene el ID del producto de los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const prodId = parseInt(urlParams.get('prod'), 10);

if (!isNaN(prodId)) {
    mostrarDetalleProducto(prodId);
}

// Función para incrementar el contador hasta el máximo del stock
function increaseItem(stock) {
    const counter = document.querySelector("#counter");
    if (counter && Number(counter.value) < stock) {
        counter.value = Number(counter.value) + 1;
    }
}

// Función para decrementar el contador con un mínimo de 1
function decreaseItem() {
    const counter = document.querySelector("#counter");
    if (counter && Number(counter.value) > 1) {
        counter.value = Number(counter.value) - 1;
    }
}

// Función para agregar productos al carrito, actualizar cantidad y decrementar stock
function addItems(idProduct) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];  // Obtiene el carrito de localStorage o crea uno nuevo
    const counter = document.querySelector("#counter");
    const quantityToAdd = Math.max(1, Number(counter.value));  // Asegura una cantidad mínima de 1

    const producto = data.find(prod => prod.id === idProduct);  // Busca el producto en los datos

    if (!producto || producto.stock < quantityToAdd) {
        alert("No hay suficiente stock disponible.");
        return;
    }

    // Actualiza el stock en el array de productos `data`
    producto.stock -= quantityToAdd;

    const existingProductIndex = cart.findIndex(item => item.id === idProduct);  // Busca si el producto ya está en el carrito

    if (existingProductIndex >= 0) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        const newQuantity = Math.min(cart[existingProductIndex].quantity + quantityToAdd, producto.stock + quantityToAdd);
        cart[existingProductIndex].quantity = newQuantity;
    } else {
        // Si no está en el carrito, agrega el producto completo con la cantidad
        cart.push({ ...producto, quantity: quantityToAdd });
    }

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualiza el contador de cantidad total de productos en el carrito
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem("quantity", totalQuantity);

    // Muestra la cantidad total en el icono del carrito
    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = totalQuantity;
    }

    // Actualiza el stock visualmente en la página
    mostrarDetalleProducto(idProduct);
}
