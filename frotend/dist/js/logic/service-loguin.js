const boton = document.querySelector('#btn');
const botonRegistrar = document.querySelector("#btnRegistrar");
const formulario = document.querySelector('#loguinForm');
let response;

   //Eventos
   formulario.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Envio del formulario');  
   });
   
   boton.addEventListener('click', event => {
     let usuario = document.querySelector('#login_email').value.trim();
     let clave = document.querySelector('#login_clave').value.trim();
    event.preventDefault();

    loguin(usuario,clave);
   });

   botonRegistrar.addEventListener('click', event => {
    window.location.replace("pages/user/registrarUsuario.html"); 
   });
  
   // LOGIAR
    const loguin = async (name,password) => {

      try{  
        response = await axios.post('http://localhost:8080/users/logins',{
           "name":name,
           "password":password
      });

      if(response.data == 'User signed-in successfully!')
      {
        await dashboardPrepared(name,password);  
        if(localStorage.getItem(name) !== undefined){
          window.location.replace("pages/order/tomarOrdenes.html");     
        }
      }
      else if(response.data == 'Not found')
      {
        alert("usuario no valido");
        await localStorage.clear()
      }
      console.log(response)  
      }

      catch(error){
        alert("Problema al solicitar datos del usuario conexion fallida")
      } 
    }

    const dashboardPrepared = async (name,password) => {
        const response = await axios.post('http://localhost:8080/users/getUserName',{
          "name":name,
          "password":password
        })
          localStorage.setItem('id',response.data.id);
          localStorage.setItem('name',response.data.name);
          localStorage.setItem('rol',response.data.rol);
          localStorage.setItem('email',response.data.email);
          localStorage.setItem('phone',response.data.phone);
          localStorage.setItem('address',response.data.address);
          localStorage.setItem('password',response.data.password);
    }

    let detector = navigator.userAgent;

   alert(detector);
   alert(detector);