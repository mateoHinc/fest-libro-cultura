<template>
  <section id="galeria" class="bg-body-tertiary py-5">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2 class="mb-0 section-title fw-bold">Galería</h2>
        <button class="btn-outline-secondary btn btn-sm" @click="shuffle">
          <i class="me-1 bi bi-shuffle"></i>Mezclar
        </button>
      </div>
      <div
        id="carouselGaleria"
        class="shadow-sm rounded-4 overflow-hidden carousel-slide"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{ active: i === 0 }"
            v-for="(g, i) in items"
            :key="g.src"
          >
            <img :src="g.src" :alt="g.alt" class="d-block w-100" />
            <div class="d-md-block carousel-caption d">
              <h5 class="fw-bold">{{ g.caption }}</h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselGaleria"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"
            ><span class="visually-hidden">Anterior</span></span
          >
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselGaleria"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"
            ><span class="visually-hidden">Siguiente</span></span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({ gallery: { type: Array, required: true } });
const items = ref(props.gallery.slice());
function shuffle() {
  items.value = items.value
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}
</script>

<style></style>
