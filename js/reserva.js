
const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let reserva = []

function renderCarrito(){
  tbody.innerHTML = ''
  reserva.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const id = parseInt(item.id.match(/\d+/)[0]);
    const precio = parseInt(item.precio.match(/\d+/)[0]);
    
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${id}</h6>
            </td>
            <td class="table__price"><p>${precio}</p></td>
            <td class="table__cantidad">
              <h6 class="input__elemento">${item.cantidad}</h6>
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  reserva.forEach((item) => {
    const precio = parseInt(item.precio.match(/\d+/)[0]);
    Total = Total + precio
  })

  itemCartTotal.innerHTML = `Total $${Total}`
}

function removeItemCarrito(e){
  
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<reserva.length ; i++){

    if(reserva[i].id.trim() === title.trim()){
      reserva.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  const storage_remover = JSON.parse(localStorage.getItem('reserva'));
  if(storage_remover){
    storage_remover.map(item => {
      if(item.id ==title){
        storage_remover.pop(item)
      }
    })
  }
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}


window.onload = function(){
  const storage_reserva = JSON.parse(localStorage.getItem('reserva'));
  if(storage_reserva){
    reserva = storage_reserva;
    renderCarrito()
  }
}
