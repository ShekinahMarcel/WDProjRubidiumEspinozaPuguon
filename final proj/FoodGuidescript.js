document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.gallery .card');

  cards.forEach(function(card, index) {
    card.dataset.card = index + 1; 
    card.addEventListener('click', function() {
      var id = this.dataset.card;
      var expanded = document.getElementById('expanded-' + id);
      if (expanded) {
        expanded.style.display = 'block';
        expanded.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  var closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
    });
  });
});
