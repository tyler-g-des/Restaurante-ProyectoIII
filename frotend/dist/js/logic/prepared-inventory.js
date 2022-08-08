let menu = document.getElementById("cuerpoMenu");
let response;
let editarPlato;
let btnGuardarPlato =  document.getElementById("guardarPlato");

let nombre= document.getElementById("cambiarNombre");
let precio= document.getElementById("cambiarPrecio");
let tipo= document.getElementById("tipoPlato");
let idPlato;

const muestrame =  (id) => {
  id = (id+1);
  idPlato = id;
}

const cargarMenu = async () => {

  try{
    response = await axios.get('http://localhost:8080/plates',{  
    });

    for(let i=0; i<=response.data.length-1; i++){       

        menu.innerHTML += 
        "<tr id='columna"+i+"'"+">"+
        "<td id='registro"+i+"'"+">" + response.data[i].id + "</td>" + 
        "<td>" + response.data[i].dish + "</td>" + 
        "<td>" + response.data[i].price + " </td>" + 
        "<td> " + response.data[i].dishDescription + " </td>" +
        "<td class='project-actions text-right'> " + 
          " <a class='btn btn-info btn-sm' data-toggle='modal' data-target='#exampleModal' onclick='muestrame("+i+")'" +
            " <i class='fas fa-pencil-alt'></i> Edit </a> "+
           " <a class='btn btn-danger btn-sm' href='#'> "+
           " <i class='fas fa-trash'></i> Delete </a> "+
        "</td>" +
        "</tr>";
    }
  }
  catch(error)
  {
    alert(error)
  }
} 


btnGuardarPlato.addEventListener('click',event => {
actualizarPlato();
});


const actualizarPlato = async () => {

 if(nombre.value === "" || nombre.value === null ||
    precio.value === "" || precio.value === null )
 {
  alert("debe llenar todos los campos");
}
else{
  try{
    user = await axios.post('http://localhost:8080/plates',{
      "id":idPlato,
      "dish": nombre.value,
      "price": precio.value,
      "dishDescription": tipo.value
    });
    location.reload();
  }
  catch(error){
   alert(error)
  }
}
}