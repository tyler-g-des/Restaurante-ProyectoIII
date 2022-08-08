document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');
let actualizar = document.querySelector("#actualizar");
let response;

actualizar.addEventListener('click', event => {
  location.reload();
});

const prepararOrden = async (mesa) => {
    let mesaSelect;
    let order;
    let orderUpdate;
  
    try
    {
      mesaSelect = await axios.get('http://localhost:8080/tablets/'+mesa,{
      });
  
      order = await axios.get('http://localhost:8080/orders',{
     });

    }
    catch(error)
    {
      alert("Problema al obtener la orden " + error);
    } 
  
     console.log(mesaSelect.data)
     console.log(order.data[0].table)

    try{
     for(let i=0; i<=order.data.length; i++){       
      if(order.data[i].table.id == mesa){
        if(order.data[i].table.status == "Ocupada"){
           orderUpdate = await axios.post('http://localhost:8080/orders',{
           "id":order.data[i].id,
           "user":order.data[i].user,
           "date":order.data[i].date,
           "totalOrder":order.data[i].totalOrder,
           "statusOrder":"preparada",
           "tablet":order.data[i].table
          });
          i=order.data.length+1;
        }
      }
     } 
     cambiarEstadoMesa(mesa);
     alert("Orden entregada");
    }
    catch(error)
    {
      alert("error al entregar la orden " + error)
    }
    
}

const mesaEstados = async () => {

    try {
         response = await axios.get('http://localhost:8080/tablets',{
        });
    } catch (error) {
           alert("Problema al solicitar datos de la Mesas" + error)
    }

  let mesaNumber = 1;  
  for(let i=0; i<=response.data.length; i++)
  {

    if(response.data[i].status == 'Ocupada')
    {
        document.querySelector('#mesa'+mesaNumber+'-color').setAttribute("class","small-box bg-warning");
        document.querySelector('#mesa'+mesaNumber+'-icono').setAttribute("class","fas fa-concierge-bell");
        mesaNumber ++;
        
    }
     else if(response.data[i].status == 'Fuera')
     {
        document.querySelector('#mesa'+mesaNumber+'-color').setAttribute("class","small-box bg-danger");
        document.querySelector('#mesa'+mesaNumber+'-icono').setAttribute("class","fas fas fa-exclamation-triangle");
        mesaNumber ++;
     }

     else if(response.data[i].status == 'Libre'){
        mesaNumber ++;
     }

     console.log(response.data[i].status);

  }

}

const cambiarEstadoMesa = async (mesa) => {

  try 
  {
    actualizarReponse = await axios.post('http://localhost:8080/tablets',{
      "id": mesa,
      "status": "Libre",
      "description": "mesa"
    });
  } 
  catch (error) 
  {
      alert("Problema al solicitar datos de la Mesas" + error)
   }
}

// ------------ Mesas redirecciones 
let mesa1 = document.querySelector("#mesa1-redireccion");
mesa1.addEventListener('click', event => {
    if(document.querySelector('#mesa1-color').className.includes("bg-warning"))
    { 
      if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(1);}
    }
    else{
      alert("no hay orden");
    }
});

//Mesas redirecciones 
let mesa2 = document.querySelector("#mesa2-redireccion");
mesa2.addEventListener('click', event => {
    if(document.querySelector('#mesa2-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(2);}
    }
    else{
      alert("no hay orden");
    }
});

//Mesas redirecciones 
let mesa3 = document.querySelector("#mesa3-redireccion");
mesa3.addEventListener('click', event => {
    if(document.querySelector('#mesa3-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(3);}
    }
    else{
      alert("no hay orden");
    }
});

//Mesas redirecciones 
let mesa4 = document.querySelector("#mesa4-redireccion");
mesa4.addEventListener('click', event => {
    if(document.querySelector('#mesa4-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(4);}}
      else{
        alert("no hay orden");
      }
});

//Mesas redirecciones 
let mesa5 = document.querySelector("#mesa5-redireccion");
mesa5.addEventListener('click', event => {
    if(document.querySelector('#mesa5-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(5);}}
      else{
        alert("no hay orden");
      }
});

//Mesas redirecciones 
let mesa6 = document.querySelector("#mesa6-redireccion");
mesa6.addEventListener('click', event => {
    if(document.querySelector('#mesa6-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(6);}}
      else{
        alert("no hay orden");
      }
});

//Mesas redirecciones 
let mesa7 = document.querySelector("#mesa7-redireccion");
mesa7.addEventListener('click', event => {
    if(document.querySelector('#mesa7-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(7);}}
      else{
        alert("no hay orden");
      }
});

//Mesas redirecciones 
let mesa8 = document.querySelector("#mesa8-redireccion");
mesa8.addEventListener('click', event => {
    if(document.querySelector('#mesa8-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(8);}}
      else{
        alert("no hay orden");
      }
});

//Mesas redirecciones 
let mesa9 = document.querySelector("#mesa9-redireccion");
mesa9.addEventListener('click', event => {
    if(document.querySelector('#mesa9-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(9);}}
      else{
        alert("no hay orden");
      }
});

//Mesas redirecciones 
let mesa10 = document.querySelector("#mesa10-redireccion");
mesa10.addEventListener('click', event => {
    if(document.querySelector('#mesa10-color').className.includes("bg-warning"))
    { if(window.confirm("La orden de esta mesa esta lista?")) 
      {prepararOrden(10);}}
      else{
        alert("no hay orden");
      }
});
