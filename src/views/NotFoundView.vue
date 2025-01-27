<template>
  <div>
    <h1>404 - Stranica nije pronađena</h1>
    <p>Čini se da stranica koju tražite ne postoji.</p>
    <router-link to="/">Vrati se na početnu stranicu</router-link>
  </div>
</template>

<style scoped>
h1 {
  color: red;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
