let map = L.map('map').setView([10.9577, 78.0807], 15);

let marker = L.marker([10.9577, 78.0807]).addTo(map);

// Load map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Track bus function
async function trackBus() {
    try {
        const busNumber = document.getElementById("busNumber").value;

        const response = await fetch(`http://10.182.78.162:8080/bus/${busNumber}`);
        const data = await response.json();

        const lat = data.latitude;
        const lng = data.longitude;

        console.log("Bus Location:", lat, lng);

        // Move map
        map.setView([lat, lng], 15);

        // Move marker
        marker.setLatLng([lat, lng]);

    } catch (error) {
        console.error("Error fetching bus location:", error);
    }
}

// Auto refresh every 5 sec
setInterval(trackBus, 5000);