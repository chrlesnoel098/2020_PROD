
let choixDuProf = null; // au debut pas de prof choisi 

const listeProf = document.querySelectorAll(".choix-prof"); //conserver le id du choix de prof 
const listeProfafficher = document.querySelectorAll(".afficher-prof"); // passer le id du prof a afficher 
/*
function permet de choisir un nom de professuer et faire appatraitre les infos du professeur choisi


*/
    
for (const leProf of listeProf) {
    leProf.addEventListener("click", function(){
    
        afficherUnProf(this);
    });
}

    // mettre le id du professeur pour pouvoir le choisir 
 function afficherUnProf(elmProf){
    let idProf = elmProf.getAttribute("data-prof");
    let detailProf = document.getElementById("prof" + idProf);
    
    // Fermer la vignette du professeur 
for (const unProf of listeProfafficher) {

        unProf.style.display = "flex";
    }

    // pour choisir un prof different
for (const unProf of listeProfafficher) {
    if (unProf.id != "prof"+idProf && unProf.id != "") {

        // console.log(elmProf.id, "elmprof");
        // console.log(unProf.id, "unprof");

        unProf.style.display = "none";
        elmProf.style.color = "darkgray";
    }
}
    //afficher un prof qui vient d'être cliqué
    detailProf.style.display = "flex";
    elmProf.style.color = "white";
  
    // Fermer la même session ouverte (qui vient d'être cliquée)
    choixDuProf=elmProf.querySelector("afficher-prof");
 }
