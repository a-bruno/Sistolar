
jQuery.fn.planetsBuilder = function() {

	this.init = function() {
			
		that = this;	

		var json = $.getJSON("js/data-planets.json", function(data) {

			var aux = null;

			$.each(data['planets'], function(key, value){
				that.spacePopulation(key, value);

				if(key == 'plutao') return false;		
			});

			$('.blockSolarSys li').click(function(e) {

				var keyClass = $(this).attr('class');			
					
				$.each(data['planets'], function(key, value){

					if(key == keyClass && key != 'sol') {

						aux = key;

						that.showInformation(key, value);

						return false;
					}	

				});

			});

		});

	}

	this.spacePopulation = function(key, value) {
		$('.blockSolarSys').append($('<li/>').addClass(''+ key +'').append($('<img/>').attr('src', value.urlImg)));
	}

	this.showInformation = function(key, value) {
		$('.descricoes').find('p').remove();
		$('.bullets').find('li').remove();
		
		$('.img-planet').attr('src', value.urlImg2);	
		$('.titulo').text(key);

		$('.descricoes').append($('<p/>').addClass('texto').text(value.infos['str1']));

		for(var k = 0; k < value.bullets; k++) {
			$('.bullets').append($('<li/>').addClass('bull-item').text(''+( k+1 )+''));
		}

		$('.bullets li:first-child').addClass('active');

		this.bulletsItemClick(value);	
	}

	this.bulletsItemClick = function(value) {
		$('.bull-item').click(function() {
		$('.bull-item').removeClass('active');

		$('.descricoes p').text(value.infos['str'+ $(this).text() +'']);			
			$(this).addClass('active');
		});
	}

	this.init();

}

jQuery(document).ready(function(){
	jQuery('body').planetsBuilder();
})
