;(function($) {

	var gmap = function(obj, options) {
		var $mapDiv = $(obj);
	
		var t = {
			mapOptions: {
				zoom: 8,
				center: new google.maps.LatLng(-34.397, 150.644), 
				mapTypeId: google.maps.MapTypeId.ROADMAP, 
				scrollwheel: true
			},
			mapDiv: $mapDiv
		}
		
		t.init = function(options) {
			t.map = new google.maps.Map(t.mapDiv[0], t.mapOptions);
			return t.map;
		}
		
		t.init();
		return t;
	}
	
	//jQuery alias
	$.fn.gmap = function(options) {
		return new gmap($(this), options);
	}
	
})(jQuery);