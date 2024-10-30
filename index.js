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
  
  // Cargar todos los productos al inicio
  displayProducts(data);
  
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
  