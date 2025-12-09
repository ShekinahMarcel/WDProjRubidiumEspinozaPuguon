document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const cardId = card.dataset.card;
      const expanded = document.getElementById(`expanded-${cardId}`);
      const closeBtn = expanded.querySelector('.close-btn');
  
      card.addEventListener('click', () => {
        expanded.style.display = 'block';
      });
  
      closeBtn.addEventListener('click', () => {
        expanded.style.display = 'none';
      });
    });
  
    // Optional: click outside expanded content to close
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.card-expanded').forEach(expanded => {
        if (expanded.style.display === 'block' &&
            !expanded.contains(e.target) &&
            !document.querySelector(`.card[data-card="${expanded.id.split('-')[1]}"]`).contains(e.target)) {
          expanded.style.display = 'none';
        }
      });
    });
  });
  
  