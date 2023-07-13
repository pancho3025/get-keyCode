
const title = document.querySelector('.title');
const textos = document.querySelectorAll('.xd')

window.addEventListener('keydown',(e)=>{
  title.style.display = 'none';
  textos[0].innerHTML = e.key;
  textos[1].innerHTML = e.keyCode;
  textos[2].innerHTML = e.code;
})