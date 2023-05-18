
function actualizar() {
  // Obtener los valores de los campos de texto directamente en el objeto de datos
  var datos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    contraseña: document.getElementById("contraseña").value,
    telefono: document.getElementById("telefono").value
  };
  
  // Guardar los datos en el almacenamiento local
  localStorage.setItem("datosPerfil", JSON.stringify(datos));
}

function enviarDatosYRedireccionar() {
  // Obtener los valores de los campos de texto directamente en el objeto de datos
  var datos = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    contraseña: document.getElementById("contraseña").value,
    telefono: document.getElementById("telefono").value
  };

  // Llamar a la función actualizar() y pasar los datos como argumento
  actualizar(datos);
}

function actualizar(datos) {
  // Guardar los datos en el almacenamiento local
  localStorage.setItem("datosPerfil", JSON.stringify(datos));

  // Redireccionar a la página de perfil
  alert("Datos Actualizados");
  window.location.href = "cuenta_perfil.html";
}
