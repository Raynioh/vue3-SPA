<template>
  <div v-if="weatherData">
    <h1>
      Vremenski uvjeti za {{ store.cityData?.name || weatherData.name }},
      {{ store.cityData?.country || weatherData.sys.country }}
    </h1>
    <p><strong>Temperatura:</strong> {{ temperature.realTemp }}°C</p>
    <p><strong>Osjećaj:</strong> {{ temperature.feelTemp }}°C</p>
    <p><strong>Vlažnost:</strong> {{ weatherData.main.humidity }}%</p>
    <p><strong>Tlak:</strong> {{ weatherData.main.pressure }} hPa</p>
    <p><strong>Brzina vjetra:</strong> {{ weatherData.wind.speed }} m/s</p>
    <p><strong>Opis:</strong> {{ weatherData.weather[0].description }}</p>

    <TemperatureConverter v-bind:temp="temperature.realTemp" />
  </div>
  <div v-else>
    <p>Učitavanje podataka...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import WeatherService from '../services/weatherService.js'
import { useFavsStore } from '../stores/CityData'
import TemperatureConverter from '../components/TempCalc.vue'

const store = useFavsStore()
const weatherData = ref(null)
const route = useRoute()

const temperature = computed(() => {
  return {
    realTemp: (weatherData.value.main.temp - 273.15).toFixed(1),
    feelTemp: (weatherData.value.main.feels_like - 273.15).toFixed(1),
  }
})

onMounted(async () => {
  const { lat, lon } = route.query
  weatherData.value = await WeatherService.getWeatherData(lat, lon)
})
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
p {
  font-size: 18px;
  margin: 4px 0;
}
</style>
