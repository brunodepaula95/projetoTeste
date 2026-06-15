const botaoAtivar = document.querySelector('.botao')
const botaoAtivarIcone = document.querySelector('.botao i')
const dropDownMenu = document.querySelector('.dropdown_menu')

botaoAtivar.onclick = function () {
    // 1. O JS faz uma pergunta ao navegador:
    if (dropDownMenu.classList.contains('open')) {
        
        // 2. Se a resposta for VERDADEIRO (o menu está aberto):
        dropDownMenu.classList.remove('open'); // Ele remove a etiqueta
        botaoAtivarIcone.classList = 'fa-solid fa-rocket'; // Volta o ícone original
        
    } else {
        
        // 3. Se a resposta for FALSO (o menu está fechado):
        dropDownMenu.classList.add('open');    // Ele coloca a etiqueta
        botaoAtivarIcone.classList = 'fa-solid fa-xmark'; // Troca para o ícone de fechar
        
    }
}


const btn = document.getElementById('dark-mode');

btn.onclick = function (){
  document.body.classList.toggle('dark-mode');
}


const botaoFoguete = document.querySelector('.topo');

window.onscroll = function () {
    if(window.scrollY > 100){
        botaoFoguete.style.opacity = '1'
        botaoFoguete.style.pointerEvents = 'auto'
    } else {
        botaoFoguete.style.opacity = '0'
        botaoFoguete.style.pointerEvents = 'none'
    }
}


