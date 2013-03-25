;(function($) {

	var gmap = function(obj, options) {
		var $mapDiv = $(obj);
	
		var t = {
			mapDiv: $mapDiv,
			mapOptions: {
				center: new google.maps.LatLng(39.76, -86.15), 
				mapTypeId: google.maps.MapTypeId.ROADMAP, 
				scrollwheel: true,
				zoom: 8,
			},
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