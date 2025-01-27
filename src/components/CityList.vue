<template>
  <div>
    <h2>Rezultati pretrage:</h2>
    <ul>
      <li v-for="city in props.cities" :key="city.lat + city.lon">
        <p>
          <strong>{{ city.name }}</strong>, {{ city.country }}<br />
          Geografska širina: {{ city.lat }}, Geografska dužina: {{ city.lon }}
        </p>
        <button @click="selectCity(city)">Prikaži prognozu</button>
        <button @click="addToFavorites(city)">Dodaj u omiljene</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  cities: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(['select', 'add-favorite']);

const selectCity = (city) => {
  emits('select', city);
};

const addToFavorites = (city) => {
  emits('add-favorite', city);
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1em;
}

button {
  margin-right: 0.5em;
}
</style>
