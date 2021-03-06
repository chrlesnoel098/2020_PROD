/*
    Fichier JS qui toggle l'affichage de la liste de cours et de la description des cours
    Auteur : Lauryan Gervais
    Version 14/12/2020
*/

var sectionSession = $('li.session');

function toggleAccordion() {
    sectionSession.removeClass('coursActive');
  $(this).addClass('coursActive');
}

sectionSession.on('click', toggleAccordion);

// Toggle l'affichage de la description d'un cours////////////////////////////////////////////////////////////////
let coursOuvert = null;
let fenetreDescriptionCours = document.querySelectorAll(".descriptionCours h3");

for (const elemTitreCours of fenetreDescriptionCours) {
    elemTitreCours.addEventListener("click", function(){
        afficherUnCours(this)
    });
}



function afficherUnCours(elem) {

    // Fermer le cours ouvert
    if(coursOuvert && coursOuvert != elem.parentNode.querySelector("ul")) {
        coursOuvert.classList.add("coursCachee");
        coursOuvert.classList.remove("coursVisible");
    }
    
    // Ouvrir cours fermée (qui vient d'être cliquée)
    elem.parentNode.querySelector("ul").classList.add("coursVisible");
    elem.parentNode.querySelector("ul").classList.remove("coursCachee");

    // Fermer le même cours   (qui vient d'être cliquée)
    if(coursOuvert == elem.parentNode.querySelector("ul")) {
        coursOuvert.classList.add("coursCachee");
        coursOuvert.classList.remove("coursVisible");
    }
        
    coursOuvert = elem.parentNode.querySelector("ul");
}



//Toggle l'affichage de tous les cours d'une session ////////////////////////////////////////////////////////////
// let sessionOuverte = null;

// let boutonSessions = document.querySelectorAll(".session");

// for (const elemBouton of boutonSessions) {
//     elemBouton.addEventListener("click", function(){
//         afficherLesCours(this)
//     });
// }

// function afficherLesCours(bouton) {
//     //Fermer la session ouverte
//     if(sessionOuverte && sessionOuverte != bouton.parentNode.querySelector(".fenetreCours")) {
//         sessionOuverte.classList.add("cachee");
//         sessionOuverte.classList.remove("visible");
//     }
    
//     // Ouvrir une session fermée (qui vient d'être cliquée)
//     bouton.parentNode.querySelector(".fenetreCours").classList.add("visible");
//     bouton.parentNode.querySelector(".fenetreCours").classList.remove("cachee");

//     // Fermer la même session ouverte (qui vient d'être cliquée)
//     if(sessionOuverte == bouton.parentNode.querySelector(".fenetreCours")) {
//         sessionOuverte.classList.add("cachee");
//         sessionOuverte.classList.remove("visible");
//     }
        
//     sessionOuverte = bouton.parentNode.querySelector(".fenetreCours");
// }