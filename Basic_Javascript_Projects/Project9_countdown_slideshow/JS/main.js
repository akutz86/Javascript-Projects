function countdown(){ //define function countdown
    var seconds = document.getElementById("seconds").value; //define variable seconds, starting at value entered by user
    
    function tick() { //define nested function tick
        seconds = seconds - 1; //countdown by seconds -1
        timer.innerHTML = seconds; 
        var time = setTimeout(tick, 1000); //program pause for 1,000 milliseconds (1 second)
        if (seconds == -1) { //conditional statment, if seconds reaches -1 run subfunction
            alert("Time's up!"); //pop up alert after timer reaches 0
            clearTimeout(time); //time cleared
            timer.innerHTML = ""; 
        }
    }
    tick(); //loop back through nested function until conditional statement is no longer met
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
