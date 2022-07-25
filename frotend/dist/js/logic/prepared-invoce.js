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

