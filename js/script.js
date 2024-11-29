// Referências aos elementos
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Quando o usuário clica no botão, o modal será exibido
openModalBtn.onclick = function () {
   modal.style.display = 'block';
}

// Quando o usuário clica no X, o modal será fechado
closeBtn.onclick = function () {
   modal.style.display = 'none';
}

// Se o usuário clicar fora do modal, ele também será fechado
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
}
