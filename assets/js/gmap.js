;(function($) {

	var gmap = function(obj, options) {
		var $mapDiv = $(obj);
	
		var t = {
			mapOptions: {
				zoom: 15,
				center: new google.maps.LatLng(0, 0), 
				mapTypeId: google.maps.MapTypeId.ROADMAP, 
				scrollwheel: false
			},
			mapDiv: $mapDiv
		}
		
		t.init = function(options) {
			t.map = new google.maps.Map(t.mapDiv, t.mapOptions);
			return t.map;
		}
		
		t.init();
		console.log(t);
		return t;
	}
	
	//jQuery alias
	$.fn.gmap = function(options) {
		return new gmap($(this), options);
	}
	
})(jQuery);