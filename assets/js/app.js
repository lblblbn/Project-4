;(function($, window) {

	var jQT, map;
	
	$(document).ready(function() {
	
		jQT = $.jQTouch({
				statusBar: 'black'
		});
		
		//map = $("#map").gmap();
		
		function initialize() {
        var mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		map = new google.maps.Map($("#map")[0], mapOptions);
      }
	  
	  
	  initialize();
		console.log(map);
      /*google.maps.event.addDomListener(window, 'load', initialize); */
		
		console.log("hi");
	});
}(jQuery, this));