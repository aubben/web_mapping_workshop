///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'aubben.k7c22gcp'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiYXViYmVuIiwiYSI6InNQM25NSzQifQ.WJJjBKBKFusEPUY-eFayYQ'; //<- this is my token, use yours.


//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

///////////////////////////////////////////////////////////////////////////
// This is the area we're going to use to add data to our map

var dataFileToAdd = 'data/la_fastfood.geojson'; //<- Point this to the file that you want to include on the map
var dataToAdd;

var featureLayer = L.mapbox.featureLayer()
    .loadURL(dataFileToAdd)
    .addTo(map);

featureLayer.on('ready', function() {
    this.setStyle({
        "color": "#43094c",
        "fillColor": "#43094c",
        "weight": .5,
        "opacity": 0.65
    });
    map.fitBounds(featureLayer.getBounds());
});

///////////////////////////////////////////////////////////////////////////
// Add some basic click handling

featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.bindPopup(layer.feature.properties.name+<br>layer.feature.properties.cuisine</br>);
  });
});
