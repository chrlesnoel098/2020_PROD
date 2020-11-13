
let choixDuProf = null;

const listeProf = document.querySelectorAll(".choix-prof");
const listeProfafficher = document.querySelectorAll(".afficher-prof");

//document.addEventListener('onClick', choixProf);      
for (const leProf of listeProf) {
    leProf.addEventListener("click", function(){
       // console.log("ok");
        afficherUnProf(this);
    });
}


 function afficherUnProf(elmProf){
    let idProf = elmProf.getAttribute("data-prof");
    let detailProf = document.getElementById("prof" + idProf);
    
    //console.log("Allo");
    // Fermer la vignette du professeur 
for (const unProf of listeProfafficher) {

        unProf.style.display = "flex";
        
    }

for (const unProf of listeProfafficher) {
    if (unProf.id != "prof"+idProf) {

        console.log(elmProf.id, "elmprof");
        console.log(unProf.id, "unprof");

        unProf.style.display = "none";
        elmProf.style.color = "gray";
    }
}
    //Ouvrir une session fermée (qui vient d'être cliquée)
    detailProf.style.display = "flex";
    elmProf.style.color = "white";

    
    

        
    
    // Fermer la même session ouverte (qui vient d'être cliquée)
    choixDuProf=elmProf.querySelector("afficher-prof");
 }
