<template>
  <p class="intro">
    {{ introduction.textBeforeGroup }}
    <a
      :href="introduction.group.href"
      target="_blank"
      rel="noopener noreferrer"
      class="highlight-blue link-text"
      >{{ introduction.group.label }}</a
    >
    of <strong>{{ introduction.university }}</strong
    >, supervised by
    <a
      :href="introduction.supervisor.href"
      target="_blank"
      rel="noopener noreferrer"
      class="highlight-blue link-text"
      >{{ introduction.supervisor.label }}</a
    >. I obtained my bachelor's degree in Computer Science and Technology from
    <strong>{{ introduction.bachelorSchool }}</strong> in 2024. My research
    focuses on
    <span class="highlight-orange">{{ introduction.researchGoal }}</span
    >.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { introduction } from "@/data/profile";

export default defineComponent({
  name: "IntroductionComponent",
  setup() {
    return {
      introduction,
    };
  },
});
</script>

<style scoped>
.intro {
  width: min(100%, 1080px);
  margin: 0 auto;
  text-align: left;
  font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  font-size: clamp(1rem, 1.8vh, 1.15rem);
  font-weight: 400;
  line-height: 1.8;
  color: var(--text-primary);
}

strong {
  color: var(--text-primary);
  font-weight: 800;
}

.highlight-blue {
  color: var(--highlight-blue);
  font-weight: 800;
}

.highlight-orange {
  color: var(--highlight-orange);
  font-weight: 800;
}

.link-text {
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.link-text:hover {
  opacity: 0.78;
}
</style>
