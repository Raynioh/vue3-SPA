<template>
  <div>
    <h1>Omiljeni gradovi</h1>
    <ul>
      <li v-for="city in favourites" :key="city">
        <p>{{ city.name }}, {{ city.country }}</p>
        <button @click="handleCitySelect(city)">Prikaži prognozu</button>
        <button @click="removeFavorite(city.cityID)">Ukloni</button>
      </li>
    </ul>
    <p v-if="favourites && favourites.length === 0">Nema omiljenih gradova.</p>
  </div>
</template>

<script setup>
import { useFavsStore } from '../stores/CityData'
import router from '@/router'

const store = useFavsStore()
const favourites = JSON.parse(localStorage.getItem('favouriteCities'))
const removeFavorite = (cityID) => {
  const updatedList = favourites.filter((a) => a.cityID !== cityID)
  localStorage.setItem('favouriteCities', JSON.stringify(updatedList))
  window.location.reload()
}

const handleCitySelect = (city) => {
  store.addCityData(city.name, city.country)
  router.push({
    path: 'weather',
    query: {
      lat: city.lat,
      lon: city.lon,
    },
  })
}
</script>

<style scoped>
h1 {
  color: black;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: darkred;
}
</style>
