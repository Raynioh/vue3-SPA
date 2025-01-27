import axios from 'axios'

// nemojte ukrast pls
const apiKey = 'c75bfee2809858f91cdc4e2153de0ea0'

async function getCitiesPosition(city, code) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${code}&limit=3&appid=${apiKey}`,
    )
    return response.data
  } catch (error) {
    console.error('Greška pri dohvaćanju pozicije grada', error)
  }
}

async function getWeatherData(lat, lon) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    )
    return response.data
  } catch (error) {
    console.error('Greška pri dohvaćanju vremenskih podataka', error)
  }
}

export default { getCitiesPosition, getWeatherData }
