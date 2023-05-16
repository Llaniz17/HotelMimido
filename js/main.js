// Datos de ejemplo: habitaciones disponibles
const rooms = [
    { id: 1, type: "individual", price: 50, capacity: 1, reserved: false },
    { id: 2, type: "doble", price: 80, capacity: 2, reserved: true },
    { id: 3, type: "suite", price: 150, capacity: 2, reserved: false },
    { id: 4, type: "individual", price: 60, capacity: 1, reserved: false },
    { id: 5, type: "doble", price: 100, capacity: 2, reserved: false },
  ];
  
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
      roomImg.src = "https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=1500";
  
      const roomId = document.createElement("h3");
      roomId.textContent = "ID: " + room.id;
  
      const roomType = document.createElement("div");
      roomType.classList.add("address");
      roomType.textContent = "Tipo: " + room.type;
  
      const roomPrice = document.createElement("span");
      roomPrice.classList.add("price__label");
      roomPrice.textContent = "Precio: $" + room.price;
  
      const roomCapacity =document.createElement("span");
      roomCapacity.classList.add("measure__label");
      roomCapacity.textContent = "Capacidad: " + room.capacity + " persona(s)";

      const roomButton = document.createElement("button");
      roomButton.textContent = "Detalle";

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