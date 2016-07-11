
$(document).ready(function() {

	var json = $.getJSON("js/data-planets.json", function(data) {

		var aux = null;

		$.each(data['planets'], function(key, value){
			spacePopulation(key, value);

			if(key == 'plutao') return false;		
		});

		$('.blockSolarSys li').click(function(e) {

			var keyClass = $(this).attr('class');			
			
			$.each(data['planets'], function(key, value){

				if(key == keyClass && key != 'sol') {

					aux = key;

					showInformation(key, value);

					return false;
				}	

			});

		});

	});

	function showInformation(chave, valor) {
		$('.descricoes').find('p').remove();
		$('.bullets').find('li').remove();
		
		$('.img-planet').attr('src', valor.urlImg2);	
		$('.titulo').text(chave);

		$('.descricoes').append($('<p/>').addClass('texto').text(valor.infos['str1']));

		for(var k = 0; k < valor.bullets; k++) {
			$('.bullets').append($('<li/>').addClass('bull-item').text(''+(k+1)+''));
		}

		$('.bullets li:first-child').addClass('active');

		bulletsItemClick(chave, valor);
	}

	function spacePopulation(chave, valor) {
		$('.blockSolarSys').append($('<li/>').addClass(''+chave+'').append($('<img/>').attr('src', valor.urlImg)));
	}

	function bulletsItemClick(chave, valor) {
		$('.bull-item').click(function() {
			$('.bull-item').removeClass('active');
			$('.descricoes p').text(valor.infos['str'+ $(this).text() +'']);			
			$(this).addClass('active');
		});
	}

});
