/* ----------------------------------------------------

	File Name: custom.js
	Template Name: Linda
	Created By: HTML.Design
	http://themeforest.net/user/wpdestek

	ADD YOUR CUSTOM JQUERY FILES HERE

------------------------------------------------------- */
    (function($) {
        "use strict";
        
		$('body').tooltip({
			selector: "[data-tooltip=tooltip]",
			container: "body"
		});

	    $(window).load(function() {
	        $("#preloader").on(500).fadeOut();
	        $(".preloader").on(600).fadeOut("slow");
	    });
    
    })(jQuery);
