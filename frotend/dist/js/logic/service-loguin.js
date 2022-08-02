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
   
   // Validar si hay orden 
   const validateOrder = async () => {

    try{  
       let order = await axios.get('http://localhost:8080/orders/getOrderActiveLoguin/'+localStorage.getItem('id'),{
     });
        if(order.data == "User order register"){
          alert("Tienes una orden en proceso");
          window.location.replace("pages/wait/inline.html");
        }
        if(order.data == "User order prepared"){
          alert("Tienes una orden preparada");
          window.location.replace("pages/wait/inline.html");
        }
        else{
          window.location.replace("pages/order/tomarOrdenes.html");     
        }
    }
     catch(error){
      alert("Error al obtener informacion intente mas tarde !! " + error);
     }
  };


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
          validateOrder();
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
