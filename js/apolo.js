
// Variáveis globais
var planets = new Array();

// Variáveis do corpo
planets[0] = document.getElementById('b-mercurio');
planets[1] = document.getElementById('b-venus'); 
planets[2] = document.getElementById('b-terra'); 
planets[3] = document.getElementById('b-marte'); 
planets[4] = document.getElementById('b-jupiter'); 
planets[5] = document.getElementById('b-saturno'); 
planets[6] = document.getElementById('b-urano'); 
planets[7] = document.getElementById('b-netuno'); 
planets[8] = document.getElementById('b-plutao'); 

// Hover do primeiro planeta...
mercurio.onmouseover = function() {
	eventFadeBody(0);
}

venus.onmouseover = function() {
	eventFadeBody(1);	
}

terra.onmouseover = function() {
	eventFadeBody(2);	
}

marte.onmouseover = function() {
	eventFadeBody(3);	
}

jupiter.onmouseover = function() {
	eventFadeBody(4);
}

saturno.onmouseover = function() {
	eventFadeBody(5);
}

urano.onmouseover = function() {
	eventFadeBody(6);
}

netuno.onmouseover = function() {
	eventFadeBody(7);
}

plutao.onmouseover = function() {
	eventFadeBody(8);
}

// Funçoes de CLICK (SEGUNDA ETAPA)...
function planets_event(foo) {
	// body...
	if(foo == 0){
		
	}

}

// Função do corpo, apresentação do conteudo
function eventFadeBody(ef) {
	// body...
	for(var i = 0; i < planets.length; i++) 
	{
		if(i == ef) {
			planets[i].style.opacity = "1";
		} else {
			planets[i].style.opacity = "0";
		}
	}
}

function slideText(txt) {
	// body...

	// ...... Botões .......
	
	// Botões de Marte...
	var m_btn1 = document.getElementById('mbtn1');
	var m_btn2 = document.getElementById('mbtn2');

	// Botões de Vênus...
	var v_btn1 = document.getElementById('vbtn1');
	var v_btn2 = document.getElementById('vbtn2');
	var v_btn3 = document.getElementById('vbtn3');
	var v_btn4 = document.getElementById('vbtn4');

	// Botões da Terra...
	var btns_Terra = new Array();
	btns_Terra[0] = document.getElementById('t_btn1');
	btns_Terra[1] = document.getElementById('t_btn2');
	btns_Terra[2] = document.getElementById('t_btn3');
	btns_Terra[3] = document.getElementById('t_btn4');

	// Botões da Marte...
	var btns_Marte = new Array();
	btns_Marte[0] = document.getElementById('ma_btn1');
	btns_Marte[1] = document.getElementById('ma_btn2');
	btns_Marte[2] = document.getElementById('ma_btn3');

	// Botões da Júpiter...
	var btns_Jupiter = new Array();
	btns_Jupiter[0] = document.getElementById('j_btn1');
	btns_Jupiter[1] = document.getElementById('j_btn2');
	btns_Jupiter[2] = document.getElementById('j_btn3');
	btns_Jupiter[3] = document.getElementById('j_btn4');

	// Botões da Saturno...
	var btns_Saturno = new Array();
	btns_Saturno[0] = document.getElementById('s_btn1');
	btns_Saturno[1] = document.getElementById('s_btn2');
	btns_Saturno[2] = document.getElementById('s_btn3');

	// Botões da Urano...
	var btns_Urano = new Array();
	btns_Urano[0] = document.getElementById('u_btn1');
	btns_Urano[1] = document.getElementById('u_btn2');

	// Botões da Netuno...
	var btns_Netuno = new Array();
	btns_Netuno[0] = document.getElementById('n_btn1');
	btns_Netuno[1] = document.getElementById('n_btn2');

	// Botões da Plutão...
	var btns_Plutao = new Array();
	btns_Plutao[0] = document.getElementById('p_btn1');
	btns_Plutao[1] = document.getElementById('p_btn2');

	// ....... Paragráfos ......
	
	// Paragráfos de Marte...
	var m_txt1 = document.getElementById('mTxt_1');
	var m_txt2 = document.getElementById('mTxt_2');

	// Paragráfos de Vênus...
	var v_txt1 = document.getElementById('vTxt_1');
	var v_txt2 = document.getElementById('vTxt_2');
	var v_txt3 = document.getElementById('vTxt_3');
	var v_txt4 = document.getElementById('vTxt_4');

	// Paragráfos de Terra...
	var t_txt1 = document.getElementById('tTxt_1');
	var t_txt2 = document.getElementById('tTxt_2');
	var t_txt3 = document.getElementById('tTxt_3');
	var t_txt4 = document.getElementById('tTxt_4');


	// Paragráfos de Marte...
	var ma_txt1 = document.getElementById('maTxt_1');
	var ma_txt2 = document.getElementById('maTxt_2');
	var ma_txt3 = document.getElementById('maTxt_3');

	// Paragráfos de Júpiter...
	var j_txt1 = document.getElementById('jTxt_1');
	var j_txt2 = document.getElementById('jTxt_2');
	var j_txt3 = document.getElementById('jTxt_3');
	var j_txt4 = document.getElementById('jTxt_4');

	// Paragráfos de Saturno...
	var s_txt1 = document.getElementById('saTxt_1');
	var s_txt2 = document.getElementById('saTxt_2');
	var s_txt3 = document.getElementById('saTxt_3');

	// Paragráfos de Urano...
	var u_txt1 = document.getElementById('uTxt_1');
	var u_txt2 = document.getElementById('uTxt_2');


	// Paragráfos de Netuno...
	var n_txt1 = document.getElementById('nTxt_1');
	var n_txt2 = document.getElementById('nTxt_2');

	// Paragráfos de Plutão...
	var p_txt1 = document.getElementById('pTxt_1');
	var p_txt2 = document.getElementById('pTxt_2');
	switch(txt) {

		// Mercúrio...
		case 0:
			m_txt1.style.opacity = "1";
			m_txt2.style.opacity = "0";

			m_btn1.classList.add('active');
			m_btn2.classList.remove('active');
			break;

		case 1:
			m_txt1.style.opacity = "0";
			m_txt2.style.opacity = "1";

			m_btn1.classList.remove('active');
			m_btn2.classList.add('active');
			break;	

		// Vênus...
		case 2:
			v_txt1.style.opacity = "1";
			v_txt2.style.opacity = "0";
			v_txt3.style.opacity = "0";
			v_txt4.style.opacity = "0";

			v_btn1.classList.add('active');
			v_btn2.classList.remove('active');
			v_btn3.classList.remove('active');
			v_btn4.classList.remove('active');
			break;

		case 3:
			v_txt1.style.opacity = "0";
			v_txt2.style.opacity = "1";
			v_txt3.style.opacity = "0";
			v_txt4.style.opacity = "0";

			v_btn1.classList.remove('active');
			v_btn2.classList.add('active');
			v_btn3.classList.remove('active');
			v_btn4.classList.remove('active');

			break;

		case 4:
			v_txt1.style.opacity = "0";
			v_txt2.style.opacity = "0";
			v_txt3.style.opacity = "1";
			v_txt4.style.opacity = "0";

			v_btn1.classList.remove('active');
			v_btn2.classList.remove('active');
			v_btn3.classList.add('active');
			v_btn4.classList.remove('active');
			break;		

		case 5:
			v_txt1.style.opacity = "0";
			v_txt2.style.opacity = "0";
			v_txt3.style.opacity = "0";
			v_txt4.style.opacity = "1";
			
			v_btn1.classList.remove('active');
			v_btn2.classList.remove('active');
			v_btn3.classList.remove('active');
			v_btn4.classList.add('active');
			break;	

		// Terra... 
		case 6:
			btns_Terra[0].classList.add('active');
			btns_Terra[1].classList.remove('active');
			btns_Terra[2].classList.remove('active');
			btns_Terra[3].classList.remove('active');

			t_txt1.style.opacity = "1";
			t_txt2.style.opacity = "0";
			t_txt3.style.opacity = "0";
			t_txt4.style.opacity = "0";
						
			break;

		case 7:
			btns_Terra[0].classList.remove('active');
			btns_Terra[1].classList.add('active');
			btns_Terra[2].classList.remove('active');
			btns_Terra[3].classList.remove('active');

			t_txt1.style.opacity = "0";
			t_txt2.style.opacity = "1";
			t_txt3.style.opacity = "0";
			t_txt4.style.opacity = "0";
			break;
			
		case 8:
			btns_Terra[0].classList.remove('active');
			btns_Terra[1].classList.remove('active');
			btns_Terra[2].classList.add('active');
			btns_Terra[3].classList.remove('active');

			t_txt1.style.opacity = "0";
			t_txt2.style.opacity = "0";
			t_txt3.style.opacity = "1";
			t_txt4.style.opacity = "0";
			break;
			
		case 9:
			btns_Terra[0].classList.remove('active');
			btns_Terra[1].classList.remove('active');
			btns_Terra[2].classList.remove('active');
			btns_Terra[3].classList.add('active');

			t_txt1.style.opacity = "0";
			t_txt2.style.opacity = "0";
			t_txt3.style.opacity = "0";
			t_txt4.style.opacity = "1";
			break;
			
		case 10:
			btns_Marte[0].classList.add('active');
			btns_Marte[1].classList.remove('active');
			btns_Marte[2].classList.remove('active');

			ma_txt1.style.opacity = "1";
			ma_txt2.style.opacity = "0";
			ma_txt3.style.opacity = "0";
			break;						

		case 11:
			btns_Marte[0].classList.remove('active');
			btns_Marte[1].classList.add('active');
			btns_Marte[2].classList.remove('active');

			ma_txt1.style.opacity = "0";
			ma_txt2.style.opacity = "1";
			ma_txt3.style.opacity = "0";	
			break;

		case 12:
			btns_Marte[0].classList.remove('active');
			btns_Marte[1].classList.remove('active');
			btns_Marte[2].classList.add('active');

			ma_txt1.style.opacity = "0";
			ma_txt2.style.opacity = "0";
			ma_txt3.style.opacity = "1";	
			break;	

		case 13:
			btns_Jupiter[0].classList.add('active');
			btns_Jupiter[1].classList.remove('active');
			btns_Jupiter[2].classList.remove('active');
			btns_Jupiter[3].classList.remove('active');

			j_txt1.style.opacity = "1";
			j_txt2.style.opacity = "0";
			j_txt3.style.opacity = "0";
			j_txt4.style.opacity = "0";	
			break;	

		case 14:
			btns_Jupiter[0].classList.remove('active');
			btns_Jupiter[1].classList.add('active');
			btns_Jupiter[2].classList.remove('active');
			btns_Jupiter[3].classList.remove('active');

			j_txt1.style.opacity = "0";
			j_txt2.style.opacity = "1";
			j_txt3.style.opacity = "0";
			j_txt4.style.opacity = "0";	
			break;		

		case 15:
			btns_Jupiter[0].classList.remove('active');
			btns_Jupiter[1].classList.remove('active');
			btns_Jupiter[2].classList.add('active');
			btns_Jupiter[3].classList.remove('active');

			j_txt1.style.opacity = "0";
			j_txt2.style.opacity = "0";
			j_txt3.style.opacity = "1";
			j_txt4.style.opacity = "0";	
			break;		

		case 16:
			btns_Jupiter[0].classList.remove('active');
			btns_Jupiter[1].classList.remove('active');
			btns_Jupiter[2].classList.remove('active');
			btns_Jupiter[3].classList.add('active');

			j_txt1.style.opacity = "0";
			j_txt2.style.opacity = "0";
			j_txt3.style.opacity = "0";
			j_txt4.style.opacity = "1";	
			break;					

		case 17:
			btns_Saturno[0].classList.add('active');
			btns_Saturno[1].classList.remove('active');
			btns_Saturno[2].classList.remove('active');

			s_txt1.style.opacity = "1";
			s_txt2.style.opacity = "0";
			s_txt3.style.opacity = "0";
			break;						

		case 18:
			btns_Saturno[0].classList.remove('active');
			btns_Saturno[1].classList.add('active');
			btns_Saturno[2].classList.remove('active');

			s_txt1.style.opacity = "0";
			s_txt2.style.opacity = "1";
			s_txt3.style.opacity = "0";
			break;

		case 19:
			btns_Saturno[0].classList.remove('active');
			btns_Saturno[1].classList.remove('active');
			btns_Saturno[2].classList.add('active');

			s_txt1.style.opacity = "0";
			s_txt2.style.opacity = "0";
			s_txt3.style.opacity = "1";
			break;

		case 20:
			break;

		// Urano...
		case 21:
			btns_Urano[0].classList.add('active');
			btns_Urano[1].classList.remove('active');

			u_txt1.style.opacity = "1";
			u_txt2.style.opacity = "0";
			break;	

		case 22:
			btns_Urano[0].classList.remove('active');
			btns_Urano[1].classList.add('active');

			u_txt1.style.opacity = "0";
			u_txt2.style.opacity = "1";
			break;	

		// Netuno...
		case 23:
			btns_Netuno[0].classList.add('active');
			btns_Netuno[1].classList.remove('active');

			n_txt1.style.opacity = "1";
			n_txt2.style.opacity = "0";
			break;	

		case 24:
			btns_Netuno[0].classList.remove('active');
			btns_Netuno[1].classList.add('active');

			n_txt1.style.opacity = "0";
			n_txt2.style.opacity = "1";
			break;	

		// Plutão...
		case 25:
			btns_Plutao[0].classList.add('active');
			btns_Plutao[1].classList.remove('active');

			p_txt1.style.opacity = "1";
			p_txt2.style.opacity = "0";
			break;	

		case 26:
			btns_Plutao[0].classList.remove('active');
			btns_Plutao[1].classList.add('active');

			p_txt1.style.opacity = "0";
			p_txt2.style.opacity = "1";
			break;	


		default:
			break;

	}
}


