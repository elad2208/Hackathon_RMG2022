// The following example creates five accessible and
// focusable markers.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: { lat: 32.0687981678697, lng: 34.82385780924309 },
      
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
      [{ lat: 32.0687981678697, lng: 34.82385780924309}],
      [{ lat: 32.05591094405654, lng: 34.82236173086376 }],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    const numbers = [
        1,
        2
    ]
  
    // Create the markers.
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
        number:numbers[i]
      });


  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        localStorage.setItem('number', marker.number);
        window.location.href = "http://127.0.0.1:5500/game.html";
      });
    });
  }