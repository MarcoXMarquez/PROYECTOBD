document.getElementById("btn_register").addEventListener("click", register);
document.getElementById("btn_login").addEventListener("click", iniciarSesion);

var container_login_register = document.querySelector(".container_login-register");
var form_login = document.querySelector(".form_login");
var form_register = document.querySelector(".form_register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");

function iniciarSesion() {
    if (window.innerWidth > 850) {
        form_register.style.display = "none";
        container_login_register.style.left = "10px";
        form_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        form_register.style.display = "none";
        container_login_register.style.left = "0px";
        form_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        form_register.style.display = "block";
        container_login_register.style.left = "410px";
        form_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        form_register.style.display = "block";
        container_login_register.style.left = "0px";
        form_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

