<template>
  <div>
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
  </div>
</template>

<script>
import { onMounted } from "vue";

import Navbar from "./components/Navbar/Navbar.vue";

import { useTheme } from "./composables/useTheme";

const { theme, toggleTheme } = useTheme();

onMounted(() => {
  document.documentElement.setAttribute("data-bs-theme", theme.value);
  // Botón volver arriba
  const btn = document.getElementById("btnTop");
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 400 ? "inline-flex" : "none";
  });
});

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss"></style>
