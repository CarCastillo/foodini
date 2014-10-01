(function () {

    function init_map(index) {
        var myLocation = new google.maps.LatLng(4.6572022, -74.0959806);
        var mapOptions = {
            center: myLocation,
            zoom: 11
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Restaurante mas cercano"
        });
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        marker.setMap(map);
    }

    init_map(0);

})();