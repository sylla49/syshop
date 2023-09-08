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

    // Galaxy Note20 Ultra screen
    
	if ( width <= 414 ){
	
	    alert("    Handy parameter wurde für "+"\n"+
		   "eine GALAXY Note 20 Ultra Firefox festgelegt "+
	  "\n"+"und kann auf anderen Telefonen anders aussehen"+
	  "\n"+"DANKE FÜR IHRE VERSTANDNIS! SYLLA-FREELANCER");

        $('.wiederrufInfo').html("Versandkonditionen ++");

		$('#dv-content .menu').css({});

	    $('#dv-content .menu a').html("Menu");

	    $('#dv-content .menu a').on('click', ()=>{
	    	$('#dv-content .nav li').css({
	    		"display": "block"
	    	});

	    });

	    $('#dv-content .nav li').on('click', ()=>{
	   		$('#dv-content .nav li').css({
     			"display": "none"
	   		});
	    });
	}else{
		$('dv-content .menu a').hide();
	}


} );