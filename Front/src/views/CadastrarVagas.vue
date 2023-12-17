<template>
  <div class="homeBtn">
    <botao-home />
  </div>
  <div class="container">
    <form-cadastro />
  </div>
</template>

<script>
import FormCadastro from "@/components/FormCadastro.vue";
import BotaoHome from "@/components/BotaoHome.vue";

export default {
  name: "CadastrarVagas",
  components: {
    FormCadastro,
    BotaoHome,
  },
};
</script>

<style>
.homeBtn {
  justify-items: flex-start;
  justify-content: flex-start;
}
.container {
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>
