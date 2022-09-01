//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;



//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarResultado(); // muestra los autos al cargar



    // llena las opciones de anhos
    llenarSelect();
})

// Funciones
function mostrarResultado(){
    
  autos.forEach(auto => {
    const {marca, modelo, year, puertas, transmision, precio, color} = auto;
    const autoHtml = document.createElement('p');

    autoHtml.textContent = `
         ${marca} ${modelo} -${year} - ${puertas} - ${transmision} - ${precio} - ${color}
    `;

      resultado.appendChild(autoHtml);
  });
};

//Genera los amhos del select
for(let i = max; max >= min; i--){
  const options = document.createElement('option');
  
  options.value = i;
  options.textContent = i;

  year.appendChild(options);
}