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

      
     loguin(usuario,clave);
   });

  
    
    const loguin = async (name,password) => {
       const response = await axios.post('http://localhost:8080/users/loguins',{
           "name":name,
           "password":password
      })

      if(response.data == 'User signed-in successfully!')
      {
       window.location.href = "dashboard.html";
      }
      else if(response.data == 'Not found')
      {
        alert("usuario no valido");
      }
      console.log(response)
    }

    /*
    loguins = async function (Data)  {
        axios({
        method: 'post',
        url:'http://localhost:8080/users/loguins',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',},
        data: Data
      })
      .then(res => {
        response = res.data;
        if(res.data == 'User signed-in successfully!')
        {
          console.log(res.data);
        // window.location.href = "dashboard.html";
        }
        if(res.data == 'Not found')
        {
          alert("usuario no valido");
          console.log('log antes de llamada ' + response);
        }
      })
      .catch(err =>{
        console.log(err);
        console.log(err.message);
      });
    };

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
   */

   
