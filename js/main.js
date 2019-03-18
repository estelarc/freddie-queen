
$(document).ready(function() {
	var myFullpage = new fullpage('#fullpage', {
	    verticalCentered: false,
	    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
	    menu: '#menu',
	    css3:false
	});



	document.addEventListener("keydown", function(event) {
		if(event.keyCode == 81 && event.which == 81) {
			document.getElementById('myAudio').play();

		}

		if(event.keyCode == 80 && event.which == 80) {
			document.getElementById('myAudio').pause();
		}
	});

});

