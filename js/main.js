// Datos de ejemplo: habitaciones disponibles
const rooms = [
  { id: 1, type: "individual", price: 50, capacity: 1, reserved: false, img:"../media/individual.png" },
  { id: 2, type: "doble", price: 80, capacity: 2, reserved: false, img:"../media/matrimonial_1.png" },
  { id: 3, type: "lujo", price: 150, capacity: 1, reserved: false, img:"../media/lujo_1.png" },
  { id: 4, type: "individual", price: 60, capacity: 1, reserved: false, img:"../media/individual_2.png" },
  { id: 5, type: "doble", price: 100, capacity: 2, reserved: false,img:"../media/Matrimonial_2.png" },
  { id: 6, type: "lujo", price: 180, capacity: 2, reserved: false, img:"../media/lujo_2.png" },
];

const tarjetaDetalle = document.getElementById("tarjeta-detalle");
tarjetaDetalle.classList.add("tarjeta-detalle");
const cerrarDetalle = document.createElement("button");
cerrarDetalle.textContent = "Cerrar";
tarjetaDetalle.appendChild(cerrarDetalle);
function mostrarDetalle() {
  tarjetaDetalle.style.display = 'block';
}
function cerrarDetalleFunc() {
  tarjetaDetalle.style.display = 'none';
}

cerrarDetalle.addEventListener('click', cerrarDetalleFunc);
// Función para filtrar las habitaciones según los criterios seleccionados
function filterRooms() {
  const roomType = document.getElementById("room-type").value;
  const maxPrice = document.getElementById("price").value;
  const numGuests = document.getElementById("guests").value;

  const filteredRooms = rooms.filter(room =>
    (!roomType || room.type === roomType) &&
    (!maxPrice || room.price <= maxPrice) &&
    (!numGuests || room.capacity >= numGuests) &&
    !room.reserved
  );

  displayRooms(filteredRooms);
}

// Función para mostrar las habitaciones filtradas en el HTML
function displayRooms(filteredRooms) {
  const roomList = document.getElementById("cards");
  roomList.innerHTML = "";

  filteredRooms.forEach(room => {
    const roomCard = document.createElement("div");
    roomCard.classList.add("card");

    const roomDivDetails = document.createElement("div");
    roomDivDetails.classList.add("card__details");

    const roomDivPrice = document.createElement("div");
    roomDivPrice.classList.add("price");

    const roomDivPriceL = document.createElement("div");
    roomDivPriceL.classList.add("price__l");


    const roomDivImg = document.createElement("div");
    roomDivImg.classList.add("card__img");

    const roomImg = document.createElement("img");
    roomImg.src = room.img;

    const roomId = document.createElement("h3");
    roomId.textContent = "" + room.id;

    const roomType = document.createElement("div");
    roomType.classList.add("address");
    roomType.textContent = "Tipo: " + room.type;

    const roomPrice = document.createElement("div");
    roomPrice.classList.add("price__label");
    roomPrice.textContent = "Precio: $" + room.price;

    const roomCapacity = document.createElement("div");
    roomCapacity.classList.add("measure__label");
    roomCapacity.textContent = "Capacidad: " + room.capacity + " persona(s)";

    const roomButton = document.createElement("button");
    roomButton.classList.add("reservar");
    roomButton.textContent = "Reservar";
    roomButton.addEventListener('click', addLocalStorage);

    roomDivImg.appendChild(roomImg);

    roomCard.appendChild(roomDivImg);
    roomDivDetails.appendChild(roomId);
    roomDivDetails.appendChild(roomType);
    roomDivPriceL.appendChild(roomPrice);
    roomDivPriceL.appendChild(roomCapacity);
    roomDivPrice.appendChild(roomDivPriceL);
    roomDivDetails.appendChild(roomDivPrice);

    roomDivDetails.appendChild(roomButton);
    roomCard.appendChild(roomDivDetails);

    roomList.appendChild(roomCard);


  });


}

// Mostrar todas las habitaciones al cargar la página
displayRooms(rooms);
let reserva = []
function addLocalStorage(e){
  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')
  const button = e.target
  const item = button.closest('.card')
  const itemId = item.querySelector('h3').textContent;
  const itemPrice = item.querySelector('.price__label').textContent;
  const itemImg = item.querySelector('img').src;
  
  const newItem = {
    id: itemId,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }
  reserva.push(newItem)
  localStorage.setItem('reserva', JSON.stringify(reserva))
}

