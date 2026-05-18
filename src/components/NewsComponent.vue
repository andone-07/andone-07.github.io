<template>
  <section class="news-container" aria-labelledby="news-title">
    <h2 id="news-title" class="section-title">News</h2>
    <div class="news-content">
      <article v-for="item in newsItems" :key="item.date" class="news-item">
        <time class="news-item-time">{{ item.date }}</time>
        <p class="news-item-content">
          <template
            v-for="(part, index) in formatNewsContent(item)"
            :key="`${item.date}-${index}`"
          >
            <strong v-if="part.highlight">{{ part.text }}</strong>
            <span v-else>{{ part.text }}</span>
          </template>
        </p>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { newsItems, type NewsItem } from "@/data/profile";

interface NewsTextPart {
  text: string;
  highlight: boolean;
}

const formatNewsContent = (item: NewsItem): NewsTextPart[] => {
  if (!item.highlights.length) {
    return [{ text: item.content, highlight: false }];
  }

  const highlights = new Set(item.highlights);
  const escaped = item.highlights.map((text) =>
    text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const matcher = new RegExp(`(${escaped.join("|")})`, "g");

  return item.content
    .split(matcher)
    .filter(Boolean)
    .map((text) => ({
      text,
      highlight: highlights.has(text),
    }));
};

export default defineComponent({
  name: "NewsComponent",
  setup() {
    return {
      formatNewsContent,
      newsItems,
    };
  },
});
</script>

<style scoped>
.news-container {
  width: min(100%, 1080px);
  margin: 0 auto;
  text-align: left;
  padding-top: clamp(1.2rem, 2vh, 1.8rem);
}

.section-title {
  font-family: "Abhaya Libre", Georgia, serif;
  font-size: clamp(1.6rem, 3vh, 2rem);
  font-weight: 600;
  margin: 0 0 1.2rem;
  color: var(--text-primary);
}

.news-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.news-item {
  display: grid;
  grid-template-columns: minmax(4.5rem, 7rem) 1fr;
  gap: clamp(1rem, 2vw, 2rem);
  align-items: start;
}

.news-item-time {
  font-family: "Abhaya Libre", Georgia, serif;
  font-size: clamp(1rem, 2vh, 1.22rem);
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

.news-item-content {
  margin: 0;
  font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", serif;
  font-size: clamp(1rem, 1.8vh, 1.15rem);
  color: var(--text-primary);
  line-height: 1.6;
}

strong {
  color: var(--text-primary);
  font-weight: 800;
}

@media (max-width: 520px) {
  .news-item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
