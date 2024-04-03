// import 'boxicons'

const darkMode = document.getElementById('input-dark-mode');

darkMode.addEventListener('click', () => {
console.log("hola");    
})


const texto = "Hola mi nombre es Freud Ovando y soy full Stack Developer";

let index = 0;

function escribirTexto() { 
  document.getElementById('text-profile').innerText = texto.slice(0, index);
  index++;
  if (index > texto.length) {
    clearInterval(intervalo);
    setTimeout(() => {
      index = 0;
      intervalo = setInterval(escribirTexto, 100);
    }, 2500); 
  }
}

let intervalo = setInterval(escribirTexto, 100);
