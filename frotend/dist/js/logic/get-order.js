document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');
let mesasDisponibles;

//Formulario
let mesa = document.querySelector("#mesa");

// Acciones de redireccion - esto es para que al salir se cancele la oferta
const botonRoya = document.querySelector("#redireccionRoya");
const botonMesa = document.querySelector("#redireccionMesas");
const botonEditarUsuario = document.querySelector("#editarUsuarioRedireccion");

// Acciones 
const botonIniciarPedido = document.querySelector("#iniciarPedido");
const botonTomarOrdenes = document.querySelector("#tomarOrdenes");
const botonVolver = document.querySelector("#volverOrdenes");
let incremento=0;

// Fecha y hora
let fecha = new Date();
let hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
document.getElementById("fecha").value =  fecha.toJSON().slice(0,10);

//Obtener cantidad de personas
botonIniciarPedido.addEventListener('click', event => {
   let numeroPersonas = document.getElementById("numeroPersona");
});

const evento = () => {
  click_event = new CustomEvent('click');
 btn_element = document.querySelector('#iniciarPedido');
 btn_element.dispatchEvent(click_event);
}

//Tomar Ordenes
botonTomarOrdenes.addEventListener('click', event => {
    let nombre = document.querySelector("#nombreCliente");

   if(nombre.value == "" || nombre.value == null)
   {
     alert("Es necesario llenar el campo Nombre");
   }
   else{

       let numeroPersonas = document.getElementById("numeroPersona");

        //Formulario para la orden 
        let plato = document.querySelector("#plato");
        let bebida = document.querySelector("#bebida");
        let postre = document.querySelector("#postre");
        let fecha = document.querySelector("#fecha");
        let fechaModificada = fecha.value + " "  + hora;

        //Guardar Orden Local Storage
        let pedido = []; 
        pedido[incremento] = [nombre.value.trim(), plato.value, bebida.value, postre.value , fechaModificada];
        sessionStorage.setItem("pedido"+incremento, JSON.stringify(pedido[incremento]));

        document.getElementById("nombreCliente").value =  "";
        alert("siguiente orden");

        //Cambiar comportamiento
        footer = document.querySelector("#ordenFooter");
        //footer = footer.textContent + " " + numeroPersonas.value;
        numeroPersonas.value --;
        incremento ++;
        footer.textContent = "Ordenes Restantes: " + numeroPersonas.value;

        //Logica cancelar Ordenes
        botonVolver.textContent = "Cancelar Orden"
        
        // Al completar los pedidos guardar en base de Datos y regresar a la pagina de tomar ordenes
        if(numeroPersonas.value == 0 || numeroPersonas ==  "0"){
          alert("!Ordenes Tomadas!");
          //AQUI GUARDAR DATOS DE LA ORDEN
          //window.location.replace("facturar.html");  
          crearOrdenes(); 
        }
   }

});

// ------------Redirecciones--------------- 
botonVolver.addEventListener('click', event => {

  if(botonVolver.textContent == "Cancelar Orden")
  {      
      if (window.confirm("Desea cancelar la Orden?")) {
        prepararPaginaOrdenes();
      }
      else{
        evento();
      }
  }
});

botonRoya.addEventListener('click', event => {
  if(botonVolver.textContent == "Cancelar Orden")
  {    
      if (window.confirm("Si recargas la pagina cancelaras la Orden deseas cancelar?")) {
          prepararPaginaOrdenes();
      }
      else{
         evento();
         event.preventDefault();
      }
 }
});
//Si vas a otro menu cancelaras la orden deseas salir igualmente?
botonMesa.addEventListener('click', event => {
  if(botonVolver.textContent == "Cancelar Orden")
  {    
      if (window.confirm("Si vas a otro menu cancelaras la orden deseas salir igualmente?")) {
          window.location.replace("order/tablet/dashboard.html");  
          prepararPaginaOrdenes();
      }
      else{
         evento();
         event.preventDefault();
      }
 }
});
// CANCELAR ORDER
botonEditarUsuario.addEventListener('click', event => {
  if(botonVolver.textContent == "Cancelar Orden")
  {    
      if (window.confirm("Si vas a otro menu cancelaras la orden deseas salir igualmente?")) {
         window.location.replace("pages/user/contact-us.html");  
          prepararPaginaOrdenes();
      }
      else{
        evento();
        event.preventDefault();
      }
 }
});



// Logica cuando se sale de una pagina
const prepararPaginaOrdenes = () => {
  sessionStorage.clear();
  window.location.replace("tomarOrdenes.html"); 
  botonVolver.textContent = "Volver"
  incremento = 0;
 }

 //Preparar Mesas disponibles
 const prepararComboMesas = async () => {
  try
  {
     mesasDisponibles = await axios.get('http://localhost:8080/tablets/getTabletsAvalible',{
     });

     for(let i=0; i<=9; i++)
     {
        mesa.innerHTML += "<option selected>" + "mesa " + mesasDisponibles.data[i].id + " </option>";
     }
  }
  catch(error)
  {
    if(error.includes("Cannot read properties of undefined (reading 'id')"))
    {
    }
    else{
     alert("Ocurrio un problema al cargar formulario intente mas tarde !!" + error);
      window.location.replace("index.html");     
    }
  }
}

//Crear Ordenes
const crearOrdenes = async () => {
  let user;
  let mesaSelect;
  let valueMesa = mesa.value.slice(5,6);
  let ordenSave;

  let fecha = document.querySelector("#fecha");
  let fechaModificada = fecha.value + " "  + hora;

  try{
    user = await axios.get('http://localhost:8080/users/'+localStorage.getItem('id'),{
    });

    mesaSelect = await axios.get('http://localhost:8080/tablets/'+valueMesa,{
    });

     ordenSave = await axios.post('http://localhost:8080/orders',{
      "user":user.data,
      "date":fechaModificada,
      "totalOrder":0,
      "statusOrder":"creada",
      "tablet":mesaSelect.data
   });
    localStorage.setItem('orden',ordenSave.data.id);
    alert("Orden Registrada con exito!!");
    await crearDetalle();
 }
 catch(error)
 {
   alert("Problema al registrar la orden " + error);
 }

}

//Guardar Detalle de orden
const crearDetalle = async () => {
  let user;
  let mesaSelect;
  let valueMesa = mesa.value.slice(5,6);
  let order;
  let respuesta=[];

  try
  {
    user = await axios.get('http://localhost:8080/users/'+localStorage.getItem('id'),{
    });

    mesaSelect = await axios.get('http://localhost:8080/tablets/'+valueMesa,{
    });

    console.log(user.data);
    console.log(mesaSelect.data);

    order = await axios.post('http://localhost:8080/orders/getOrderActive',{
      "user":user.data,
      "statusOrder":"creada",
      "tablet":mesaSelect.data
    });

    console.log(order.data)
    for(let i=0; i<=incremento-1; i++)
    {

       //console.log(sessionStorage.getItem('pedido'+i));
       respuesta[i] = JSON.parse(sessionStorage.getItem('pedido'+i));
       console.log(respuesta[i][1]);
       
        const ordenDetailSave = await axios.post('http://localhost:8080/orderDetails',{
           "plato": respuesta[i][1],
           "bebida": respuesta[i][2],
           "postre": respuesta[i][3],
           "price": "1000",
            "order": order.data
       });
    }
    await ocuparMesa();
    alert("se registro el detalle de la orden!!");
    localStorage.setItem('mesa',valueMesa)
    window.location.replace("../wait/inline.html"); 
  }
  catch(error)
  {
    console.log(error)
    if(error=="TypeError: Cannot read properties of null (reading '1')")
    {
      alert("se registro la el detalle de la orden!!");
      await ocuparMesa();
      localStorage.setItem('mesa',valueMesa)
      window.location.replace("../wait/inline.html"); 
    }else{
    alert("Problema al registrar detalle de la orden " + error);
    }
  }
}

 const ocuparMesa = async () => {
  let valueMesa = mesa.value.slice(5,6);
   try{
     mesa = await axios.post('http://localhost:8080/tablets',{
     "id":valueMesa,
     "status":"Ocupada",
     "description":"mesa"
     });
   }
   catch(error)
   {
     alert("Error cambiando estado " +  error)
   }
 }