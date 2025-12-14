document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      var id = this.dataset.card;
      document.getElementById('expanded-' + id).style.display = 'block';
    });
  }

  var closeBtns = document.querySelectorAll('.close-btn');
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function(e) {
      e.target.parentElement.style.display = 'none';
    });
  }
});

