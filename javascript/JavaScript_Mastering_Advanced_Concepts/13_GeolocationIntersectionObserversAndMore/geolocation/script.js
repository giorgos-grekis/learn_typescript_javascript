/***
 * 
 * Allows users to share their location with web applications.
 * 
 * if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
}
 */

const displayArea = document.querySelector("#locationDisplay");

document.querySelector("#getLocation").addEventListener("click", () => {
  if (navigator.geolocation) {
    // getCurrentPosition gets the current position
    navigator.geolocation.getCurrentPosition(displayGeoData, displayError);

    // watchPosition updates whenever a user's position changes
    // navigator.geolocation.watchPosition(displayGeoData, displayError);
  }
});

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;
  displayArea.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
};

const displayError = (err) => {
  displayArea.textContent = err.message;
};
