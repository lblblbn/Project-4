;(function($, window) {
	
	var jQT, map;
	
	$(document).ready(function() {
		map = $("#map").gmap();
		map.init();
		
		jQT = $.jQTouch({
				statusBar: 'black'
		});
		
		var goHome = function() {
			$("a[href="#home"]").click();	
		}
		
		$("#home").bind('pageAnimationEnd', function(event, info) {
			if (info.direction == "in") {
				$("#map").show();
				google.maps.event.trigger(map.map, 'resize');
				map.map.fitBounds(map.bounds);
			}
			return false;
		});
	
		//marker form
		$("#new-marker").submit(function(e) {
			var $t      = $(this);
			var $name   = $t.find("#name");
			var $street = $t.find("#street");
			var $city   = $t.find("#city");
			var $state  = $t.find("#state");
			var $zip    = $t.find("#zip");
			
			var address = [
				$street.val(),
				$city.val(),
				$state.val(),
				$zip.val()
			];
			
			var resetFields = function() {
				$name.val("");
				$street.val("");
				$city.val("");
				$state.val("");
				$zip.val("");
			}
			
			map.geocode(address.join(" "), function(response) {
				if(response.success) {	
					var lat = response.results[0].geometry.location.lat();
					var lng = response.results[0].geometry.location.lng();
					
					if(!map.hasLatLng(lat, lng)) {
						map.addMarker(lat, lng, $name.val());
						map.saveRow({name: $name.val(), street: $street.val(), city: $city.val(), state: $state.val(), zip: $zip.val(), lat: lat, lng: lng});
						resetFields();
						goHome();
					} else {
						alert('\"' + $.trim(address.join(" ")) + '\" already has a marker. Enter a different address.' );
					}
				} else {
					alert("Invalid address. Enter a different address.");
				}
			});
			
			e.preventDefault();
		});

		
	});
}(jQuery, this));