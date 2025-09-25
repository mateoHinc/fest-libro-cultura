<template>
  <section id="novedades" class="py-5">
    <div class="container">
      <div class="align-items-center row g-4">
        <div class="col-lg-6">
          <h2 class="section-title fw-bold">Novedades</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="n in news" :key="n.id">
              <div class="d-flex justify-content-between align-items start">
                <div>
                  <strong>{{ n.title }}</strong>
                  <p class="mb-1 text-body-secondary small">
                    {{ n.date }} · {{ n.tag }}
                  </p>
                  <p class="mb-0">{{ n.summary }}</p>
                </div>
                <span
                  class="align-self-start rounded-pill text-bg-secondary badge"
                  >{{ n.readTime }} min</span
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <div class="bg-body-tertiary p-4 border rounded-4">
            <h3 class="h5 fw-bold">Suscríbete al boletín</h3>
            <p class="text-body-secondary">
              Recibe programación destacada y noticias del festival en tu
              correo.
            </p>
            <form class="row gy-2" @submit.prevent="$emit('suscribe', email)">
              <div class="col-12 col-sm-8">
                <label for="emailBoletin" class="visually-hidden">Correo</label>
                <input
                  v-model.trim="email"
                  type="email"
                  id="emailBoletin"
                  class="form-control"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              <div class="d-grid col-12 col-sm-4">
                <button class="btn btn-primary" type="submit">
                  <i class="me-1 bi bi-send"></i>Suscribirme
                </button>
              </div>
              <div class="col-12">
                <small class="text-body-secondary"
                  >Al suscribirte aceptas nuestras políticas de datos.</small
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { newsData } from "@/data/index.js";
const news = newsData;
const email = ref("");
</script>
