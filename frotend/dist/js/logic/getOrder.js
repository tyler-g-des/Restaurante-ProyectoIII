// Acciones 
const boton = document.querySelector("#iniciarPedido");
const botonTomarOrdenes = document.querySelector("#tomarOrdenes");

// Fecha y hora
let fecha = new Date();
let hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
document.getElementById("fecha").value =  fecha.toJSON().slice(0,10);


//Obtener cantidad de personas
boton.addEventListener('click', event => {
    let numeroPersonas =  document.getElementById("numeroPersona");
    console.log(numeroPersonas.value);
  
});


botonTomarOrdenes.addEventListener('click', event => {
    let nombre = document.querySelector("#nombreCliente");

   if(nombre.value == "" || nombre.value == null)
   {
     alert("Es necesario llenar el campo Nombre");
   }
   else{

        //Formulario para la orden 
        let plato = document.querySelector("#plato");
        let bebida = document.querySelector("#bebida");
        let postre = document.querySelector("#postre");
        let fecha = document.querySelector("#fecha");
        let fechaModificada = fecha.value + " "  + hora;

        let pedido = [nombre.value, plato.value, bebida.value, postre.value , fechaModificada];
        localStorage.setItem("pedido", JSON.stringify(pedido));

        document.getElementById("nombreCliente").value =  "";

        alert("siguiente orden")
   }

});
