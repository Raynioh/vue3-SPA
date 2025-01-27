<template>
  <div class="weather-container">
    <h1>Vremenska prognoza</h1>
    <div class="form-group">
      <label for="city-input">Naziv grada:</label>
      <input id="city-input" v-model="city" placeholder="Unesi naziv grada" />
      <p v-if="cityError" class="error">{{ cityError }}</p>
    </div>
    <div class="form-group">
      <CountrySelect @onSelect="handleCountrySelect" />
      <p v-if="countryError" class="error">{{ countryError }}</p>
    </div>
    <button @click="handleCities">Pretraži</button>
    <CityList
      v-if="cities.length"
      :cities="cities"
      @select="handleCitySelect"
      @add-favorite="addFavorite"
    />
    <p v-else>Nema rezultata pretrage</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFavsStore } from '../stores/CityData'
import CityList from '../components/CityList.vue'
import CountrySelect from '../components/CountrySelect.vue'
import WeatherService from '../services/weatherService.js'
import router from '@/router'

const city = ref('')
const selectedCountry = ref('')
const store = useFavsStore()
const cities = ref([])
const cityError = ref('')
const countryError = ref('')

const handleCountrySelect = (country) => {
  selectedCountry.value = country
}

const handleCities = async () => {
  if (!city.value.trim()) {
    cityError.value = 'Molim unesite naziv grada.'
    return
  }
  cityError.value = ''

  if (selectedCountry.value == '') {
    countryError.value = 'Molim odaberite drzavu.'
    return
  }
  countryError.value = ''

  try {
    const response = await WeatherService.getCitiesPosition(city.value, selectedCountry.value.code)
    cities.value = response?.filter((a) => a.country == selectedCountry.value.A2)
  } catch (error) {
    console.error('Greška pri dohvaćanju gradova:', error)
  }
}

const handleCitySelect = (city) => {
  store.addCityData(city.name, selectedCountry.value.name)
  router.push({
    path: 'weather',
    query: {
      lat: city.lat,
      lon: city.lon,
    },
  })
}

const addFavorite = (city) => {
  var favCities = JSON.parse(localStorage.getItem('favouriteCities'))
  if (!favCities) favCities = []

  var cityID
  if (favCities.length === 0) cityID = 1
  else cityID = Math.max(...favCities.map((city) => city.cityID)) + 1

  favCities.push({
    cityID: cityID,
    name: city.name,
    country: selectedCountry.value.name,
    lat: city.lat,
    lon: city.lon,
  })
  localStorage.setItem('favouriteCities', JSON.stringify(favCities))
}
</script>

<style scoped>
.weather-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: black;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
