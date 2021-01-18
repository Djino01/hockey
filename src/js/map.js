function initMap() {

	// Create a new StyledMapType for Black & White map
        var styledMapType = new google.maps.StyledMapType( [
				{
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#bdbdbd"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#ffffff"
					 }
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#dadada"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#c9c9c9"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				}
			], {name: 'Styled Map'});
	
	var customIcon = 'img/contacts/marker.svg';

	if ($("#map").length > 0){
		var point1 = {lat: 55.77279436246059,	lng: 37.687773202261624};
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
			center: point1,
			mapTypeControl: false,
			streetViewControl: false,
		});
		//Associate the styled map with the MapTypeId and set it to display.
		map1.mapTypes.set('styled_map', styledMapType);
		map1.setMapTypeId('styled_map');

		var marker1 = new google.maps.Marker({
			position: point1,
			map: map1,
			icon: customIcon,
		});
	}

}