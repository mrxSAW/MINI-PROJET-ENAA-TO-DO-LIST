const prompt = require('prompt-sync')();

let tab = [ ];
let choix;
let objt = {};

function aficherToutTache () {
   for(let i = 0;i<tab.length ;i++){
    console.log(tab[i]);
   }
}
function ajouterTache () {
    x = tab.length +1 ;    
    y = prompt ("entrer description de la tache : ");
    z = prompt ("entrer etat de la tache : ");
    objt = {id:x , description:y , etat:z};
    tab.push(objt);
    console.log("tache ajouter avec succes");
    
}

function rechercherTach() {
    let tachrech = prompt ("entrer L'ID de la  tache a rechercher : ");
    for (let i=0 ; i<tab.length ; i++){
        if (tab[i].id == tachrech){
            console.log(tab[i]);
            
        } }
}

function modifierTach() {
    let tachmod = prompt ("entrer id de la  tache a modifier : ");
    for (let i=0 ; i<tab.length ; i++){
        if (tab[i].id == tachmod){
            let nouvdesc = prompt ("entrer la nouvelle description : ");
            tab[i].description = nouvdesc;
            let nouveetat = prompt ("entrer le nouvel etat : ");
            tab[i].etat = nouveetat;
        }
        else{ console.log("tache11 not fond" )}
      }
    
}

  
function supprimerTache () {
    let tachid = prompt ("entrer id de la  tache a supprimer : ");
       for (let i=0 ; i<tab.length ; i++){
          if (tab[i].id == tachid){
               delete tab[i] ;
            
          }   } 
        

         aficherToutTache ()
    
    console.log("tache supprimer avec succes");
}

function marqCommeTerminé() {
    let ID = prompt (" entrer id de la tach   : ");
    for (let i=0 ; i<tab.length ; i++){
        if (tab[i].id == ID){
            
            let Terminer = prompt ("entrer T pour marquer la tach comme terminer  : ");
           if (Terminer == "T"){ 
            tab[i].etat = "Terminer";
            console.log("tache marquer comme terminer avec succes");
           } 
        }  }
}


function afficherTerminer() {
    for (let i=0 ; i<tab.length ; i++){
        
        if (tab[i].etat == "Terminer"){
            fond=true 
            console.log(tab[i]);
        } 
     }
}


do {
console.log("=== To-Do List === \n 1. Afficher les tâches \n 2. Ajouter une tâche \n 3. Rechercher une tâche \n 4. Modifier une tâche \n 5. Supprimer une tâche \n 6. Marquer une tâche comme terminée \n 7. Afficher les tâches terminées \n 8. Quitter ");     
choix = prompt("choisir une option : ");

switch (choix) {
    case "1":
        aficherToutTache();     
        break;
    case "2":
        ajouterTache();     
        break;  
    case "3":
        rechercherTach();     
        break;
    case "4":
        modifierTach();     
        break;
    case "5":
        supprimerTache();     
        break;
    case "6":           
        marqCommeTerminé();
        break;
    case "7":
        afficherTerminer();     
        break;  
    case "8":
        console.log("Au revoir!");     
        break;  
    default:
        console.log("Option invalide. Veuillez réessayer.");     
        break;  
      }

} while (choix !== "8")
