const submitLogin = document.querySelector("#login");
const message = document.querySelector("#formLoginMessage");

// Manejador de evento para el envío del formulario de login
const handSubmitLogin = event => {
    event.preventDefault();  // Evita el comportamiento predeterminado de envío del formulario
    let emailForm = event.target.elements.email.value;
    let passwordForm = event.target.elements.password.value;

    if (emailForm === USER_LOGIN.email && passwordForm === USER_LOGIN.password) {
        // Si las credenciales coinciden, guarda la sesión en localStorage y redirige
        localStorage.setItem("email", emailForm);
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("quantity", "0");
        location.href = "index.html";
    } else {
        // Muestra un mensaje de error si las credenciales no coinciden
        message.innerText = "Uno de los valores no coincide. Inténtelo de nuevo.";
    }
};

// Asocia el evento de envío del formulario a la función `handSubmitLogin`
submitLogin.addEventListener("submit", handSubmitLogin);