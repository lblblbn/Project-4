;(function($) {

	var gmap = function(obj, options) {
		var $mapDiv = $(obj);
	
		var t = {
			bounds: new google.maps.LatLngBounds(),
			//db: new localStorageDB("markerDB", localStorage),
			geocoder: new google.maps.Geocoder(),
			map: false,
			mapDiv: $mapDiv,
			mapOptions: {
				center: new google.maps.LatLng(39.76, -86.15), 
				mapTypeId: google.maps.MapTypeId.ROADMAP, 
				scrollwheel: false,
				zoom: 8,
			},
			markers: [],
		}
		
		t.init = function(options) {
			if(options) {
				t.mapOptions = $.extend(true, t.mapOptions, options);	
			}		
			t.map = new google.maps.Map(t.mapDiv[0], t.mapOptions);
			return t.map;
		}
		
		t.addMarker = function(lat, lng, name) {
			var latlng = new google.maps.LatLng(lat, lng);
		
			var marker = new google.maps.Marker({
				map: t.map,
				position: latlng,
				title: name,
			});
			
			t.markers.push(marker);
			
			if(!(t.bounds.contains(latlng))) {
				t.bounds.extend(latlng);
				t.map.fitBounds(t.bounds);
			}
			
			return marker;
		}
		
		t.geocode = function(location, callback) {
		
			t.geocoder.geocode({'address': location}, function(results, status) {
				
				var response = {
					success: status == google.maps.GeocoderStatus.OK ? true : false,
					status: status,
					results: results
				}
				if(typeof callback === "function") {
					callback(response);
				}				
			});
		}
		
		return t;
	}
	
	//jQuery alias
	$.fn.gmap = function(options) {
		return new gmap($(this), options);
	}
	
})(jQuery);