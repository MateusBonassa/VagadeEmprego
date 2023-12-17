<template>
  <div class="buttons-container">
    <router-link class="search-button" to="/buscar">
      <span class="button-content">
        Buscar
        <i class="fas fa-search icon"></i>
      </span>
    </router-link>
    <router-link class="add-button" to="/cadastrar">
      <span class="button-content">
        Cadastrar
        <i class="fas fa-plus icon"></i>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.router-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.button-content {
  display: flex;
  align-items: center;
  color: white;
}

.icon {
  margin-left: 5px;
  color: white;
}

.search-button,
.add-button {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 60px;
  background-color: rgba(9, 102, 121, 1);
  border: none;
  border-radius: 30px;
  font-size: 18px;
  margin: 0 10px;
  transition: background-color 0.3s;
}

.search-button:hover,
.add-button:hover {
  background-color: rgba(0, 255, 248, 1);
}

.search-button:focus,
.add-button:focus {
  outline: none; /* Remove a borda de foco ao clicar */
}

.search-button i,
.add-button i {
  text-decoration: none; /* Remove sublinhado do ícone */
}
</style>
