const cardSection = document.querySelector("#cards");

function getCart(cards) {
    if (cards.length === 0) {
        cardSection.innerHTML = `<p class="text-center">El carrito está vacío.</p>`;
        return;
    }

    const list = cards.map(card => `
        <div class="card border shadow-none mb-2">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <div class="me-4">
                        <img src="${URL_CARS.imagen}${card.product.id}.jpg" class="img-fluid rounded-start" alt="${card.product.titulo}">
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                        <h5 class="text-truncate font-size-18">${card.product.titulo}</h5>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Precio</p>
                                    <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Cantidad</p>
                                    <h5 id="quantity" class="mb-0 mt-2">${card.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mt-3">
                                    <p class="text-muted mb-2">Total</p>
                                    <h5>$${card.product.precio * card.quantity}</h5>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="mt-3">
                                    <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
    cardSection.innerHTML = list.join("");
    
    total(cards);  // Actualizar el total después de renderizar los productos
}

function total(cards) {
    let cartTotal = document.querySelector("#cart-total");
    if (cards.length === 0) {
        cartTotal.innerText = "$0.00";
        return;
    }

    let total = cards.reduce((acumulado, actual) => {
        const precio = parseFloat(actual.product.precio);
        const cantidad = parseInt(actual.quantity);

        if (isNaN(precio) || isNaN(cantidad)) {
            console.error("Datos no válidos en el carrito:", actual.product.precio, actual.quantity);
            return acumulado; // Si hay un valor no válido, no suma nada
        }

        return acumulado + (precio * cantidad);
    }, 0);

    cartTotal.innerText = "$" + total.toFixed(2);  // Formatea el total a dos decimales
}


function removeItem(id) {
    const cards = JSON.parse(localStorage.getItem("cart")) || [];
    const newCards = cards.filter(card => card.product.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);

    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);
    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = quantity;
}

function clearCart() {
    // Limpiar el carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify([]));

    // Actualizar cantidad en el localStorage
    localStorage.setItem("quantity", 0);

    // Actualizar la cantidad en la navbar
    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = "0";
    }

    // Limpiar el contenido visual del carrito
    getCart([]);
    total([]);
}

function comprar() {
    // Obtener el carrito y el email del usuario desde localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const email = localStorage.getItem("email");

    // Verificar si el carrito está vacío
    if (cart.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Tu carrito está vacío",
            text: "Por favor, agrega productos antes de realizar la compra.",
        });
        return;
    }

    //MOCKAPI: https://67367b0eaafa2ef222309fad.mockapi.io/cart
    // Crear el objeto recurso para enviar al servidor 
    const recurso = {
        createdAt: new Date().toISOString(),
        items: cart,
        user: email,
    };

    // Realizar la solicitud POST al API
    fetch("https://67367b0eaafa2ef222309fad.mockapi.io/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recurso),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al procesar la compra. Por favor, intenta más tarde.");
            }
            return response.json();
        })
        .then(data => {
            // Mostrar SweetAlert en caso de éxito
            Swal.fire({
                icon: "success",
                title: "¡Compra realizada!",
                text: `Gracias ${email}, hemos registrado tu orden número ${data.id}.`,
                confirmButtonText: "Ok",
                confirmButtonColor: "#ab2415",
                showCancelButton: false,
            }).then(() => {
                clearCart(); // Vaciar el carrito
            });
        })
        .catch(error => {
            // Manejo de errores con SweetAlert
            Swal.fire({
                icon: "error",
                title: "Error en la compra",
                text: error.message || "Lo sentimos, hubo un problema con tu compra. Intenta más tarde.",
                confirmButtonText: "Ok",
                confirmButtonColor: "#ab2415",
            });
        });
} 

// Inicialización
let cart = JSON.parse(localStorage.getItem("cart")) || [];

getCart(cart);
total(cart);
