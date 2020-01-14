
var map;
var InforObj = [];
var centerCords = {
    lat: 0.035495,
    lng: -51.070526 
};


var icons = {
    imovel: {
    icon: 'icon.png'
    },
    loja: {
    icon: 'icon2.png'
    }
};

var markersOnMap = [
    {
        placeName: 'Millennium Falcon',
        LatLng: [{
            lat: 0.035236,
            lng: -51.065066,
        }],
        type: 'loja'
    },
    {
        placeName: 'X Wing',
        LatLng: [{
            lat: 0.034145,
            lng: -51.076796,
        }],
        type: 'imovel'
    }
]

window.onload = function(){
    initMap();
};

function addMarkerInfo(){
    for (var i = 0; i < markersOnMap.length; i++) {

        var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function() {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });
        
    }
}

function closeOtherInfo() {
    if( InforObj.length > 0 ){
        InforObj[0].set('marker', null);
        InforObj[0].close();
        InforObj[0].length = 0;
    }
}

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: centerCords
    });
    addMarkerInfo();
}