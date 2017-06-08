//////////////////
//les variables //
//////////////////

/*Variables du DOM - Les Cases*/

var $casel1c1 = document.getElementById("l1c1");
var $casel1c2 = document.getElementById("l1c2");
var $casel1c3 = document.getElementById("l1c3");

var $casel2c1 = document.getElementById("l2c1");
var $casel2c2 = document.getElementById("l2c2");
var $casel2c3 = document.getElementById("l2c3");

var $casel3c1 = document.getElementById("l3c1");
var $casel3c2 = document.getElementById("l3c2");
var $casel3c3 = document.getElementById("l3c3");

/*Variable du DOM - Zone de jeu*/

var $zoneDeJeu = document.getElementById("jeu");

/*Autre Variables*/

var tourDuJoueur; //pour suivre le tour du joueur 1 ou 2 comme valeur numérique possible

/////////////////////////////////
//   Les Fonctions du jeu      //
/////////////////////////////////


// initialise la partie
function initialisationDeLaPartie(tourDuJoueur){
	
	//Définit le premier joueur en tour de joueur
	tourDuJoueur = 1; 
	
	// optionnel : tire un joueur au hasard
	// tourDuJoueur = Math.floor(2*Math.random()+1);

};


// Cocher une case

function cocherUneCase(laCaseCochee) {
	
	// on teste si un joueur a déjà joué dans la case (si c'est le cas il y a une classe en plus "joueur1" ou "joueur2")
	if (laCaseCochee.target.classList == "case") {
		
		//on teste le tour du joueur, on ajoute la classe en fonction ou on alerte les joueurs
		switch(tourDuJoueur) {
			case 1 :
			laCaseCochee.target.classList.add("joueur1");
			break;
			case 2 :
			laCaseCochee.target.classList.add("joueur2");
			break;
			}
	} else {
		alert("Cette case à déjà été jouée, choisissez en une autre...");
	}
}


/////////////
// Action! //
/////////////

initialisationDeLaPartie(); //initialiser la partie

$zoneDeJeu.addEventListener('click', function(laCaseCochee){cocherUneCase(laCaseCochee)}); //Action au clic
