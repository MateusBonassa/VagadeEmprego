<template>
  <div class="home">
    <router-link to="/" class="home-button">
      <i class="fas fa-home"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BotaoHome",
};
</script>

<style scoped>
.home-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(9, 102, 121, 1);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.router-link {
  color: white;
  text-decoration: none;
}

.home-button:hover {
  background-color: rgba(0, 255, 248, 1);
}
</style>