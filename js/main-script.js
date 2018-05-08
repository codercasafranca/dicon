/****************
    fullpage    
 ****************/
$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollBar: true,
	});
});

/************************
	 tab seccion 02    
 ************************/
function openCaracteristicas(evt, caracteristicasName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-caracteristicas");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-caracteristicas");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(caracteristicasName).style.display = "block";
    evt.currentTarget.className += " active";
}