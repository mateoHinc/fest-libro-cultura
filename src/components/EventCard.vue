<template>
  <div class="h-100 card card-hover">
    <div class="d-flex flex-column card-body">
      <div class="d-flex justify-content-between mb-2 align-items">
        <span class="text-bg-primary badge badge-type">{{ ev.type }}</span>
        <button
          @click="$emit('toggle-bookmark')"
          class="btn btn-sm"
          :class="bookmarked ? 'btn-warning' : 'btn-outline-secondary'"
          :aria-pressed="bookmarked"
          :aria-label="
            bookmarked ? 'Quitar de mis favoritos' : 'Agregar a mis favoritos'
          "
        >
          <i
            class="bi"
            :class="bookmarked ? 'bi-bookmark-star-fill' : 'bi-bookmark'"
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <h5 class="card-ti">{{ ev.title }}</h5>
      <p class="text-body-secondary card-text">{{ ev.description }}</p>
      <ul class="mb-4 list-unstyled small">
        <li class="mb-1">
          <i class="me-2 bi bi-calendar-event" aria-hidden="true"></i>
          {{ ev.day }} · {{ ev.time }}
        </li>
        <li class="mb-1">
          <i class="me-2 bi bi-geo-alt" aria-hidden="true"></i>
          {{ ev.venue }}
        </li>
        <li class="mb-1" v-if="ev.speakers?.length">
          <i class="me-2 bi bi-mic" aria-hidden="true"></i>
          {{ ev.speakers.join(", ") }}
        </li>
      </ul>
      <div class="d-flex gap-2 mt-auto">
        <button class="btn-outline-primary btn" @click="$emit('details')">
          <i class="me-1 bi bi-info-circle"></i>Detalles
        </button>
        <button class="btn btn-primary" @click="$emit('add-to-calendar')">
          <i class="me-1 bi bi-calendar-plus"></i>Agregar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ev: { type: Object, required: true },
  bookmarked: { type: Boolean, default: false },
});
</script>

<style></style>
