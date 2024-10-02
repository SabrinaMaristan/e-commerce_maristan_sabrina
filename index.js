// Función que genera dinámicamente la página principal con las cards
function cards() {
    // Asignar texto "Productos" al h1 del index.html
    document.querySelector('h1').textContent = "Productos";

    // Obtener la referencia a la sección donde se insertarán las cards
    const section = document.querySelector('section');
    
    // Array vacío para almacenar las cards generadas
    let cardsArray = [];

    // Bucle for para crear tres cards dinámicamente
    for (let i = 1; i <= 9; i++) {
        // Plantilla HTML para cada card de producto, con una imagen dinámica según el número de iteración
        const card = `
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Producto ${i}">
            <div class="card-body">
                <h5 class="card-title">Producto ${i}</h5>
                <p class="card-text">Descripción del Producto ${i}</p>
                <!-- Botón que redirige a producto.html con el ID del producto -->
                <a href="producto.html?prod=${i}" class="btn btn-primary">Ver más</a>
            </div>
        </div>
        `;
        // Agregar cada card generada al array
        cardsArray.push(card);
    }

    // Insertar el contenido del array (todas las cards) dentro de la sección
    section.innerHTML = cardsArray.join(''); // Se usa join para convertir el array en una cadena HTML continua
}

// Llamar a la función para generar las cards al cargar la página
cards();
