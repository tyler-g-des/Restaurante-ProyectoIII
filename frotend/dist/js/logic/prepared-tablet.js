document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');

const mesa =  document.querySelector('#titulo');
let response;

//Mesas redirecciones 
let mesa1 = document.querySelector("#mesa1-redireccion");

mesa1.addEventListener('click', event => {
    if(document.querySelector('#mesa1-color').className.includes("bg-warning"));
    {
        if (window.confirm("La orden de esta mesa esta lista?")) {
            prepararOrden(1);
          }
    }
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
  
     console.log(mesaSelect.data)
     console.log(order.data.length);
     console.log(order.data[0].table)

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
        }
      }
     } 
     alert("Orden entregada");
      window.location.replace("../wait/inline.html"); 
    }
    catch(error)
    {
      if(error == "TypeError: Cannot read properties of null (reading 'id')" || error == "TypeError: Cannot read properties of undefined (reading 'table')"){
          alert("Orden entregada");
          window.location.replace("../wait/inline.html"); 
      }else{
      alert("Problema alactualizar la mesa " + error);
      }
    }
  }


const mesaEstados = async () => {

    try {
         response = await axios.get('http://localhost:8080/tablets',{
        });
    } catch (error) {
        console.log("aqui " + error)
       // if(error.includes("Network Error")){
           alert("Problema al solicitar datos de la Mesas")
       // }
    }

  let mesaNumber = 1;
  
  for(let i=0; i<=9; i++)
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
