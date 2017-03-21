var lista = $('#list-menu');
lista.children().click(clase);

function clase(){
	lista.children().removeClass('tab-current');
	$(this).addClass('tab-current');
	
}