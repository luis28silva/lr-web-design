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

      // Carrega as imagens lazy do modal agora que foi aberto
      modalBody.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
      });

      modal.className = 'modal';
      modal.classList.add(id);
      modal.style.display = 'flex';
    }
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
  }
});