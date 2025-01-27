<template>
  <div>
    <label for="country-select">Odaberite državu:</label>
    <select id="country-select" v-model="selectedCountry" @change="emitCountry">
      <option v-for="(country, code) in countries" :key="code" :value="code">
        {{ country.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import countries from '../data/slim-2.json'

const emit = defineEmits(['onSelect'])
const selectedCountry = ref('')

const emitCountry = function () {
  const countryName = countries[selectedCountry.value].name
  const countryA2 = countries[selectedCountry.value].alpha_2
  const countryCode = countries[selectedCountry.value].country_code
  const countryData = {
    name: countryName,
    A2: countryA2,
    code: countryCode,
  }
  emit('onSelect', countryData)
}
</script>

<style scoped>
label {
  margin-right: 10px;
}
select {
  padding: 5px;
}
</style>
