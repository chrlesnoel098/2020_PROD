/**
 * 
 * Fichier ScrollAnim.js
 * 
 * Auteur: Charles Noël
 * 
 * Description: Fichier qui gère les ancrages de la navigation 
 * et correction de la vitesse de navigation
 * 
 * Event : L'évènement scroll calcul de valeur en Y + appel Throttle,
 * 
 */



/**
 * Description: L'évènement scroll qui calcul la valeur en Y et l'associe au style body
 *  
 * @param {event} changerEtatLiens L'évènement scroll calcul de valeur en Y
 * @param {return} false return false
 * 
 * Style : Body 
 * 
 */

// appelation de l'évènement scroll
window.addEventListener('scroll', () => {
  // association de la propriété scroll Y en valeur au Body, ajustement fait par css avec l'appelation --scroll
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


/**
 * 
 * Description: La limitation et l'anti-rebond nous permettent de contrôler la vitesse à laquelle une fonction est appelée.
 * 
 * 
 * @see https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf Référence utilisée.
 * 
 */

// ajustement du scroll, simple correction throttle.
const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}


/**

  * Description: Faire basculer la class selon la section, le titre des sections pour déclencher les animations en css
  *
  * @param {function} changerEtatLiens Change l'état des liens en basculer la class .liensActif ou .bgBlue
  * @param {const} liens class ciblé des liens de la navigation
  * @param {const} h1s class ciblé des titres des sections
  * @param {const} sections class ciblé des sections 
  * 
  * @param {return} default return default
  * 
  */

// ce qui fait fonctionner les references
const liens = document.querySelectorAll('.links'); // la class a cibler pour ajouter active apres.
const h1s = document.querySelectorAll('h1'); // la position qui s`index.
const sections = document.querySelectorAll('header>h1, section#Programme, section#Professeur, section#Projet, section#Stage, section#Evenement'); // la position qui s`index.

function changerEtatLiens() {
  let indexLink = h1s.length; // nombre de liens
  let indexSection = sections.length; // nombre de sections

  while (--indexLink && window.scrollY + 50 < h1s[indexLink].offsetTop) { }

  liens.forEach((link) => link.classList.remove('liensActif')); // remove .active
  liens[indexLink].classList.add('liensActif'); // ajout .active

  while (--indexSection && window.scrollY + 50 < sections[indexSection].offsetTop) { }

  sections.forEach((section) => section.classList.remove('bgBlue')); // remove .active
  sections[indexSection].classList.add('bgBlue'); // ajout .active
}

changerEtatLiens(); // appel fonction
window.addEventListener('scroll', throttle(changerEtatLiens), 1000); // appel de l'évènement scroll avec le throttle* sur la fonction changerEtatLiens avec un delai
