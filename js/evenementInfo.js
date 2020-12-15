/*
  Fichier JS qui anime le carousel d'évènement
  Auteur : Lauryan Gervais
  Version 14/12/2020
*/

// Variable indiquant à quel information nous sommes
let infoIndex = 0;

// Appel la fonction
carouselInfo();

function carouselInfo() {
  // Sélectionne toutes les classe infoCarousel
  let infos = document.querySelectorAll(".infoCarousel");

  // Pour chaque information, on les display none
  for (var unInfo of infos) {
    unInfo.style.display = "none";
  }
  
  // Affiche l'information selon l'index
  if (infoIndex <= infos.length) {
      infos[infoIndex].style.display = "block";
      infoIndex++;
  }

  // Si l'infoIndex est plus grand que le tableau info, on recommence à zéro
  if(infoIndex >= infos.length) {
    infoIndex = 0;
  }

  // Appel la fonction à toutes les 30 secondes
  setTimeout(carouselInfo, 30000);
}
