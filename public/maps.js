var map = L.map('map', {
    scrollWheelZoom: false
  });

map.setView([-7.889782498850812, 110.35446579740015],15)

var marker= new L.Marker([-7.889782498850812, 110.35446579740015]);

marker.addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    tileSize:256,
    attribution: '© OpenStreetMap'
}).addTo(map);