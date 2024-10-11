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
        <a class="navbar-brand" href="#">Tienda</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                ${menuItems.join('')}
            </ul>
            <form class="d-flex ms-auto" role="search">
                <!-- Aquí se asigna la clase "input" al campo de búsqueda -->
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" id="search-input">
                <!-- Cambiar type a "button" para evitar el envío del formulario -->
                <button class="btn btn-outline-success" type="button" id="search-button">Buscar</button>
            </form>
        </div>
    </div>
</nav>
`;

// Insertar el menú en el DOM
document.querySelector('header').innerHTML = menu;

// Agregar evento para la búsqueda
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    // Redirigir a la página de búsqueda (puedes implementar lógica de búsqueda aquí)
    alert(`Buscando: ${query}`);
});
