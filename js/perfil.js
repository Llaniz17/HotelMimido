



function mostrarUsuariosRegistrados() {
    // Obtener los usuarios del almacenamiento local
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    //// Limpiar la lista de usuarios
    usuariosRegistrados.innerHTML = '';

    //// Recorrer la lista de usuarios y agregar cada uno a la lista
    if (usuarios) {
        usuarios.forEach(function (usuario) {
            const li = document.createElement('li');
            li.textContent = usuario.email + ' - ' + usuario.contraseña;
            usuariosRegistrados.appendChild(li);
        });
    }
}
mostrarUsuariosRegistrados();