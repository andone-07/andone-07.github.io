<template>
  <header class="site-header">
    <div class="left-section">
      <a class="name" href="#about" @click="setActiveSection('about')">
        Jiawen Zhu
      </a>
    </div>
    <nav class="right-section" aria-label="Primary navigation">
      <div class="breadcrumb" role="list">
        <a
          v-for="item in navItems"
          :key="item.id"
          :class="{ active: activeSection === item.id }"
          :href="`#${item.id}`"
          role="listitem"
          @click="setActiveSection(item.id)"
          >{{ item.label }}</a
        >
      </div>
      <div class="actions">
        <button
          class="btn-theme"
          type="button"
          :aria-label="themeLabel"
          @click="toggleTheme"
        >
          <img :src="themeIcon" class="theme-icon" alt="" aria-hidden="true" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
import darkIcon from "@/assets/icons/dark.svg";
import lightIcon from "@/assets/icons/light.svg";
import { navItems, type SectionId } from "@/data/profile";

export default defineComponent({
  name: "PageHead",
  setup() {
    const activeSection = ref<SectionId>("about");
    const isDarkTheme = ref(false);
    let isManualClick = false;
    let animationFrame = 0;

    const applyTheme = () => {
      document.documentElement.classList.toggle(
        "dark-theme",
        isDarkTheme.value
      );
      localStorage.setItem("theme", isDarkTheme.value ? "dark" : "light");
    };

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      applyTheme();
    };

    const setActiveSection = (section: SectionId) => {
      activeSection.value = section;
      isManualClick = true;
      setTimeout(() => {
        isManualClick = false;
      }, 400);
    };

    const checkScroll = () => {
      if (isManualClick) return;

      const headerOffset = window.innerHeight * 0.061 + 16;
      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
          activeSection.value = id;
          break;
        }
      }
    };

    const onScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        checkScroll();
      });
    };

    onMounted(() => {
      isDarkTheme.value = localStorage.getItem("theme") === "dark";
      applyTheme();
      window.addEventListener("scroll", onScroll, { passive: true });
      checkScroll();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    });

    const themeIcon = computed(() =>
      isDarkTheme.value ? lightIcon : darkIcon
    );
    const themeLabel = computed(() =>
      isDarkTheme.value ? "Switch to light theme" : "Switch to dark theme"
    );

    return {
      activeSection,
      navItems,
      setActiveSection,
      themeIcon,
      themeLabel,
      toggleTheme,
    };
  },
});
</script>

<style scoped>
.site-header {
  width: 100%;
  height: 100%;
  padding: 0 clamp(1rem, 3vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-primary);
  box-sizing: border-box;
}

.left-section {
  font-size: clamp(1.6rem, 3vh, 2.3rem);
  font-weight: 550;
  font-family: "Carattere";
  line-height: 1;
}

.name {
  color: var(--text-primary);
  text-decoration: none;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}

.breadcrumb {
  font-family: "Inter";
  display: flex;
  gap: clamp(0.75rem, 1.5vw, 1.3rem);
  font-size: clamp(0.95rem, 2.1vh, 1.2rem);
}

.breadcrumb a {
  text-decoration: none;
  color: var(--text-muted);
  position: relative;
  transition: color 0.2s ease;
  font-weight: 300;
}

.breadcrumb a.active {
  color: var(--text-primary);
  font-weight: 500;
}

.breadcrumb a:not(:last-child):after {
  content: " / ";
  right: calc(clamp(0.75rem, 1.5vw, 1.3rem) / -1.6);
  position: absolute;
  color: var(--text-muted);
}

.actions {
  display: flex;
  gap: 10px;
}

.btn-theme {
  background-color: var(--theme-button-bg);
  cursor: pointer;
  border: 1px solid var(--theme-button-border);
  border-radius: 6px;
  display: grid;
  place-items: center;
  height: 2rem;
  width: 2rem;
  transition: background-color 0.2s ease;
}

.btn-theme:hover {
  background-color: var(--button-hover-bg);
}

.theme-icon {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

@media (max-width: 640px) {
  .site-header {
    padding: 0 1rem;
  }

  .breadcrumb {
    gap: 0.75rem;
  }

  .breadcrumb a:not(:last-child):after {
    right: -0.5rem;
  }
}
</style>
