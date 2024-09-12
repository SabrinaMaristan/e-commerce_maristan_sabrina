// Función para generar las tarjetas de productos
function cards() {

    //document.querySelector("h1").innerHTML = "Productos";
    const h1 = document.querySelector("h1");
    h1.innerText = "Productos";

    const container = document.querySelector('.container');

    const cardsArray = []; // Declara un arreglo vacío que almacenará las tarjetas en formato de cadena HTML.
    const totalCards = 9; // Variable totalCards con el valor que indica cuántas tarjetas de productos se van a crear.

    // Inicia un bucle for que va desde 1 hasta 9, es decir, se ejecutará 9 veces para crear una tarjeta por cada número. Dentro del bucle, en cada iteración, se genera una cadena HTML que representa una tarjeta de producto. La variable i se utiliza para cambiar dinámicamente el número de la imagen, el título (Producto ${i}) y la descripción.

    for (let i = 1; i <= totalCards; i++) {
        const card = `
            <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
                <h3> Producto ${i}</h3>
                <p> Descripción del producto ${i}.</p>
                <button> Ver más </button> 
            </div>
        `;
        cardsArray.push(card); //Añade la tarjeta generada en cada iteración (card) al arreglo cardsArray.
    }  
         
    document.querySelector(".container").innerHTML = cardsArray.join(''); 
    // Selecciona el contenedor con la clase "container" y reemplaza su contenido con las tarjetas que se almacenaron en cardsArray. join('') convierte el arreglo en una única cadena HTML sin comas separadoras.

}

cards();
