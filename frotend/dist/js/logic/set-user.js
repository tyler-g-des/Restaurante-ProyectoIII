let botonActualizar = document.querySelector("#botonActualizar");

const campoName = document.querySelector("#campoNombre");
const campoClave = document.querySelector("#campoClave");
const campoEmail = document.querySelector("#campoEmail");
const campoRol = document.querySelector("#campoRol");
const campoTelefono = document.querySelector("#campoTelefono");
const campoDireccion = document.querySelector("#campoDireccion");

campoRol.value = "usuario";

document.addEventListener('DOMContentLoaded', function() {
  applyInputMask('campoTelefono', '(000)');
});

const setUser = async () => {

    try{
       response = await axios.post('http://localhost:8080/users',{
        "name":campoName.value.toLowerCase(),
        "rol":campoRol.value,
        "email":campoEmail.value,
        "address":campoDireccion.value,
        "phone":campoTelefono.value,
        "active":true,
        "password":campoClave.value
      });
  
      localStorage.clear();
  
      localStorage.setItem('id',response.data.id);
      localStorage.setItem('name',response.data.name);
      localStorage.setItem('rol',response.data.rol);
      localStorage.setItem('email',response.data.email);
      localStorage.setItem('phone',response.data.phone);
      localStorage.setItem('address',response.data.address);
      localStorage.setItem('password',response.data.password)
      
      alert("Usuario Registrado");
      window.location.replace("../../pages/order/tomarOrdenes.html"); 
  
    }
    catch(error){
      alert("Problema al enviar datos conexion fallida " + error);
    }
  };

  botonActualizar.addEventListener('click', event => {
    if(campoName.value === "" || campoName.value === null || 
       campoEmail.value === "" || campoEmail.value === null ||
       campoTelefono.value === "" || campoTelefono.value === null ||
       campoRol.value === "" || campoRol.value === null || 
       campoDireccion.value === "" || campoDireccion.value === null)
    {
      alert("Debe llenar todos los campos");
    }
    else if(campoTelefono.value.length != 10 )
    {
       alert("el numero de telefono debe ser igual a 10 digitos")
    }
    else if(campoEmail.value.includes('.') != true || campoEmail.value.includes('@') != true)
    {
       alert("debe colocar el correo ejemplo tony@starkindustries.com")
    }
    else{  
    setUser();
    }
  });