
// Función para obtener los datos del perfil del almacenamiento local
//function obtenerDatosPerfil() {
    //var datos = localStorage.getItem("usuarios");
    //if (datos) {
        //return JSON.parse(datos);
    //}
    //return null;
//}

// Función para mostrar los datos del perfil en la página
//function mostrarDatosPerfil() {
    //var datos = obtenerDatosPerfil();
    //if (datos) {
        //document.getElementById("nombre").textContent = datos.usuario;
        //document.getElementById("apellido").textContent = datos.apellido;
        //document.getElementById("email").textContent = datos.email;
        //document.getElementById("password").textContent = datos.contraseña;
        //document.getElementById("telefono").textContent = datos.telefono;
    //}
//}

// Cargar los datos del perfil al cargar la página
//mostrarDatosPerfil();

function mostrarUsuarioLogueado() {
    // Obtener los usuarios del almacenamiento local
    const lUsuario = JSON.parse(localStorage.getItem('usuarioLog'));
    //console.log(lUsuario);
  
    //mostrar datos de usuario
    const usuario =document.getElementById('nombre');
    const apellido =document.getElementById('apellido');
    const email =document.getElementById('email');
    const contraseña =document.getElementById('contraseña');
    const telefono =document.getElementById('telefono');

    usuario.setAttribute("value", lUsuario.usuario);
    apellido.setAttribute("value", lUsuario.apellido);
    email.setAttribute("value", lUsuario.email);
    contraseña.setAttribute("value", lUsuario.contraseña);
    telefono.setAttribute("value", lUsuario.telefono);

   
}
mostrarUsuarioLogueado()

function updateLocalStorage(){
    const lUsuario = JSON.parse(localStorage.getItem('usuarioLog'));
    const usuario = document.getElementById('nombre').value;
    const apellido =document.getElementById('apellido').value;
    const email =document.getElementById('email').value;
    const contraseña =document.getElementById('contraseña').value;
    const telefono =document.getElementById('telefono').value;
    lUsuario.usuario = usuario
    lUsuario.apellido = apellido
    lUsuario.email = email
    lUsuario.contraseña = contraseña
    lUsuario.telefono = telefono
    const nuevoUsuario = JSON.stringify(lUsuario)
    localStorage.setItem('usuarioLog', nuevoUsuario)
    mostrarUsuarioLogueado()
}

//
