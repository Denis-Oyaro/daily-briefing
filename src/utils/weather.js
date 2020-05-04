import axios from "axios"

export default setWeatherData => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  async function success(pos) {
    const crd = pos.coords
    try {
      const response = await axios.get(
        `/.netlify/functions/weatherapi?lat=${crd.latitude}&lon=${crd.longitude}&units=metric`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options)
  }
}
