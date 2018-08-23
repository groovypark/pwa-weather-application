export function getLocation() {
  if (window.navigator.geolocation) {
    return new Promise(function (resolve, reject) {
      window.navigator.geolocation.getCurrentPosition(resolve, reject, {});
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

export function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "User denied the request for Geolocation.";
    case error.POSITION_UNAVAILABLE:
      return "Location information is unavailable.";
    case error.TIMEOUT:
      return "The request to get user location timed out.";
    case error.UNKNOWN_ERROR:
      return "An unknown error occurred.";
  }
}
