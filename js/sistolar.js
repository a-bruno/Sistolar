
jQuery.fn.sistolar = function() {

	that = this;	

	this.init = function() {

		var json = $.getJSON("js/config-sistolar.json", function(data) {

			var aux = null;

			$.each(data['planets'], function(key, value){
				that.preencherEspaco(key, value);

				if(key == 'plutao') return false;		
			});

			$(that.find('.lis-planetas li')).on('click', function() {

				var keyClass = $(this).attr('class');			
					
				$.each(data['planets'], function(key, value){

					if(key == keyClass && key != 'sol') {

						aux = key;

						that.mostrarInformacoes(key, value);

						return false;
					}	

				});

			});

		});

	}

	this.preencherEspaco = function(key, value) {
		$(that.find('.lis-planetas')).append($('<li/>').addClass(''+ key +'').append($('<img/>').attr('src', value.urlImg))).show(2000);
	}

	this.mostrarInformacoes = function(key, value) {
		$(that.find('.informacoes')).find('p').remove();
		$(that.find('.bullets')).find('li').remove();
		
		$(that.find('.lis-planetas--img')).attr('src', value.urlImg2);	
		$(that.find('.titulo')).text(key);

		$(that.find('.informacoes')).append($('<p/>').addClass('texto').text(value.infos['str1']));

		for(var k = 0; k < value.bullets; k++) {
			$(that.find('.bullets')).append($('<li/>').addClass('bull-item').text(''+( k+1 )+''));
		}

		$(that.find('.bullets li:first-child')).addClass('active');

		this.bolinhasClicaveis(value);	
	}

	this.bolinhasClicaveis = function(value) {
		$(that.find('.bull-item')).click(function() {
			$('.bull-item').removeClass('active');

			$(that.find('.informacoes p')).text(value.infos['str'+ $(this).text() +'']);			
			$(this).addClass('active');
		});
	}

	this.init();

}
