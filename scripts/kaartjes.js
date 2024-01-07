//hieronder de kaart voor disneyland
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('dlp-map').setView([48.87262, 2.77677], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap-bijdragers'
    }).addTo(map);

    var marker1 = L.marker([48.87262, 2.77677]).addTo(map)
        .bindPopup('<div style="text-align: center;">Disneyland Parijs<br>Magische plek waar we deze zomer zijn geweest!</div>');

    var marker2 = L.marker([48.86635, 2.77855]).addTo(map)
        .bindPopup('<div style="text-align: center;">Tower of Terror<br>Hier zijn we toch echt te vaak in geweest hoor</div>');

    var marker3 = L.marker([48.83463, 2.82141]).addTo(map)
        .bindPopup('<div style="text-align: center;">Davy Crockett Ranch<br>goed gevonden! hier hebben we overnacht tijdens het verblijf!</div>');

    var centralCoordinates = [48.87262, 2.77677];
    map.setView(centralCoordinates, 16);
    marker1.openPopup();
});


//hieronder de kaart voor de netflix pagina
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('netflix-map').setView([37.25658, -121.96426], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap-bijdragers'
    }).addTo(map);

    L.marker([37.25761, -121.96336]).addTo(map)
    .bindPopup('<div style="text-align: center;">Gebouw D</div>')
    L.marker([37.25709, -121.96408]).addTo(map)
    .bindPopup('<div style="text-align: center;">Gebouw E<br>De hoofdingang</div>')
    .openPopup();
    L.marker([37.25609, -121.96454]).addTo(map)
    .bindPopup('<div style="text-align: center;">Gebouw F</div>')
    L.marker([37.25543, -121.96501]).addTo(map)
    .bindPopup('<div style="text-align: center;">Gebouw G</div>')

});

//hieronder de kaart voor telenet
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('telenet-map').setView([51.03533, 4.48306], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap-bijdragers'
    }).addTo(map);

    L.marker([51.03534, 4.48351]).addTo(map)
    .bindPopup('<div style="text-align: center;">Telenet HQ<br>Al jou centjes worden omgetoverd in miserie!!</div>')
    .openPopup();
});


//hieronder de kaart voor mijn huis
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('huis-map').setView([51.26362, 4.78594], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap-bijdragers'
    }).addTo(map);

    L.marker([51.25603, 4.79463]).addTo(map)
    .bindPopup('<div style="text-align: center;">Home<br>Bye privacy :/</div>')
    .openPopup();
});