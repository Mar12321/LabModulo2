document.getElementById("nombre").addEventListener("keyup", colorNombre);
document.getElementById("email").addEventListener("keyup", colorEmail);
document.getElementById("pass").addEventListener("keyup", colorPass1);
document.getElementById("pass2").addEventListener("keyup", colorPass2);

function colorNombre() {

    var nombre = document.getElementById("nombre");

    if (nombre.value == '') {

        document.getElementById("parrafo1").innerHTML = "Rellene este campo";
        nombre.style.border = "solid 3px #db5a5a";

    } else if (!/^[a-zA-Z]+$/.test(nombre.value)) {
        document.getElementById("parrafo1").innerHTML = "Nombre no válido";
        nombre.style.border = "solid 3px #db5a5a";

    }
    else {
        document.getElementById("parrafo1").innerHTML = ""
        nombre.style.border = "solid 3px #4eca64";
    }
}

function colorEmail() {

    var emailC = document.getElementById("email");
    var email = emailC.value;
    var e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var b = false;

    if (e.test(email)) {

        emailC.style.border = "solid 3px #4eca64";
        document.getElementById("parrafo2").innerHTML = "";
        b = true;


    } else if (email == '') {

        document.getElementById("parrafo2").innerHTML = "Rellene este campo";
        emailC.style.border = "solid 3px #db5a5a";

    } else {

        document.getElementById("parrafo2").innerHTML = "Email no válido";
        emailC.style.border = "solid 3px #db5a5a";
    }
    return b;
}

function colorPass1() {

    var p1 = document.getElementById("pass");
    var b = false

    if (p1.value.length > 8) {

        document.getElementById("parrafo3").innerHTML = "No puede tener más de 8 caracteres";
        p1.style.border = "solid 3px #db5a5a";

    } else if (p1.value == '') {
        document.getElementById("parrafo3").innerHTML = "Rellene este campo";
        p1.style.border = "solid 3px #db5a5a";

    } else {
        document.getElementById("parrafo3").innerHTML = '';
        p1.style.border = "solid 3px #4eca64";
        b = true;
    }
    return b;
}

function colorPass2() {

    var p1 = document.getElementById("pass");
    var p2 = document.getElementById("pass2");
    var b = false

    if (p2.value == '') {

        document.getElementById("parrafo4").innerHTML = "Rellene este campo";
        p2.style.border = "solid 3px #db5a5a";

    } else if (p1.value != p2.value) {

        document.getElementById("parrafo4").innerHTML = "Las contraseñas no coinciden";
        p2.style.border = "solid 3px #db5a5a";

    } else if (p1.value == p2.value) {

        document.getElementById("parrafo4").innerHTML = "";
        p2.style.border = "solid 3px #4eca64";
        b = true;

    }
    return b;
}

var al = document.getElementById("myForm");

al.addEventListener("submit", alerta);

function alerta() {

    if (colorEmail && colorNombre && colorPass1 && colorPass2) {
        alert("Inscripción correcta");
    } else {
        alert("Inscirpción no correcta");
    }
}
