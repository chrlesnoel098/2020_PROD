// Toggle l'affichage de tous les cours d'une session ////////////////////////////////////////////////////////////
let sessionOuverte = null;

let boutonSessions = document.querySelectorAll(".boutonSession");

for (const elemBouton of boutonSessions) {
    elemBouton.addEventListener("click", function(){
        console.log("ok")
        afficherLesCours(this)
    });
}

function afficherLesCours(bouton) {
    console.log("Allo");
    // Fermer la session ouverte
    if(sessionOuverte && sessionOuverte != bouton.parentNode.querySelector("div")) {
        sessionOuverte.classList.add("cachee");
        sessionOuverte.classList.remove("visible");
    }
    
    // Ouvrir une session fermée (qui vient d'être cliquée)
    bouton.parentNode.querySelector("div").classList.add("visible");
    bouton.parentNode.querySelector("div").classList.remove("cachee");

    // Fermer la même session ouverte (qui vient d'être cliquée)
    if(sessionOuverte == bouton.parentNode.querySelector("div")) {
        sessionOuverte.classList.add("cachee");
        sessionOuverte.classList.remove("visible");
    }
    
        
    sessionOuverte = bouton.parentNode.querySelector("div");
    //document.getElementById("DescriptionGenerale").style.display("none");
    
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