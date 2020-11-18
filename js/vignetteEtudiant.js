let slidesIndex = 0; //Declaration de l`index
showSlides(); // appeler la fonction
   
function showSlides() 
{ 
    let i; 
  
    // div caroussel
    let slides = document.getElementsByClassName("image-carousselfade");  
      
    for (i = 0; i < slides.length; i++) { 
        // les images ne sont pas affichier a la base 
        slides[i].style.display = "none";  
    } 
   
     // incrementation de 1 
    slidesIndex++;  
   
     // longueur max
    if (slidesIndex > slides.length)  
    { 
        slidesIndex = 1; 
    } 
   
    slides[slidesIndex - 1].style.display = "flex"; 

    // Change les images 2 secondes
    setTimeout(showSlides, 8000);  
} 