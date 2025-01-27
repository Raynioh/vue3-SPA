<template>
  <div class="temperature-converter">
    <label for="celsius"
      >Temperatura u °C:
      <input id="celsius" type="number" v-model.number="celsius" @input="updateFahrenheit" />
    </label>
    <label for="fahrenheit"
      >Temperatura u °F:
      <input id="fahrenheit" type="number" v-model.number="fahrenheit" @input="updateCelsius"
    /></label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      celsius: this.temp,
      fahrenheit: (this.temp * 9) / 5 + 32,
    }
  },
  props: ['temp'],
  methods: {
    updateCelsius() {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9
    },
    updateFahrenheit() {
      this.fahrenheit = (this.celsius * 9) / 5 + 32
    },
  },
}
</script>

<style scoped>
.temperature-converter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 50px auto;
}
label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
input {
  padding: 5px;
  font-size: 1em;
  margin-top: 5px;
}
</style>

<!-- <template>
  <div class="temperature-converter">
    <label>
      Celzijus (°C):
      <input
        type="number"
        v-model.number="celsius"
        @input="updateFromCelsius"
        placeholder="Unesite temperaturu u °C"
      />
    </label>
    <label>
      Fahrenheit (°F):
      <input
        type="number"
        v-model.number="fahrenheit"
        @input="updateFromFahrenheit"
        placeholder="Unesite temperaturu u °F"
      />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      celsius: null,
      fahrenheit: null,
      isUpdating: false,
    };
  },
  methods: {
    updateFromCelsius() {
      if (this.isUpdating) return;
      this.isUpdating = true;
      this.fahrenheit = this.celsius !== null ? (this.celsius * 9) / 5 + 32 : null;
      this.isUpdating = false;
    },
    updateFromFahrenheit() {
      if (this.isUpdating) return;
      this.isUpdating = true;
      this.celsius = this.fahrenheit !== null ? ((this.fahrenheit - 32) * 5) / 9 : null;
      this.isUpdating = false;
    },
  },
};
</script>

<style scoped>
.temperature-converter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}
label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
input {
  padding: 5px;
  font-size: 1em;
  margin-top: 5px;
}
</style> -->
