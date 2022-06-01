jQuery(document).ready(function ($) {



  $( "#btn" ).click(function() {
   let correo = $('#login_email').val();
   let clave = $('#login_clave').val();

   var sendInfo = {
    "name":correo,
    "password":clave,
   };
    

   getUser();
   loguin(sendInfo);
  });



    /*
   $.ajax({
       url: 'http://localhost:8080/users/loguins',
       dataType: "json",
       method: "POST",
       async: false,       
       contentType: "application/json",
       data: JSON.stringify({sendInfo}),
       complete: function (data) {
       },
       success: function(data){
       },
    });

    $.ajax({
      url: 'http://localhost:8080/users/1',
      dataType: "json",
      async: false,       
      method: "GET",
      contentType: "application/json",
      
      complete: function () {
      },
      success: function(){
      },
   });
  

   */

   // get user with axios 

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
      axios({
        method: 'post',
        url:'http://localhost:8080/users/loguins',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',},
        data: Data
      })
      .then((res) => console.log(res.data))
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
    }
   
});

