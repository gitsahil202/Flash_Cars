
const heart1 = document.getElementsByid('heart1');
const heart2 = document.getElementsByid('heart2');
function heartchange(){
    heart1.classList.toggle("deactive");
    heart2.classList.toggle("active");
}