const history = document.querySelector('.reservation-history')
let reservas = []

function renderReservas(){
    history.innerHTML = ''
    reservas.map(item => {
      const div = document.createElement('div')
      div.classList.add('reservation-info')
      const id = parseInt(item.id.match(/\d+/)[0]);
      const precio = parseInt(item.precio.match(/\d+/)[0]);
      
      const Content = `
      
            <div class="reservation-info img">
                <img src=${item.img}  alt="Habitacion">
            </div>
            <span class="room-number">Habitación ${id}</span>
            <span class="room-type">Precio: ${precio}</span>
              
      
      `
      div.innerHTML = Content;
      history.append(div)
    })
  }

window.onload = function(){
    const storage_reservas = JSON.parse(localStorage.getItem('reserva'));
    if(storage_reservas){
        reservas = storage_reservas;
        renderReservas()
    }
}

function mostrarUsuarioLogueado() {
  // Obtener los usuarios del almacenamiento local
  const lUsuario = JSON.parse(localStorage.getItem('usuarioLog'));
  console.log(lUsuario);

  //mostrar nombre de usuario en el h1
  const nombre = document.getElementById('usuarioLogueado');
  nombre.textContent = lUsuario.usuario;

}
mostrarUsuarioLogueado()