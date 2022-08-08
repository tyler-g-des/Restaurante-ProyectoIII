let cuerpoTabla = document.querySelector("#cuerpoTabla");
let cuerpoTablaPrecio = document.querySelector("#cuerpoTablaPrecio");

document.querySelector("#nombreUsuarioFactura").textContent = localStorage.getItem('name');

document.querySelector("#correoUsuario").textContent = "Email: " + localStorage.getItem('email');
document.querySelector("#numeroTelefono").textContent = "Phone: " + localStorage.getItem('phone');
document.querySelector("#direccion").textContent = localStorage.getItem('address');

let fecha = new Date();
let hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
document.getElementById("fechaFacturacion").value =  fecha.toJSON().slice(0,10);

let name = localStorage.getItem('name');
let rol = localStorage.getItem('rol');
let email = localStorage.getItem('email');
let response;
let response2;

const getUser = async () => {

  try{
     response = await axios.post('http://localhost:8080/users/getUserComplete',{
      "name":name,
      "rol":rol,
      "email":email
    });

    localStorage.setItem('phone',response.data.phone);
    localStorage.setItem('address',response.data.address);
  }
  catch(error){
    alert("Problema al solicitar datos del usuario conexion fallida " + error);
  }
};
getUser();

const getOrdenDetail = async () => {
  let plato;
  let precio;

  try{
    response2 = await axios.get('http://localhost:8080/orderDetails',{  
    });

    plato = await axios.get('http://localhost:8080/plates',{
    });


    for(let i=0; i<=response2.data.length-1; i++)
    {       
           
       for(let ii=0; ii<= plato.data.length-1; ii++)
       {
         if(plato.data[ii].dish === response2.data[i].plato)
         {
          precio = plato.data[ii].price;
         }
       }
       console.log(precio)

      cuerpoTabla.innerHTML += "<td>" + "1" + "</td>" + "<td>" + response2.data[i].plato + " " + precio + "</td>"  + 
      "<td>" + response2.data[i].bebida + "</td>"  +  "<td>" + response2.data[i].postre + "</td>" +
      "<td>" + response2.data[i].price + "</td>"; 
    }

    console.log(response2)
  }
  catch(error){
    alert("Problema al solicitar datos del usuario conexion fallida " + error);
  }
};


const obtenerPrecios = async () => 
{
 let plato;
 plato = await axios.get('http://localhost:8080/plates',{
 });

 for(let i=0; i<= plato.data.length-1; i++)
 {
   if(plato.data[i].dish === name){
       precio = plato.data[i].price;
   }
 }

 for(let i=0; i<=response2.data.length-1; i++){       
  cuerpoTablaPrecio.innerHTML += "<tr> <th>" + "Prueba:" + "<th/> <td>" + "$1000" + "<td/> </tr>" +
                                "<tr> <th>" + "Prueba:" + "<th/> <td>" + "$1000" + "<td/> </tr>" 
 }

};

getOrdenDetail();
//obtenerPrecios()
