var slideIndex = 0; //Declaration de l`index
showSlides(); // appeler la fonction
   
function showSlides() 
{ 
  
    // div caroussel
    var slides = document.getElementsByClassName("prof-vignette");  
      
    for (let i = 0; i < slides.length; i++) { 
        // les images ne sont pas affichier a la base 
        slides[i].style.display = "none";  
    } 
   
     // incrementation de 1 
    slideIndex++;  
   
     // longueur max
    if (slideIndex > slides.length)  
    { 
        slideIndex = 1; 
    } 
   
    slides[slideIndex - 1].style.display = "block"; 

    // Change les images 2 secondes
    setTimeout(showSlides, 8000);  
} 