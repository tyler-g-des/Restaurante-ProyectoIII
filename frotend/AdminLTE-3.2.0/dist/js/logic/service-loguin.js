const boton = document.querySelector('#btn');
const formulario = document.querySelector('#loguinForm');

   formulario.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Envio del formulario');  
   });
   
   boton.addEventListener('click', event => {
     let usuario = document.querySelector('#login_email').value;
     let clave = document.querySelector('#login_clave').value;
    event.preventDefault();

      datos = {
        "name":usuario,
        "password":clave
       };
      
    loguin(datos);
   });

   //get user with axios 
   getUser = () => {
     axios({
       method: 'get',
       url: 'http://localhost:8080/users',
       headers: {
       'Access-Control-Allow-Origin' : '*',
       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
       'Access-Control-Allow-Headers':'Content-Type, Authorization,*',},
     }).then(res => console.log(res))
     .catch((err) => console.log(err));
    };

    
      loguin = async function (Data)  {
      let response = null;
       await axios({
        method: 'post',
        url:'http://localhost:8080/users/loguins',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',},
        data: Data
      })
      .then((res) => console.log(responde=res.data))
      .catch((err) => console.log(err));
       if(response != null)
       {
        window.location.href = "index.html";
       }
       else{
        //window.location.href = "index3.html";
       }
        
    };
   
