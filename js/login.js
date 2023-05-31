//Funcionalidad del registro (Guarda todos los datos)
const nombreReg = document.getElementById('nombreReg')
const apellidoReg = document.getElementById('apellidoReg')
const emailReg = document.getElementById('emailReg')
const passwordReg = document.getElementById('passwordReg')
const telReg = document.getElementById('telReg')
const conPasswordReg = document.getElementById('conPasswordReg')
const regis = document.getElementById('regis')

regis.addEventListener('submit', function(event){
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos de entrada
    const nombre = nombreReg.value;
    const apellido = apellidoReg.value;
    const email = emailReg.value;
    const contraseña = passwordReg.value;
    const telefono = telReg.value;
    const confirmarPasswordReg = conPasswordReg.value;

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
    nombreReg.value = '';
    apellidoReg.value = '';
    emailReg.value = '';
    passwordReg.value = '';
    telReg.value = '';
    conPasswordReg.value = '';
    


})

// Función para guardar un usuario en el almacenamiento local
function guardarUsuario(usuario) {
    // Obtener los usuarios existentes del almacenamiento local (si hay alguno) o crear el Json
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Agrega el nuevo usuario a la lista
    usuarios.push(usuario);

    // Guarda la lista actualizada en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    //mensaje de confirmación
    alert(`El usuario ${nombreReg.value} ha sido registrado`)
}

//     ::::Si quiere ver cuales usuarios están registrados::::

// Función para mostrar los usuarios registrados NOTA:debe descomentar la lista en el html(Línea 62)




//      :::::Funcionalidad del login:::::

const usernameLogin = document.getElementById('usernameLogin')
const passwordLogin = document.getElementById('passwordLogin')
const login = document.getElementById('login')

login.addEventListener('submit', function(event){

    event.preventDefault(); //Evitar envío del formulario

    //Obtener datos de los inputs
    const usuarioLogin = usernameLogin.value;
    const contraseñaLogin = passwordLogin.value;

    //Verificar que el usuario esté registrado
    const usuariosLogin = JSON.parse(localStorage.getItem('usuarios'));
    const usuarioEncontrado = usuariosLogin.find(function (usuario) {
        return usuario.email === usuarioLogin && usuario.contraseña === contraseñaLogin;
    });

    //Mensaje de verificación
    if(usuarioEncontrado){
        alert("Has ingresado exitosamente");
        // Aquí puede redirigir al usuario a otra página o realizar acciones adicionales
    } else{
        alert("Datos no válidos para el ingreso");
    }

    // se limpian los campos
    usuarioLogin.value = '';
    passwordLogin.value = '';


    //Loguear al usuario encontrado
    const usuarioLog = JSON.stringify(usuarioEncontrado); // crea un objeto con el usuario logueado
    localStorage.setItem("usuarioLog", usuarioLog); //guarda el objeto en localstorage

    window.location.href = '../index.html'; //envía a página principal
})