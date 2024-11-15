// Definición de las categorías del menú de navegación
let categorias = [
    {
        nombre: "Inicio",
        href: "./index.html"
    },
    {
        nombre: "Productos",
        href: "./producto.html"
    }
];

// Array para almacenar los elementos de navegación generados dinámicamente
let menuItems = [];

// Generación de los elementos de navegación en base a las categorías
for (let item of categorias) {
    menuItems.push(`
        <li class="nav-item">
            <a class="nav-link" href="${item.href}">${item.nombre}</a>
        </li>
    `);
}

// Estructura del menú de navegación
let menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">           Tienda          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${menuItems.join('')}
            </ul>
            <!-- Opciones de usuario en función del estado de sesión -->
            <ul class="navbar-nav session"> 
                ${localStorage.getItem("email") 
                    ? `<span>${localStorage.getItem("email")}</span> 
                        <span> | </span>
                        <li>  <a href="cart.html"> <img height="25" src="cart_img.png" alt="Carrito"> </a> 
                        <b id="quantity">${localStorage.getItem("quantity")}</b> </li>
                        <span> | </span> 
                        <span onclick="logout()">       Cerrar sesión   </span>` 
                    : "<a href='./login.html'><span>    Iniciar sesión  </span> </a>"
                }
            </ul>
        </div>
    </div>
</nav>
`;

// Inserta el menú en el elemento <header> del HTML
document.querySelector('.header').innerHTML = menu;

// Función para cerrar sesión
function logout() {
    localStorage.clear();  // Limpia el almacenamiento local
    location.href = "./index.html";  // Redirecciona a la página principal
}
