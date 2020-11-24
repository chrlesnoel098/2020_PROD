var section = ('li');

function toggleAccordion() {
  section.removeClass('active');
  (this).addClass('active');
}

section.addEventListener("click", toggleAccordion);