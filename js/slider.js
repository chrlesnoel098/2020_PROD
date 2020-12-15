/*
 * fichier slider.js fait par Alejandra Miranda Reyes
 * 
 * Gère l'affichage des photos dans lle carrousel à l'aide des flèches gauche/droit clickeables 
 *
 */

//carrousel statique
var slideIndex = 1;
showSlides(slideIndex);

// Contrôles suivant et précédent
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Commandes des images miniatures
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

    
   
    