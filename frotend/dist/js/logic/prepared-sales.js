let menu = document.getElementById("cuerpoMenu");
let menuDetalle = document.getElementById("cuerpoDetalle")
let response;
let responseDetail;

let idOrden;

const muestrame =  (id) => {
  id = (id+1);
  idOrden = id;
  cargarDetalles(idOrden);
}

const cargarMenu = async () => {

  try{
    response = await axios.get('http://localhost:8080/orders',{  
    });

    for(let i=0; i<=response.data.length-1; i++){       

        menu.innerHTML += 
        "<tr id='columna"+i+"'"+">"+
        "<td id='registro"+i+"'"+">" + response.data[i].id + "</td>" + 
        "<td>" + response.data[i].user.name + " </td>" + 
        "<td>" + response.data[i].date + "</td>" + 
        "<td> " + response.data[i].totalOrder + " </td>" +
        "<td> " + response.data[i].statusOrder + " </td>" +
        "<td> " + response.data[i].table.id + " </td>" +
        "<td class='project-actions text-right'> " + 
          " <a class='btn btn-primary btn-sm' href='#' data-toggle='modal' data-target='#exampleModal' onclick='muestrame("+i+")'"  + "> "+
          " <i class='fas fa-folder'></i> View </a> "+
        "</td>" +
        "</tr>";
    }
  }
  catch(error)
  {
    alert("problema al cargar ventas " +  error)
  }
} 


const cargarDetalles = async (idOrden) => {

    try{
        responseDetail = await axios.get('http://localhost:8080/orderDetails',{  
      });
      console.log(responseDetail);
      
      for(let i=0; i<=responseDetail.data.length-1; i++){       
      if(responseDetail.data[i].order.id == idOrden){
          
        menuDetalle.innerHTML += 
        "<tr id='columna"+i+"'"+">"+
        "<td id='registro"+i+"'"+">" + responseDetail.data[i].id + "</td>" + 
        "<td>" + responseDetail.data[i].plato + " </td>" + 
        "<td>" + responseDetail.data[i].bebida + "</td>" + 
        "<td> " + responseDetail.data[i].postre + " </td>" +
        "</tr>";
       }
      }
      
    }
    catch(error)
    {
      alert("problema al cargar ventas " +  error)
    }
}