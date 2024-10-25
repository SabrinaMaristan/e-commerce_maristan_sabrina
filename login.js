const submitLogin = document.querySelector("#login");
const message = document.querySelector("#formLoginMessage");

const handSubmitLogin = event => {
    event.preventDefault();
    let emailForm = event.target.elements.email.value;
    let passwordForm = event.target.elements.password.value;

    if (emailForm === USER_LOGIN.email && passwordForm === USER_LOGIN.password) {
        localStorage.setItem("email", emailForm);
        location.href = "index.html";
    } else {
        message.innerText = "Uno de los valores no coincide. Inténtelo de nuevo."
    }
}

submitLogin.addEventListener("submit", handSubmitLogin);
