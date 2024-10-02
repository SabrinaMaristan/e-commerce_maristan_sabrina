// Datos simulados de Mockaroo
const data = [
    // 1
    {
      id: 1,
      titulo: "Producto 1",
      detalle: "Descripción del producto 1.",
      precio: 199.99,
      stock: 10,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
    },
    // 2
    {
      id: 2,
      titulo: "Producto 2",
      detalle: "Descripción del producto 2.",
      precio: 299.99,
      stock: 5,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
    },
    // 3
    {
        id: 3,
        titulo: "Producto 3",
        detalle: "Descripción del producto 3.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
    },
    // 4
    {
        id: 4,
        titulo: "Producto 4",
        detalle: "Descripción del producto 4.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"
    },
    // 5
    {
        id: 5,
        titulo: "Producto 5",
        detalle: "Descripción del producto 5.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"
    },
    // 6
    {
        id: 6,
        titulo: "Producto 6",
        detalle: "Descripción del producto 6.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"
    },
    // 7
    {
        id: 7,
        titulo: "Producto 7",
        detalle: "Descripción del producto 7.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
    },
    // 8
    {
        id: 8,
        titulo: "Producto 8",
        detalle: "Descripción del producto 8.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
    },
    // 9
    {
        id: 9,
        titulo: "Producto 9",
        detalle: "Descripción del producto 9.",
        precio: 149.99,
        stock: 15,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg"
    }
  ];
  
  // Obtener el ID del producto de la URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('prod');
  
  // Filtrar el producto correspondiente
  const producto = data.find(item => item.id == Number(productId));
  
  // Verificar si el producto existe
  if (producto) {
    // Crear el HTML para mostrar los detalles del producto
    const productoHTML = `
      <div class="producto-detalle">
        <h1>${producto.titulo}</h1>
        <img src="${producto.imagen}" alt="${producto.titulo}" class="img-fluid">
        <p>${producto.detalle}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
      </div>
    `;
    
    // Insertar el HTML en la página
    document.querySelector('main').innerHTML = productoHTML;
  } else {
    // Si no se encuentra el producto, mostrar un mensaje
    document.querySelector('main').innerHTML = '<p>Producto no encontrado</p>';
  }
  