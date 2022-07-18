let name = localStorage.getItem('name');
let rol = localStorage.getItem('rol');
let email = localStorage.getItem('email');
let response;

console.log(name + " " + rol + " " + email)

const getUser = async (name,rol,email) => {

     response = await axios.post('http://localhost:8080/users/getUserComplete',{
      "name":name,
      "rol":rol,
      "email":email
    });
    console.log(response);
};

getUser();