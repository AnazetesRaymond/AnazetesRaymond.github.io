const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');
    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
