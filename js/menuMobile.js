
var propMenu = {
	burger_menu: document.getElementById('burger_menu'),/*hamburguesa*/
	elem_menu: document.querySelectorAll('#slideMenu .menu-principal a'), /*URLS*/
	slideMenu: document.getElementById('slideMenu'), /*contenedor de elementos*/
	menu_activo: false /*sirve tanto para el ICONO hamburguesa como para los links de los elementos*/
}


var metMenu = {
	inicio: function () {
		propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

		for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}
	},

/*solo para ICONO hamburguesa*/
	toggleMenu: function () { /*Mostrar icono hamburguesa y sus urls*/
		if ( propMenu.menu_activo == false ) {
			propMenu.menu_activo = true;
			propMenu.slideMenu.className = propMenu.slideMenu.className + ' active'; /*lett: 0*/

		} else{/*ocultar las urls al volver a apretar sobre el icono hamburguesa*/
			propMenu.menu_activo = false;
			propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');

		}
	},

	ocultarMenu: function () { /*solo para los URL del menu*/
		propMenu.menu_activo = false;/*una vez que el usuario le de click a algun link/urg del mi menu, que este se olculte*/
		propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
	}

}

metMenu.inicio();
