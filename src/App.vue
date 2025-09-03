<template>
  <div>
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
    <Hero :countdown="countdown" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero.vue";

import { useTheme } from "./composables/useTheme";
import { useCountdown } from "./composables/useCountdown";

const { theme, toggleTheme } = useTheme();
const festivalStart = ref(new Date("2025-09-12T10:00:00-05:00"));
const countdown = useCountdown(festivalStart);

// onMounted(() => {
//   document.documentElement.setAttribute("data-bs-theme", theme.value);
//   // Botón volver arriba
//   const btn = document.getElementById("btnTop");
//   window.addEventListener("scroll", () => {
//     btn.style.display = window.scrollY > 400 ? "inline-flex" : "none";
//   });
// });

// export default {
//   name: "App",
//   components: {
//     Navbar,
//     Hero,
//   },
// };
</script>
