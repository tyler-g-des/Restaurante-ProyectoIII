document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');

let porciento = document.getElementById("porciento");
let texto = document.getElementById("texto");
let button = document.getElementById("facturar");

button.addEventListener('click', event => {

  window.location.replace("../order/facturar.html"); 

});

const cambiarFormularioOrden = async () => {
    let user;
    let mesaSelect;
    let order;
    let valueMesa = localStorage.getItem('mesa');
  
    try
    {
      /*
      user = await axios.get('http://localhost:8080/users/'+localStorage.getItem('id'),{
      });
  
      mesaSelect = await axios.get('http://localhost:8080/tablets/'+valueMesa,{
      });
  
      order = await axios.post('http://localhost:8080/orders/getOrderActive',{
        "user":user.data,
        "statusOrder":"preparada",
        "tablet":mesaSelect.data
      }); */

      order = await axios.get('http://localhost:8080/orders/getOrderActiveLoguin/'+localStorage.getItem('id'),{
      });

      if(order.data == "User order prepared"){
        porciento.value = "90";
        texto.textContent = "La orden fue entregada deseseas facturar tu orden?";
        console.log(button)
        button.removeAttribute("hidden");
      }
      else{
   
      }
    }
    catch(error)
    {
      alert("Problema al registrar detalle de la orden " + error);
      //window.location.replace("../../index.html");
    }
  }