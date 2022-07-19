document.querySelector("#nombreUsuario").textContent = localStorage.getItem('name');

const campoName = document.querySelector("#campoNombre");
const campoEmail = document.querySelector("#campoEmail");
const campoRol = document.querySelector("#campoRol");

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

    console.log(response.data)
    
    campoName.value = response.data.name;
    campoEmail.value = response.data.email;
    campoRol.value = response.data.rol;
  }
  catch(error){
    alert("Problema al solicitar datos del usuario conexion fallida " + error);
  }
};

getUser();

/*
campoName.textContent = response.promiseResult.data.name;
campoRol.textContent = response.data.rol;
campoEmail.textContent = response.data.email;
*/
