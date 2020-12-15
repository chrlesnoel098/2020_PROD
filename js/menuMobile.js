/*
 * fichier menuMobile.js fait par Alejandra Miranda Reyes
 * 
 * Gère l'affichage du menu de navigation pour la version mobile et tablette 
 *
 */

 (function(){

	//cette objet contien des variables qui vont aller chercher certaines éléments html lequels seront traités avec les méthodes de la variable "metMenu"
	var propMenu = {
		burger_menu: document.getElementById('burger_menu'),
		elem_menu: document.querySelectorAll('#slideMenu .menu-principal a'), 
		slideMenu: document.getElementById('slideMenu'), 
		boutton_fermer: document.getElementById('fermer'),
		menu_activo: false, 
	}
	
	
	var metMenu = {
		inicio: function () {
			/* 
			1. un événement click va se déclencher lorsque l'utilisateur clique sur l'icone de navigation burger
			2. un événement click va se déclencher lorsque l'utilisateur clique sur l'icone de croix/fermeture 
			3. Boucle qui gèrer affichage du contenu du menu de navigation 
			*/
			propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
			propMenu.boutton_fermer.addEventListener('click', metMenu.ocultarMenu);
	
			for (var i = 0; i < propMenu.elem_menu.length; i++) {
				propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
			}
		},
	
	/* Affiche & cache le menu de navigation*/
		toggleMenu: function () {
			if ( propMenu.menu_activo == false ) {
				propMenu.menu_activo = true;
				propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
				
				
			} else{
				propMenu.menu_activo = false;
				propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
	
			}
		},
	
		/*cache les choix du menu,*/
		ocultarMenu: function () { 
			propMenu.menu_activo = false;
			propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
		}
	
	}
	
	metMenu.inicio();
	
    
}())
