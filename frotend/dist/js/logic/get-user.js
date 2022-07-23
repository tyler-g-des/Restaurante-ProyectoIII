document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');

let botonActualizar = document.querySelector("#botonActualizar");

const campoName = document.querySelector("#campoNombre");
const campoEmail = document.querySelector("#campoEmail");
const campoRol = document.querySelector("#campoRol");
const campoTelefono = document.querySelector("#campoTelefono");
const campoDireccion = document.querySelector("#campoDireccion");

let id = localStorage.getItem('id');
let name = localStorage.getItem('name');
let rol = localStorage.getItem('rol');
let email = localStorage.getItem('email');
let address = localStorage.getItem('address');
let phone = localStorage.getItem('phone');
let password = localStorage.getItem('password');
let response;

const getUser = async () => {
  try{
     response = await axios.post('http://localhost:8080/users/getUserComplete',{
      "name":name,
      "rol":rol,
      "email":email
    });

    console.log(response.data)
    
    campoName.value = response.data.name;
    campoEmail.value = response.data.email;
    campoRol.value = response.data.rol;
    campoTelefono.value = response.data.phone;
    campoDireccion.value = response.data.address;
  }
  catch(error){
    alert("Problema al solicitar datos del usuario conexion fallida " + error);
  }

};

const setUser = async () => {
  try{
     response = await axios.post('http://localhost:8080/users',{
      "id":id,
      "name":campoName.value,
      "rol":rol,
      "email":campoEmail.value,
      "address":campoDireccion.value,
      "phone":campoTelefono.value,
      "active":true,
      "password":password
    });

    localStorage.clear();

    localStorage.setItem('id',response.data.id);
    localStorage.setItem('name',response.data.name);
    localStorage.setItem('rol',response.data.rol);
    localStorage.setItem('email',response.data.email);
    localStorage.setItem('phone',response.data.phone);
    localStorage.setItem('address',response.data.address);
    
    alert("Datos actualizados");
    window.location.replace("editarUsuario.html");     

  }
  catch(error){
    alert("Problema al enviar datos conexion fallida " + error);
  }
};


getUser();


botonActualizar.addEventListener('click', event => {
  if(campoName.value === "" || campoName.value === null || 
     campoEmail.value === "" || campoEmail.value === null ||
     campoTelefono.value === "" || campoTelefono.value === null ||
     campoRol.value === "" || campoRol.value === null || 
     campoDireccion.value === "" || campoDireccion.value === null)
  {
    alert("Debe llenar todos los campos");
  }else{  
  setUser();
  }
});