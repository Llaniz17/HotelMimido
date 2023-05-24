const nombreReg = document.getElementById('nombreReg')
const apellidoReg = document.getElementById('apellidoReg')
const emailReg = document.getElementById('emailReg')
const passwordReg = document.getElementById('passwordReg')
const telReg = document.getElementById('telReg')
const regis = document.getElementById('regis')

regis.addEventListener('submit', function(event){
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos de entrada
    const nombre = nombreReg.value;
    const apellido = apellidoReg.value;
    const email = emailReg.value;
    const contraseña = passwordReg.value;
    const telefono = telReg.value;

    // Crear un objeto de usuario
    const usuario = {
        usuario: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña,
        telefono: telefono
    };
    // Guardar el usuario en el almacenamiento local
    guardarUsuario(usuario);

    // Limpiar los campos de entrada
    username.value = '';
    pass.value = '';

})

// Función para guardar un usuario en el almacenamiento local
function guardarUsuario(usuario) {
    // Obtener los usuarios existentes del almacenamiento local (si hay alguno)
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Agregar el nuevo usuario a la lista
    usuarios.push(usuario);

    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}