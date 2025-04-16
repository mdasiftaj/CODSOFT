// QUOTE SLIDER
    const quotes = document.querySelectorAll('.quote');
    let index = 0;

    function showNextQuote() {
      quotes[index].classList.remove('active');
      index = (index + 1) % quotes.length;
      quotes[index].classList.add('active');
    }

    setInterval(showNextQuote, 4000);

    // MENU TOGGLE
    function toggleMenu() {
      const navLinks = document.getElementById('nav-links');
      navLinks.classList.toggle('active');
    }