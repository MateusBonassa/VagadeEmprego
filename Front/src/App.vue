<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.search-button,
.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #b8cad4;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  margin: 0 10px;
  transition: background-color 0.3s;
}
</style>

//Mateus Bonassa Ederli e Gustavo da Rosa Ferruci