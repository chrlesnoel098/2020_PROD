/**
 * 
 * Fichier vignetteEtudiant.js
 * 
 * Auteur: Charles Noël
 * 
 * Description: Fichier qui gère l'animation fade in automatique du caroussel vie étudiante, du texte descriptif aussi
 * 
 */

 
/**

  * Description: Active le display flex des éléments cachés avec un delai
  *
  * @param {function} projetShowSlides Active le display flex avec un delai de 6000 millisecondes
  * @param {let} projetSlidesIndex class ciblé des liens de la navigation
  * 
  * @param {return} default return default
  * 
  */

let projetSlidesIndex = 0; //Declaration de l`index
projetShowSlides(); // appeler la fonction
   
function projetShowSlides() 
{ 
    let i; // incrémentation de la boucle for
  
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
        // si l'index de la carte dépasse la longuer des cartes on retourne au début
        projetSlidesIndex = 1; 
    } 
   
    slides[projetSlidesIndex - 1].style.display = "flex"; 

    // Change les images 2 secondes
    setTimeout(projetShowSlides, 6000);  
} 