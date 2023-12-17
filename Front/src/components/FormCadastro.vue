<template>
  <div class="container">
    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="logo">Logo</label>
        <input
          type="file"
          id="logo"
          ref="logoInput"
          @change="handleLogoChange"
          accept="image/*"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="cargo">Cargo</label>
        <input
          type="text"
          id="cargo"
          v-model="vaga.cargo"
          class="form-control"
          placeholder="Analista de sistemas"
        />
      </div>
      <div class="form-group">
        <label for="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          v-model="vaga.cidade"
          class="form-control"
          placeholder="Presidente Prudente"
        />
      </div>
      <div class="form-group">
        <label for="estado">Estado</label>
        <input
          type="text"
          id="estado"
          v-model="vaga.estado"
          class="form-control"
          placeholder="SP"
        />
      </div>
      <div class="form-group">
        <label for="requisitos">Requisitos</label>
        <input
          type="text"
          id="requisitos"
          v-model="vaga.requisitos"
          class="form-control"
          placeholder="VUE.js"
        />
      </div>
      <div class="form-group">
        <label for="formacao">Formação</label>
        <input
          type="text"
          id="formacao"
          v-model="vaga.formacao"
          class="form-control"
          placeholder="Sistemas de Informação"
        />
      </div>
      <div class="form-group">
        <label for="conhecimentos">Conhecimentos</label>
        <input
          type="text"
          id="conhecimentos"
          v-model="vaga.conhecimentos"
          class="form-control"
          placeholder="Onde vende cerveja barata kk"
        />
      </div>
      <div class="form-group">
        <label for="regime">Regime</label>
        <select
          id="regime"
          v-model="vaga.regime"
          class="form-control select-input"
        >
          <option value="" disabled selected>Selecione o regime</option>
          <option value="clt">CLT</option>
          <option value="cnpj">CNPJ</option>
        </select>
      </div>

      <div class="form-group">
        <label for="jornada">Jornada</label>
        <input
          type="text"
          id="jornada"
          v-model="vaga.jornada"
          class="form-control"
          placeholder="40 Horas semanais"
        />
      </div>
      <div class="form-group">
        <label for="remuneracao">Remuneração</label>
        <input
          type="text"
          id="remuneracao"
          v-model="vaga.remuneracao"
          class="form-control"
          placeholder="R$ 13.000,00"
        />
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
  </div>
</template>
  
<script>
export default {
  name: "FormCadastro",
  data() {
    return {
      vaga: {
        logo: null,
        cargo: "",
        cidade: "",
        estado: "",
        requisitos: "",
        formacao: "",
        conhecimentos: "",
        regime: "",
        jornada: "",
        remuneracao: "",
      },
    };
  },
  methods: {
    handleLogoChange(event) {
      this.vaga.logo = event.target.files[0];
    },
    submitForm() {

      const formData = new FormData();
      formData.append("file", this.vaga.logo);
      formData.append("cargo", this.vaga.cargo);
      formData.append("cidade", this.vaga.cidade);
      formData.append("estado", this.vaga.estado);
      formData.append("requisitos", this.vaga.requisitos);
      formData.append("formacao", this.vaga.formacao);
      formData.append("conhecimentos", this.vaga.conhecimentos);
      formData.append("regime", this.vaga.regime);
      formData.append("jornada", this.vaga.jornada);
      formData.append("remuneracao", this.vaga.remuneracao);

      axios
        .post("http://localhost:8081/cadastrar", formData)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => {
          aler(error);
        });
    },
  },
};
</script>


<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #b8cad4;
}

.form-group {
  margin-bottom: 12px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"] {
  display: block;
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}

.select-input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: rgba(9, 102, 121, 1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(0, 255, 248, 1);
}

input[type="file"] {
  height: 100%;
  min-width: 98%;
  max-width: 98%;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 7px;
  border: 1px solid #ccc;
  background-color: #fff;

  border-radius: 5px;
  color: gray;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

input[type="file"]::file-selector-button:hover {
  background: rgba(9, 102, 121, 1);
}
</style>

  