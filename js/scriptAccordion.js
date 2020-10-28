// Toggle l'affichage de tous les cours d'une session
function afficherLesCours() {
    console.log("Allo");
    let fenetreDesCours = document.querySelector("div.fenetreCours");
    fenetreDesCours.classList.toggle("cachee");
}

// Toggle l'affichage de la description d'un cours
let fenetreDescriptionCours = document.getElementsByClassName("h3.titreCours");
fenetreDescriptionCours.addEventListener("click", afficherUnCours);


function afficherUnCours() {
    console.log("Allo");
    let descriptionCours = document.querySelector("section.descriptionCours ul");
    descriptionCours.classList.toggle("cachee");
}