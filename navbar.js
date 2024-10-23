// Array con las categorías de la tienda, cada una con un nombre y un enlace (href)
let categorias = [
    {
        nombre: "Inicio",
        href: "./index.html"
    },
    {
        nombre: "Productos",
        href: "./producto.html"
    },
    {
        nombre: "Inicio Sesión",
        href: "./login.html"
    }
];

// Array para almacenar el HTML del menú generado
let menuItems = [];

// Recorrer el array de categorías y generar el HTML para cada una
for (let item of categorias) {
    menuItems.push(`
        <li class="nav-item">
            <a class="nav-link" href="${item.href}">${item.nombre}</a>
        </li>
    `);
}

// Crear la estructura del navbar
let menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">                   Tienda                   </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${menuItems.join('')}
            </ul>
        </div>
    </div>
</nav>
`;

// Insertar el menú en el DOM
document.querySelector('header').innerHTML = menu;
