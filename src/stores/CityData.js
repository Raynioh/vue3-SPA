import { defineStore } from 'pinia'

export const useFavsStore = defineStore('favourites', {
  state: () => ({
    cityData: null,
  }),
  actions: {
    addCityData(name, country, lat, lon) {
      this.cityData = { name: name, country: country, lat: lat, lon: lon }
    },
  },
})
