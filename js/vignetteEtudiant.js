let projetSlidesIndex = 0; //Declaration de l`index
projetShowSlides(); // appeler la fonction
   
function projetShowSlides() 
{ 
    let i; 
  
    // div caroussel
    let slides = document.getElementsByClassName("image-carousselfade");  
      
    for (i = 0; i < slides.length; i++) { 
        // les images ne sont pas affichier a la base 
        slides[i].style.display = "none";  
    } 
   
     // incrementation de 1 
     projetSlidesIndex++;  
   
     // longueur max
    if (projetSlidesIndex > slides.length)  
    { 
        projetSlidesIndex = 1; 
    } 
   
    slides[projetSlidesIndex - 1].style.display = "flex"; 

    // Change les images 2 secondes
    setTimeout(projetShowSlides, 6000);  
} 