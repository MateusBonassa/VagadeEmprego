<template>
  <div>
  <div class="header">
    <botao-home />
    <busca-card @buscar="executarBusca" />
  </div>
  <div>
    <card-container id="cards">
      <div v-for="i in info" :key="i.cargo">
        <flip-card
          :logo="i.logo"
          :cargo="i.cargo"
          :cidade="i.cidade"
          :estado="i.estado"
          :requisitos="i.requisitos"
          :formacao="i.formacao"
          :conhecimentos="i.conhecimentos"
          :regime="i.regime"
          :jornada="i.jornada"
          :remuneracao="i.remuneracao"
        />
      </div>
    </card-container>
  </div>
</div>
</template>
  
  <script>
import FlipCard from "@/components/FlipCard.vue";
import CardContainer from "@/components/CardContainer.vue";
import BuscaCard from "@/components/BuscaCard.vue";
import BotaoHome from "@/components/BotaoHome.vue";

export default {
  name: "Buscar",
  components: {
    FlipCard,
    CardContainer,
    BuscaCard,
    BotaoHome,
  },
  data() {
    return { info: [] };
  },
  mounted() {
    axios.get("http://localhost:8081/vagas?filtro=").then((response) => {
      response.data.forEach((element) => {
        console.log(element.logo);
      });
      this.info = response.data;
    });
  },
  methods: {
    executarBusca(termo) {
      //alert(termo);
      axios
        .get("http://localhost:8081/vagas?filtro=" + termo)
        .then((response) => {
          this.info = response.data;
        });
    },
  },
};
</script>

  <style>
.header {
  display: flex;
  width: 100%;
  justify-content: space-around;
  max-width: 100%;
}

.input-container {
  margin-left: 8px;
}
</style>