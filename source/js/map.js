/* Интерактивная карта leaflet*/

const map = document.querySelector('.map');

if (map.classList.contains('map--nojs')) {
  map.classList.remove('map--nojs')
}

let myMap = L.map('mapid').setView([59.96832, 30.31749], 19);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(myMap);


  let customMarker = {
    icon: L.icon({
      iconUrl: '../img/map/map-pin-icon.png',
      iconSize: [38, 50],
    }),
    dragable: true,
  }

  let marker = L.marker([59.96832, 30.31756], customMarker).addTo(myMap);



