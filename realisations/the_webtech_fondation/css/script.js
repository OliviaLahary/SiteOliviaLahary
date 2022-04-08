//  affichage de la date 
let laDate = new Date();
let afficheLaDate = laDate.getDate() + "/" + (laDate.getMonth()+1) + "/" + laDate.getFullYear();
let leMois = laDate.getMonth();
let lesMois = ["Janvier", "Février" , "Mars" , "Avril" , "Mai" , "Juin" , "Juillet"  , "Août" , "Septembre" , "Octobre", "Novembre" , "Decembre"];
document.write("Nous sommes le : " + laDate.getDate()+"-"+ lesMois[leMois] + "-" + laDate.getFullYear () )
document.write.getElementById("affichageDate").innerHTML

// bouton qui fait apparaitre la liste des quatre compétences
const maCompetance = function(){
    let maCompetance = document.getElementById("competence").options[document.getElementById("competence").selectedIndex].value;
    document.body.style.backgroundColor = maCompetance;
 
//  //rajout d'une zone de texte invisible 
document.getElementById("lesCompet").style.display = "inline";
document.getElementById("lesCompet").value = maCompetance; 
}
