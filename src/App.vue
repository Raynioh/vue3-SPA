<template>
  <div class="app-container">
    <header>
      <nav>
        <router-link to="/">Početna</router-link>
        <router-link to="/favorites">Omiljeni gradovi</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; Vremenska prognoza</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

header {
  background: #333;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background: #333;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
</style>
