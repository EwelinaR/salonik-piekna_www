//nie u�ywane wszystko


/*function smallDevice(){
	$(".menu_cell").width('40%');
	$("#mid_line").hide();
}

function bigDevice(){
	$(".menu_cell").css('width','');
	$("#mid_line").show();
}

$(document).ready(function() {
	var nav_mode;
	
	
	if($(window).width() < 400){
		nav_mode = 0;
		smallDevice();
	}
	else{
		nav_mode = 1;
		bigDevice();
	}
    $(window).resize(function() {
		if($(window).width() < 400){
			if(nav_mode == 1){
				smallDevice()
			}
			nav_mode = 0;
		}
		else{
			if(nav_mode == 0){
				bigDevice()
			}
			nav_mode = 1;
		}
    });
});*/


$(document).ready(function() {
    var window_height = $(window).height();
	
	$('.main_content_height').height(window_height-$('nav').height());

    $(window).resize(function() {
		if(window_height != $(window).height()){
			$('.main_content_height').height($(window).height()-$('nav').height());

		}
	});
});

