// console.log(" Holaa!");

const h1 = document.querySelector(".titulo");
h1.innerText = "Productos";

const container = document.querySelector('.container');

const cardsArray = [];
const totalCards = 9; 

for (let i = 1; i <= totalCards; i++) {
    const card = `
        <div class="card">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Producto ${i}">
            <h3>Producto ${i}</h3>
            <p>Descripción del producto ${i}.</p>
        </div>
    `;
    cardsArray.push(card);
}        

document.querySelector(".container").innerHTML = cardsArray.join(''); 
// container.innerHTML = cardsArray.join('');
