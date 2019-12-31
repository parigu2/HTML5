var loc = document.getElementById("location");
var locMap = document.querySelector("#locationMap");

locMap.href = '';
locMap.textContent = '';

function getLocation() {
    if (navigator.geolocation) {
        loc.innerHTML = "Locating...."
        locMap.textContent = '';
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    loc.innerHTML = ""

    locMap.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    locMap.textContent = `Latitude: ${position.coords.latitude}°, Longitude: ${position.coords.longitude}`;
}

function initialize() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        // map.setCenter(new GLatLng(41.878896, -87.625067), 13);
        // var marker = new GMarker(new GLatLng(41.878896, -87.625067), {draggable: false});
        // map.addOverlay(marker);
        // GEvent.addListener(map, "click", function(overlay, point) {
        //     marker.setLatLng(point)
        // })
        var geocoder = new GClientGeocoder();
        geocoder.getLatLng("243 South Wabash, Chicago, IL 60604", function(point) {
            if (!point) {
                map.setCenter(new GLatLng(41.878896, -87.625067), 10);
            } else {
                map.setCenter(point, 13);
            }
        })
        map.setUIToDefault();
    }        
}