jQuery(document).ready(function ($) {

   

  $( "#btn" ).click(function() {


    let correo = $('#login_email').val();
    let clave = $('#login_clave').val();

    var sendInfo = {
     "name":correo,
     "password":clave,
    }



    /*
   var button = document.getElementById('btn');
    if(button.classList.contains('ripple-surface')){
      console.log("no llamar")
      console.log(button)
      getUser()
    }

    if(button.classList.contains('ripple-surface') != true){
      loguinInvoke()
    }
 */
    /*
    else{
      window.location.href = "index.html";
    }
    */
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

    loguin = (Data) => {

      let status;
      axios({
        method: 'post',
        url:'http://localhost:8080/users/loguins',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',},
        data: Data
      })
      .then((res) => console.log(res.data))
      .then((res => { 
       if((res) === 'User signed-in successfully!')
       {
        window.location.href = "index.html";
       }
        }))
       .catch((err) => console.log(err))

    };
   
});