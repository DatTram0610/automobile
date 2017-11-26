(function () {
    'use strict'
    angular.module("client.map")
        .controller('mapController', MapController);

    MapController.$inject = [];

    function MapController() {
        'use strict'
        var vm = this;
        vm.header = "hihihi";
        var map;
        var marker;
        var infoWindow = new google.maps.InfoWindow({
            content: '<h1>Los Angeles, CA</h1>'
        });

        vm.$onInit = () => {
            vm.initializeMap();
        }

        vm.initializeMap = () => {
            var mapType = google.maps.MapTypeId.ROADMAP
            var location = new google.maps.LatLng(34.0522, -118.2437);
            var mapOption = {zoom: 9, MapTypeId: mapType, center: location, gestureHandling: 'auto'}
            map = new google.maps.Map(document.getElementById("map"), mapOption);  
            marker = new google.maps.Marker({
                position: location,
                map: map
            })

            marker.addListener('click', vm.openInfoWindow);
        }

        vm.openInfoWindow = () => {
            infoWindow.open(map, marker)
        }
    }

})();