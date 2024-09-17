<script setup>
import JobDescription from './components/JobDescription.vue'
</script>

<template>
  <div class="cursor" :v-if="leaveMouse"></div>
  <div class="cursor-small"></div>
  <div id="app">
    <JobDescription position-id=""/>
    <br />
    <JobDescription position-id=""/>
  </div>
</template>

<style scoped>

header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .cursor {
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: yellow;
    opacity: 0.4;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .cursor-small {
    position: absolute;
    height: 5px;
    width: 5px;
    background-color: black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
