document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');
let bodyDocument = document.getElementsByTagName("body");
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
let footer;
let incremento=0;
// Fecha y hora
let fecha = new Date();
let hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
document.getElementById("fecha").value =  fecha.toJSON().slice(0,10);

//Obtener cantidad de personas
botonIniciarPedido.addEventListener('click', event => {
   let numeroPersonas = document.getElementById("numeroPersona");
   botonIniciarPedido
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
          guardarDatos();
        }
   }

});

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

// Redirecciones
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

const prepararPaginaOrdenes = () => {
  sessionStorage.clear();
  window.location.replace("tomarOrdenes.html"); 
  botonVolver.textContent = "Volver"
  incremento = 0;
 }

 const prepararComboMesas = async () => {
   mesasDisponibles = await axios.get('http://localhost:8080/tablets/getTabletsAvalible',{
  })

 for(let i=0; i<=9; i++)
 {
   if(mesasDisponibles.data[i].status == 'Libre')
   {
    mesa.innerHTML += "<option selected>" + "mesa " + mesasDisponibles.data[i].id + " </option>";
   }else{
     i++;
   }
 }

}


const guardarDatos = async () => {
let user;
let mesaSelect;
let valueMesa = mesa.value.slice(5,6);

let fecha = document.querySelector("#fecha");
let fechaModificada = fecha.value + " "  + hora;

  try{
    user = await axios.get('http://localhost:8080/users/'+localStorage.getItem('id'),{
    });

    mesaSelect = await axios.get('http://localhost:8080/tablets/'+valueMesa,{
    });

    const ordenSave = await axios.post('http://localhost:8080/orders',{
      "user":user.data,
      "date":fechaModificada,
      "totalOrder":0,
      "statusOrder":true,
      "tablet":mesaSelect.data
   });
    alert("Orden Registrada con exito!!");
    prepararPaginaOrdenes();
    window.location.replace("facturar.html");  

 }
 catch(error){
   alert("Problema al solicitar datos del usuario conexion fallida " + error);
 }

}