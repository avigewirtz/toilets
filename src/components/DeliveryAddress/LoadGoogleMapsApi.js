export const loadGoogleMapsApi = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      return resolve(window.google);
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.addEventListener('load', () => {
      return resolve(window.google);
    });
    script.addEventListener('error', (e) => {
      return reject(e);
    });
    document.body.appendChild(script);
  });
};

export default loadGoogleMapsApi;
