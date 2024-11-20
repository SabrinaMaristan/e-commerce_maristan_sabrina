// Función para mostrar los productos en la sección
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-4">
                <div class="card">
                    <img src="${product.imagen}" class="card-img-top" alt="${product.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${product.titulo}</h5>
                        <p class="card-text">${product.detalle}</p>
                        <p>Precio: $${product.precio.toFixed(2)}</p>
                        <p>Stock: ${product.stock}</p>
                        <a href="./producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        `;
    });
  }
  
  
  // Capturar el input y el botón de búsqueda
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const clearButton = document.getElementById('clear-button');
  
  // Evento para buscar productos
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(product => product.titulo.toLowerCase().includes(searchTerm)); // Cambiar == por .includes
    
    // Comprobar si hay productos filtrados, de lo contrario, mostrar todos los productos
    if (filteredData.length > 0) {
        displayProducts(filteredData);
    } else {
        alert("No se encontraron productos.");
        displayProducts(data); // Mostrar todos los productos si no se encuentra coincidencia
    }
  });
  
  // Evento para limpiar el buscador
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    displayProducts(data); // Volver a mostrar todos los productos
  });
  
  // Función para filtrar productos por categoría
  const filterByCategory = (categoria) => {
      const filteredData = categoria === "todos" ? data : data.filter(product => product.categoria === categoria);
      displayProducts(filteredData); // Usar displayProducts en lugar de renderCards
  };
  
  // Eventos para los botones de categoría
  const categoryButtons = document.querySelectorAll(".category-btn"); 
  categoryButtons.forEach(button => {
      button.addEventListener("click", () => filterByCategory(button.dataset.category)); 
  });
  
  // Cargar todos los productos al inicio: displayProducts(data);
  // 12-11
  //  Cargar todos los productos después de que pasen 3 segundos: https://github.com/julioavantt/teacher_js_promises

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ok")
    }, 3000) // 3 segundos
  })

  promise.then(() => displayProducts(data));
  

  document.getElementById('checkoutButton').addEventListener('click', async () => {
    const apiUrl = 'https://your-mockapi-endpoint.com/orders'; // Sustituye con tu endpoint real
    const email = 'user@example.com'; // Sustituir con el email del usuario autenticado
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []; // Asumiendo que el carrito está en localStorage

    if (cartItems.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El carrito está vacío.',
        });
        return;
    }

    const orderData = {
        user: email,
        items: cartItems,
        createdAt: new Date().toISOString(),
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            throw new Error('Error al crear la orden');
        }

        const order = await response.json();

        // SweetAlert con datos del usuario y número de orden
        Swal.fire({
            icon: 'success',
            title: 'Orden creada con éxito',
            html: `
                <p>Email: ${email}</p>
                <p>Número de orden: ${order.id}</p>
            `,
        });

        // Vaciar el carrito
        localStorage.removeItem('cart');
        // Puedes actualizar la vista del carrito aquí, si es necesario
    } catch (error) {
        // SweetAlert para manejar errores
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo completar el checkout. Inténtalo de nuevo más tarde.',
        });
        console.error(error);
    }
});
