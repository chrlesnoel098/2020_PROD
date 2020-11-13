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
const sections = document.querySelectorAll('h1'); // la position qui s`index.

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('liensActif')); // remove .active
  links[index].classList.add('liensActif'); // ajout .active


}

changeLinkState(); // appel fonction
window.addEventListener('scroll', throttle(changeLinkState), 1000); // appel event