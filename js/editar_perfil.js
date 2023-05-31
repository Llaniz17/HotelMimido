
// Función para obtener los datos del perfil del almacenamiento local
function obtenerDatosPerfil() {
    var datos = localStorage.getItem("usuarios");
    if (datos) {
        return JSON.parse(datos);
    }
    return null;
}

// Función para mostrar los datos del perfil en la página
function mostrarDatosPerfil() {
    var datos = obtenerDatosPerfil();
    if (datos) {
        document.getElementById("nombre").textContent = datos.usuario;
        document.getElementById("apellido").textContent = datos.apellido;
        document.getElementById("email").textContent = datos.email;
        document.getElementById("password").textContent = datos.contraseña;
        document.getElementById("telefono").textContent = datos.telefono;
    }
}

// Cargar los datos del perfil al cargar la página
mostrarDatosPerfil();
