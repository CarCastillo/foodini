var map;
var service;
var infowindow;

$(function() {

	var query;
    console.log( "ready!" );

    $('.info-title .icon').click(function() {
    	$query = ($(this).siblings('h4').find('span').html());
    	console.log($query);
    });
});

function initialize() {
  var myCenter = new google.maps.LatLng(4.6572022,-74.0959806);

  map = new google.maps.Map(document.getElementById('map'), {
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  center: myCenter,
	  zoom: 12
	});

  var request = {
	location: myCenter,
	radius: '5000',
	query: 'Subway',
	key: 'AIzaSyD7Rzp8OAzbJ40elnR1qCGAQlmOOT0XBqU'
  };

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
	for (var i = 0; i < results.length; i++) {
	  var place = results[i];
	  createMarker(results[i]);
	}
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: 'Restaurantes encontrados en la zona'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

//initialize();
