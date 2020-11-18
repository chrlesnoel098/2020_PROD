let etSlideIndex = 0; //Declaration de l`index
etShowSlides(); // appeler la fonction
   
function etShowSlides() 
{ 
    let a; 
  
    // div caroussel
    let etSlides = document.getElementsByClassName("image-carousselfade");  
      
    for (a = 0; a < etSlides.length; a++) { 
        // les images ne sont pas affichier a la base 
        etSlides[i].style.display = "none";  
    } 
   
     // incrementation de 1 
    etSlideIndex++;  
   
     // longueur max
    if (etSlideIndex > etSlides.length)  
    { 
        etSlideIndex = 1; 
    } 
   
    etSlides[etSlideIndex - 1].style.display = "block"; 

    // Change les images 2 secondes
    setTimeout(etShowSlides, 8000);  
} 