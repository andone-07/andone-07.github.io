<template>
  <div class="main-component">
    <div class="head">
      <PageHead />
    </div>
    <main class="content">
      <section id="about" class="section about">
        <AboutComponent />
      </section>
      <section class="section introduction">
        <IntroductionComponent />
      </section>
      <section id="news" class="section section-tinted news">
        <NewsComponent />
      </section>
      <section id="publication" class="section section-tinted publication">
        <PublicationComponent />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutComponent from "./AboutComponent.vue";
import IntroductionComponent from "./IntroductionComponent.vue";
import NewsComponent from "./NewsComponent.vue";
import PageHead from "./PageHead.vue";
import PublicationComponent from "./PublicationComponent.vue";

export default defineComponent({
  name: "MainComponent",
  components: {
    AboutComponent,
    IntroductionComponent,
    NewsComponent,
    PageHead,
    PublicationComponent,
  },
});
</script>

<style scoped>
.main-component {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.head {
  height: var(--header-height);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.content {
  display: flex;
  flex-direction: column;
  padding-top: var(--header-height);
}

.section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: clamp(1.3rem, 3vh, 2.2rem) clamp(1rem, 4vw, 2rem);
  box-sizing: border-box;
  scroll-margin-top: calc(var(--header-height) + 1rem);
}

.about {
  padding-top: clamp(1.4rem, 3vh, 2.5rem);
  padding-bottom: clamp(0.9rem, 2vh, 1.5rem);
}

.introduction {
  padding-top: 0;
  border-bottom: 1px solid var(--border-color);
}

.section-tinted {
  background-color: var(--section-bg);
  border-bottom: 1px solid var(--border-color);
}

.publication {
  min-height: 46vh;
}
</style>
