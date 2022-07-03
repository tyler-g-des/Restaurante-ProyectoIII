let name = window.localStorage.getItem('name');
let age = window.localStorage.getItem('rol');
const mesa =  document.querySelector('#titulo');

console.log(name, age); 

mesa.addEventListener('click', event => {
    mesaEstados();      
});


const mesaEstados = async () => {
    const response = await axios.get('http://localhost:8080/tablets',{
   });

  let mesaNumber = 1;
  
  for(let i=0; i<=9; i++)
  {
    
    if(response.data[i].status == 'Ocupada')
    {
        document.querySelector('#mesa'+mesaNumber+'-color').setAttribute("class","small-box bg-warning");
        document.querySelector('#mesa'+mesaNumber+'-icono').setAttribute("class","fas fa-concierge-bell");
        mesaNumber ++;
        
    }
     else if(response.data[i].status == 'Fuera')
     {
        document.querySelector('#mesa'+mesaNumber+'-color').setAttribute("class","small-box bg-danger");
        document.querySelector('#mesa'+mesaNumber+'-icono').setAttribute("class","fas fas fa-exclamation-triangle");
        mesaNumber ++;
     }

     else if(response.data[i].status == 'Libre'){
        mesaNumber ++;
     }

     console.log(response.data[i].status);

  }

}
