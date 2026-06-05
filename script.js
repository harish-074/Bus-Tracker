function login() {
    const studentId = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (studentId === "" || password === "") {
        alert("Please enter Student ID and Password");
        return;
    }

    localStorage.setItem("studentId", studentId);
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.removeItem("studentId");
    window.location.href = "index.html";
}

/* ===========================
   MKCE BUS TRACKING SYSTEM
=========================== */

if (document.getElementById("map")) {

    // MKCE Location
    const collegeLocation = [11.05425, 78.04861];

    // Create Map
    const map = L.map("map").setView(collegeLocation, 12);

    // OpenStreetMap Layer
    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    // College Marker
    L.marker(collegeLocation)
        .addTo(map)
        .bindPopup("M.Kumarasamy College of Engineering");

    // Bus Icon
    const busIcon = L.icon({
        iconUrl: "bus.png",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });

    /* ===========================
       BUS ROUTES
    =========================== */

    const buses = [

        {
            number: 1,
            name: "Karur Bus Stand",
            driver: "Ramesh",
            contact: "9876543210",
            status: "Running",
            route: [
                [10.9608, 78.0766],
                [10.9850, 78.0700],
                [11.0200, 78.0600],
                [11.05425, 78.04861]
            ]
        },

        {
            number: 2,
            name: "Rayanur",
            driver: "Suresh",
            contact: "9876543211",
            status: "Running",
            route: [
                [10.9915, 78.0780],
                [11.0100, 78.0720],
                [11.0300, 78.0600],
                [11.05425, 78.04861]
            ]
        },

        {
            number: 3,
            name: "Vangal",
            driver: "Karthik",
            contact: "9876543212",
            status: "Running",
            route: [
                [11.0740, 78.1020],
                [11.0700, 78.0850],
                [11.0620, 78.0650],
                [11.05425, 78.04861]
            ]
        },




    ];

    const busMarkers = {};
let currentRouteLine = null;
    /* ===========================
       DRAW ROUTE LINES
    =========================== */

    buses.forEach(bus => {



        const startPoint = bus.route[0];

        const marker = L.marker(startPoint, {
            icon: busIcon
        }).addTo(map);

        marker.bindPopup(
            `<b>Bus ${bus.number}</b><br>${bus.name}`
        );

        busMarkers[bus.number] = {
            marker: marker,
            routeIndex: 0
        };
    });

    /* ===========================
       BUS MOVEMENT
    =========================== */

    setInterval(() => {

        buses.forEach(bus => {

            const busData = busMarkers[bus.number];

            if (busData.routeIndex < bus.route.length - 1) {

                busData.routeIndex++;

                busData.marker.setLatLng(
                    bus.route[busData.routeIndex]
                );
            }

        });

    }, 4000);

    /* ===========================
       TRACK BUS
    =========================== */

    window.trackBus = function () {

        const busNumber = parseInt(
            document.getElementById("busNumber").value
        );

        if (isNaN(busNumber)) {
            alert("Please enter a valid Bus Number");
            return;
        }

        const bus = buses.find(
            b => b.number === busNumber
        );

        if (!bus) {
            alert("Bus not found");
            return;
        }
        // Remove previous route
        if (currentRouteLine) {
            map.removeLayer(currentRouteLine);
        }

        // Draw selected route
        currentRouteLine = L.polyline(
            bus.route,
            {
                weight: 5
            }
        ).addTo(map);
        document.getElementById("busInfo").style.display = "block";

        document.getElementById("infoBusNumber").innerText =
            bus.number;

        document.getElementById("infoRoute").innerText =
            bus.name + " → MKCE";

        document.getElementById("infoDriver").innerText =
            bus.driver;

        document.getElementById("infoContact").innerText =
            bus.contact;

        document.getElementById("infoStatus").innerText =
            bus.status;

        const marker =
            busMarkers[busNumber].marker;

        marker.openPopup();

        map.flyTo(
            marker.getLatLng(),
            15,
            {
                animate: true,
                duration: 2
            }
        );
    };

}