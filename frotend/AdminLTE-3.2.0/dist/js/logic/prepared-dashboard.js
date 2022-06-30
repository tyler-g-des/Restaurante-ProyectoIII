let name = window.localStorage.getItem('name');
let age = window.localStorage.getItem('rol');

console.log(name, age); 

let mesa =  document.querySelector('#mesa1');


mesa.addEventListener('load', event => {
    console.log('kdkkk');
    event.preventDefault();
    console.log('sadda');
    mesaEstados();  
});


console.log('fadsfds');

const mesaEstados = async () => {
    const response = await axios.get('http://localhost:8080/tablets',{
   });
   console.log(response);
}