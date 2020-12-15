/**
 * 
 * Fichier navProjet.js
 * 
 * Auteur: Charles Noël
 * 
 * Description: Faire basculer la class selon la section, le titre des sections pour déclencher les animations en css
 * 
 * Librairie: jQuery, l'utilisation de la bibliothèque jQuery a été abandonnée lors de la production, d'où la raison de ce script seul. 
 * Note: Le reste des fichiers resteront en pure Javascript
 * 
 */

 // référence au li de la section projetAccordeon
let section = $('#projetAccordeon li');

/**

  * Description: Basculer la class .projetActive sur les li de la section projetAccordeon pour activer l'animation css
  *
  * @param {function} projetShowSlides fonction projetShowSlides qui fait basculer la class .projetActive
  * @param {let} section variable section globale qui réfère à liste de projetAccordeon de la section projet
  * 
  * @param {return} default return default
  * 
  */

function toggleAccordion() {
  // on enlève la class
  section.removeClass('projetActive');
  // on rajoute la class
  $(this).addClass('projetActive');
}

// Appel de l'évènement click quand on click sur la section 
section.on('click', toggleAccordion);