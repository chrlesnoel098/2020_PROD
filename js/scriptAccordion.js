// Toggle l'affichage de tous les cours d'une session ////////////////////////////////////////////////////////////
let boutonSessions = document.querySelectorAll(".boutonSession");

for (const elemBouton of boutonSessions) {
    elemBouton.addEventListener("click", function(){
        console.log("ok")
        afficherLesCours(this)
    });
}

function afficherLesCours() {
    console.log("Allo");
    let fenetreDesCours = document.querySelector("div.fenetreCours");
    fenetreDesCours.classList.toggle("cachee");
}

// Toggle l'affichage de la description d'un cours////////////////////////////////////////////////////////////////
let fenetreDescriptionCours = document.querySelectorAll(".descriptionCours h3");
console.log(fenetreDescriptionCours);

for (const elemTitreCours of fenetreDescriptionCours) {
    elemTitreCours.addEventListener("click", function(){
        console.log("ok")
        afficherUnCours(this)
    });
}

function afficherUnCours(elem) {
    elem.parentNode.querySelector("ul").classList.toggle("cachee");
}