<template>
  <MainComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainComponent from "./components/MainComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    MainComponent,
  },
});
</script>

<style>
#app {
  min-height: 100vh;
  font-family: "Inter", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

html,
body {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-primary);
}
</style>
