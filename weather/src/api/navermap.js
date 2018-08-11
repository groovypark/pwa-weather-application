const naver = window.naver;

export function getAddressFromGeocode(x, y) {
  return new Promise((resolve, reject) => {
    naver.maps.Service.reverseGeocode(
      {
        location: new naver.maps.LatLng(x, y),
      },
      resolve
    );
  });


}
