var acc = document.getElementsByClassName("boutonAfficheFenetre");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between hiding and showing the active panel */
        var fenetre = document.getElementsByClassName("fenetreCours");
        if (fenetre.style.display === "flex") {
            fenetre.style.display = "none";
        } else {
            fenetre.style.display = "flex";
        }
  });
}