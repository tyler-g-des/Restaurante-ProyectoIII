let porciento = document.getElementById("porciento");
let texto = document.getElementById("texto");
let button = document.getElementById("facturar");

button.addEventListener('click', event => {

  window.location.replace("../order/facturar.html"); 

});

const crearDetalle = async () => {
    let user;
    let mesaSelect;
    let order;
    let valueMesa = localStorage.getItem('mesa');
  
    try
    {
      user = await axios.get('http://localhost:8080/users/'+localStorage.getItem('id'),{
      });
  
      mesaSelect = await axios.get('http://localhost:8080/tablets/'+valueMesa,{
      });
  
      order = await axios.post('http://localhost:8080/orders/getOrderActive',{
        "user":user.data,
        "statusOrder":"preparada",
        "tablet":mesaSelect.data
      });

      if(order.data.statusOrder == "preparada"){
        porciento.value = "90";
        texto.textContent = "La orden fue entregada deseseas facturar tu orden";
        console.log(button)
        button.removeAttribute("hidden");
      }
      else{
   
      }
    }
    catch(error)
    {
      alert("Problema al registrar detalle de la orden " + error);
    }
  }