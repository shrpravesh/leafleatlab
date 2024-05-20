var map = L.map('map').setView([27.68723120070982, 85.32372326123497], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([27.68723120070982, 85.32372326123497]).addTo(map)
		.bindPopup('Himalayan College of Geomatics Engineering<br> You are here this very moment')
		.openPopup();	