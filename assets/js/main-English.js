const darkMode = document.getElementById('input-dark-mode');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode'); 
})


const texto = "Hi, my name is Freud Ovando and I am full stack developer";

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





const imgElements = document.querySelectorAll('.profile__programs .programs__img');

function showImages() {
  
    imgElements.forEach((img, index) => {
        
        setTimeout(() => {
            img.style.display = 'flex';
        }, index * 1000); 
    });
}

showImages();