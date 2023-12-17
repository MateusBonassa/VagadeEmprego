<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "CardContainer",
};
</script>


<style >
.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 20px;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 102, 121, 1) 35%,
    rgba(0, 249, 242, 0.0984768907563025) 100%
  );
  display: flex;
  flex-direction: row;
  min-height: 94vh;
  border-radius: 8px;
  margin-top: 8px;
}

.card-container > .flip-card {
  /* flex-basis: calc(33.33% - 10px);  */
  /* margin-top: 40px;
  /* margin-right: 10px;  
  margin-bottom: 20px; */
  padding: 15px;
}
</style>

