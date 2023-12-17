<template>
  <div
    class="flip-card"
    :class="{ 'flip-card--flipped': isFlipped }"
    @mouseenter="flipCard"
  >
    <div class="flip-card__front">
      <img class="flip-card__logo" :src="require('../../../Back/Imgs/'+logo)" alt="Logo da empresa" /> 
      <h2 class="flip-card__cargo">{{ cargo }}</h2>
      <p class="flip-card__regime">{{ regime }}</p>
      <p class="flip-card__cidade">{{ cidade }}</p>
      <p class="flip-card__estado">{{ estado }}</p>
    </div>
    <div class="flip-card__back">
      <p class="flip-card__requisitos">
        <strong>Requisitos:</strong> {{ requisitos }}
      </p>
      <p class="flip-card__formacao">
        <strong>Formação:</strong> {{ formacao }}
      </p>
      <p class="flip-card__conhecimentos">
        <strong>Conhecimentos:</strong> {{ conhecimentos }}
      </p>
      <p class="flip-card__jornada"><strong>Jornada:</strong> {{ jornada }}</p>
      <p class="flip-card__remuneracao">
        <strong>Remuneração:</strong> {{ remuneracao }}
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "FlipCard",
  props: {
    logo: {
      type: String,
      required: true,
    },
    cargo: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    requisitos: {
      type: String,
      required: true,
    },
    formacao: {
      type: String,
      required: true,
    },
    conhecimentos: {
      type: String,
      required: true,
    },
    regime: {
      type: String,
      required: true,
    },
    jornada: {
      type: String,
      required: true,
    },
    remuneracao: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
      // bgColor: this.getRandomColor()
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    // getRandomColor() {
    //   const letters = '0123456789ABCDEF'
    //   let color = '#'
    //   for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)]
    //   }
    //   return color
    // }
  },
};
</script>
  
  <style >
.flip-card {
  margin: 20px;
  perspective: 1000px;
  width: 300px;
  height: 300px;
  position: relative;
}

.flip-card__front,
.flip-card__back {
  font-family: sans-serif;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
  width: 270px;
  height: 310px;
  backface-visibility: hidden;
  transition: transform 0.8s;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.flip-card__front {
  background-color: #b8cad4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.flip-card__back {
  background-color: #87a5b6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 20px;
  text-align: left;
  transform: rotateY(180deg);
}

.flip-card--flipped .flip-card__front {
  transform: rotateY(180deg);
}

.flip-card--flipped .flip-card__back {
  transform: rotateY(0deg);
}

.flip-card__logo {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}

.flip-card__cargo {
  margin-top: 20px;
  font-size: 20px;
}

.flip-card__regime {
  margin-top: 20px;
  font-size: 18px;
}

.flip-card__cidade {
  margin-top: 30px;
  font-size: 18px;
}

.flip-card__estado {
  margin-top: -15px;
  font-size: 18px;
}

.flip-card__requisitos {
  margin-top: 17px;
  font-size: 16px;
  line-height: 1.5;
}

.flip-card__formacao,
.flip-card__conhecimentos,
.flip-card__jornada,
.flip-card__remuneracao {
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.5;
}
</style>
  