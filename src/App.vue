<template>
  <div>
    <Navbar :theme="theme" @toggle-theme="toggleTheme" />
    <Hero :countdown="countdown" />
    <ProgramSection
      :events="events"
      v-model:search="search"
      v-model:filters="filters"
      :bookmarked="bookmarked"
      @toggle-bookmark="toggleBookmark"
      @add-to-calendar="addToCalendar"
    />
    <GuestsSection :guests="guests" />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero.vue";
import ProgramSection from "./components/ProgramSection.vue";
import GuestsSection from "./components/GuestsSection.vue";

import { useTheme } from "./composables/useTheme";
import { useCountdown } from "./composables/useCountdown";
import { useBookmarks } from "./composables/useBookmarks";
import { eventsData, guestsData, galleryData, newsData } from "./data/index.js";

const { theme, toggleTheme } = useTheme();
const festivalStart = ref(new Date("2026-09-12T10:00:00-05:00"));
const countdown = useCountdown(festivalStart);

const search = ref("");
const filters = reactive({ day: "", venue: "", type: "" });

const { bookmarked, toggleBookmark, isBookmarked } = useBookmarks();

const events = ref(eventsData);
const guests = ref(guestsData);
const gallery = ref(galleryData);
const news = ref(newsData);

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
