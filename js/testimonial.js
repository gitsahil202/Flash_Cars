const testiCards = document.querySelectorAll('.main-testi-card');
    let currentIndex = 0;
    function showNextTestimonial() {
      testiCards[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % testiCards.length;
      testiCards[currentIndex].style.display = 'initial';
    }
    testiCards[currentIndex].style.display = 'initial';
    setInterval(showNextTestimonial, 5000);