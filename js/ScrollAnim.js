window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

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

// ce qui fait fonctionner tes references

const links = document.querySelectorAll('.links'); // la class a cibler pour ajouter active apres.
const h1s = document.querySelectorAll('h1'); // la position qui s`index.
const sections = document.querySelectorAll('header>h1, section#Programme, section#Professeur, section#Projet, section#Stage, section#Evenement'); // la position qui s`index.

function changeLinkState() {
  let indexLink = h1s.length;
  let indexSection = sections.length;

  while (--indexLink && window.scrollY + 50 < h1s[indexLink].offsetTop) {}

  links.forEach((link) => link.classList.remove('liensActif')); // remove .active
  links[indexLink].classList.add('liensActif'); // ajout .active

  while (--indexSection && window.scrollY + 50 < sections[indexSection].offsetTop) {}

  // sections.forEach((section) => section.classList.remove('bgBlue')); // remove .active
  sections[indexSection].classList.add('bgBlue'); // ajout .active


}

changeLinkState(); // appel fonction
window.addEventListener('scroll', throttle(changeLinkState), 1000); // appel event