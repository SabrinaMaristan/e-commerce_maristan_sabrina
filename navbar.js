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
        nombre: "Contacto",
        href: "./contacto.html"
    }
];

// Array para almacenar el HTML del menú generado
let menuItems = [];

// Recorrer el array de categorías y generar el HTML para cada una
for (let item of categorias) {
    // Agregar cada item del menú al array menuItems
    menuItems.push(`
        <li class="nav-item">
            <a class="nav-link" href="${item.href}">${item.nombre}</a>
        </li>
    `);
}

// Crear la estructura del navbar incluyendo los items generados
let menu = `
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tienda</a>
        <ul class="navbar-nav">
            ${menuItems.join('')}  <!-- Aquí se insertan las categorías generadas -->
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </div>
</nav>
`;

// Insertar el menú en el DOM
document.querySelector('header').innerHTML = menu;
