const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const fechar = document.querySelector('#modal .fechar');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');

    const conteudo = document.getElementById('projeto-' + id);

    if (conteudo) {
      modalBody.innerHTML = conteudo.innerHTML;

      // limpa classes antigas
      modal.className = 'modal';

      // adiciona classe do projeto
      modal.classList.add(id);

      modal.style.display = 'flex';
    }
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar ao clicar fora da caixa branca
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Fechar com a tecla ESC
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});