// Función para mostrar el detalle del producto
function mostrarDetalleProducto(id) {
    const producto = data.find(prod => prod.id === id);
    const productDetail = document.querySelector('#product-detail'); // producto.html
    
    if (producto) {
        productDetail.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <p>${producto.detalle}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        `;
    } else {
        // Mostrar todos los productos si no se encuentra el específico
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

// Capturar el ID del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const prodId = parseInt(urlParams.get('prod'));

// Mostrar el detalle del producto
mostrarDetalleProducto(prodId);
