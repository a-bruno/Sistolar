
$(document).ready(function() {

	var json = $.getJSON("js/data-planets.json", function(data) {

		$.each(data['planets'], function(key, value){
			spacePopulation(key, value);

			if(key == 'plutao') return false;		
		});

		$('.sistemaSolar li').hover(function(e) {

			var keyClass = $(this).attr('class');			
			
			$.each(data['planets'], function(key, value){

				if(key == keyClass && key != 'sol') {
					$('.img-planet').attr('src', value.urlImg2);	
					return false;
				}	

			});

		});


	});

	function spacePopulation(chave, valor) {
		$('.sistemaSolar').append($('<li/>').addClass(''+chave+'').append($('<img/>').attr('src', valor.urlImg)));
	}

});
