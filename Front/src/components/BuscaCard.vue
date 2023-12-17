
<template>
  <div class="input-container">
    <input
      type="text"
      v-model="termo"
      placeholder="&#128269; Buscar"
      @input="mostrarBotaoBuscar"
    />
    <button v-if="termo" class="botao-buscar" @click="realizarBusca">
      Buscar
    </button>
  </div>
</template>

<script>
export default {
  name: "BuscaCard",
  data() {
    return {
      termo: "",
    };
  },
  methods: {
    realizarBusca() {
      this.$emit("buscar", this.termo);
    },
  },
};
</script>

<style>
.input-container {
  align-items: center;
  justify-content: center;
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  width: 100%;
  padding: 10px;
  background-color: #b8cad4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-container input[type="text"] {
  flex-grow: 1;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #b8cad4;
}

/* .componente-busca input[type="text"]:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
} */

.input-container .botao-buscar {
  padding: 5px 10px;
  background-color: rgba(9, 102, 121, 1);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
}

.input-container .botao-buscar:hover {
  background-color: rgba(0, 255, 248, 1);
}
</style>