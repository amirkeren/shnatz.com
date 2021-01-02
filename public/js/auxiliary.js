$('#behance').mouseenter(function() {
    $(this).attr('src', "img/behance_light.png");
});
$('#behance').mouseout(function() {
    $(this).attr('src', "img/behance.png");
});
$('#linkedin').mouseenter(function() {
    $(this).attr('src', "img/linkedin_light.png");
});
$('#linkedin').mouseout(function() {
    $(this).attr('src', "img/linkedin.png");
});
$('#mail').mouseenter(function() {
    $(this).attr('src', "img/mail_light.png");
});
$('#mail').mouseout(function() {
    $(this).attr('src', "img/mail.png");
});
$('#facebook').mouseenter(function() {
    $(this).attr('src', "img/facebook_light.png");
});
$('#facebook').mouseout(function() {
    $(this).attr('src', "img/facebook.png");
});

$(function () {
	var filterList = {
		init: function () {
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
        load: {
          filter: '.games, .print, .illustrations, .web'
        }
			});								
		}
	};
	filterList.init();
});