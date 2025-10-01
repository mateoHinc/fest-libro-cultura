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
    <MapSection />
    <GallerySection :gallery="gallery" />
    <NewsletterSection @subscribe="subscribe" />
    <FAQSection />
    <ContactSection @send="sendMessage" />
    <FooterBar />
    <a href="#programa" class="sticky-cta shadow btn btn-lg btn-primary">
      <i class="me-2 bi bi-calendar2-week"></i>Programa
    </a>
    <button
      id="btnTop"
      class="scroll-top btn btn-secondary"
      @click="scrollTop"
      aria-label="Volver arriba"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

import Navbar from "./components/Navbar/Navbar.vue";
import Hero from "./components/Hero.vue";
import ProgramSection from "./components/ProgramSection.vue";
import GuestsSection from "./components/GuestsSection.vue";
import MapSection from "./components/MapSection.vue";
import GallerySection from "./components/GallerySection.vue";
import NewsletterSection from "./components/NewsletterSection.vue";
import FAQSection from "./components/FAQSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterBar from "./components/FooterBar.vue";

import { useTheme } from "./composables/useTheme";
import { useCountdown } from "./composables/useCountdown";
import { useBookmarks } from "./composables/useBookmarks";
import { eventsData, guestsData, galleryData, newsData } from "./data/index.js";
import { downloadICSForEvent } from "./utils/ics";

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

function addToCalendar(ev) {
  if (!ev) return;
  downloadICSForEvent(ev);
}

function subscribe(email) {
  if (!email) return;
  alert(`¡Gracias! Te enviaremos novedades a: ${email}`);
}

function sendMessage(payload) {
  const { name, email, message } = payload;
  if (!name || !email || !message) {
    alert("Por favor completa el formulario.");
    return;
  }
  alert("¡Gracias por escribirnos! Te responderemos pronto.");
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  document.documentElement.setAttribute("data-bs-theme", theme.value);
  // Botón volver arriba
  const btn = document.getElementById("btnTop");
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 400 ? "inline-flex" : "none";
  });
});

// export default {
//   name: "App",
//   components: {
//     Navbar,
//     Hero,
//   },
// };
</script>
