/* test d'accordéon */

var section = $('#projetAccordeon li');

function toggleAccordion() {
  section.removeClass('projetActive');
  $(this).addClass('projetActive');
}

section.on('click', toggleAccordion);