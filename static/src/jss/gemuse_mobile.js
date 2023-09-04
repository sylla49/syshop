'use strict';

$().ready( ()=>{

    // browser object 
	const brows = [
		navigator.cookie, navigator.cookieEnabled, navigator.appCodeName, navigator.platform,
		navigator.product, navigator.userAgent, navigator.onLine, navigator.javaEnabled(), 
		 ];
    let mozillar = "Mozilla/5.0 (Android 13; Mobile; rv:109.0)";
	// screen 
	let width = window.innerWidth,
	   height = window.innerHeight;
	// browser Language 
	var userLang = navigator.language || navigator.userLanguage; 


	// alert("Width :"+width+" Height "+height);
    //$('#dv-content .menu a').html("Menu");
	if ( width <= 414 ){
		$('.wiederrufInfo').html("Versandkonditionen").css({
			'marginLeft': '30%',
			'fontSize': '20px'
		});
		$('#versand-cont').hide();
	}

});