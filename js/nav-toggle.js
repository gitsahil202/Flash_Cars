const nbtn = document.getElementById('nav-toggle');
const nlnk = document.getElementById('navlinks');
const nav=document.getElementById('nav');


nbtn.addEventListener('click', () => {
    nlnk.classList.toggle("active");
    nav.classList.toggle('active');
    });