<template>
  <section id="invitados" class="bg-body-tertiary py-5">
    <div class="container">
      <div class="d-flex align-items-end gap-3 mb-4">
        <div>
          <h2 class="mb-0 section-title fw-bold">Invitados</h2>
          <p class="mb-0 text-body-secondary">
            Autores, Editores y promotores de lectura.
          </p>
        </div>
        <div class="ms-auto"></div>
        <div class="input-group" style="max-width: 320px">
          <span class="input-group-text"><i class="bi bi-search"></i></span>
          <input
            type="search"
            class="form-control"
            v-model.trim="q"
            placeholder="Buscar invitado..."
          />
        </div>
      </div>
      <div class="row g-4">
        <div
          v-for="p in filtered"
          :key="p.id"
          class="col-12 col-sm-6 col-lg-4 col-xl-3"
        >
          <div class="h-100 card card-hover">
            <img :src="p.photo" alt="'Foto de '+p.name" class="card-img-top" />
            <div class="d-flex flex-column card-body">
              <h5 class="card-title">{{ p.name }}</h5>
              <p class="mb-3 text-body-secondary small">
                {{ p.country }} · {{ p.role }}
              </p>
              <p class="card-text small">{{ p.bio }}</p>
              <div class="d-flex gap-2 mt-auto">
                <a
                  v-if="p.website"
                  :href="p.website"
                  target="_blank"
                  rel="noopener"
                  class="btn-outline-secondary btn btn-sm"
                  ><i class="me-1 bi bi-globe2"></i>Web</a
                >
                <button class="btn btn-primary btn-sm" @click="open(p)">
                  <i class="me-1 bi bi-person-vcard"></i>Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Invitado -->
    <div
      class="modal fade"
      id="guestModal"
      tabindex="-1"
      aria-hidden="true"
      ref="guestModalRef"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modal?.name }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-flex align-items-center gap-3 mb-3">
              <img
                :src="modal?.photo"
                :alt="'Foto de ' + (modal?.name || 'invitado')"
                class="avatar"
              />
              <div class="text-body-secondary small">
                {{ modal?.country }} · {{ modal?.role }}
              </div>
            </div>
            <p>{{ modal?.bio }}</p>
            <a
              v-if="modal?.website"
              :href="modal.website"
              target="_blank"
              rel="noopener"
              class="btn-outline-secondary btn btn-sm"
              ><i class="me-1 bi bi-globe2"></i>Visitar sitio</a
            >
          </div>
          <div class="modal-foot">
            <button class="btn btn-primary" data-bs-dismiss="modal">
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import * as bootstrap from "bootstrap";

const props = defineProps({ guests: { type: Array, required: true } });
const q = ref("");
const filtered = computed(() => {
  const term = q.value.toLocaleLowerCase();
  return props.guests.filter((g) =>
    [g.name, g.country, g.role, g.bio].join(" ").toLowerCase().includes(term)
  );
});

const modal = ref(null);
const guestModalRef = ref(null);
let modalInstance = null;

function open(p) {
  modal.value = p;
  if (!modalInstance) modalInstance = new bootstrap.Modal(guestModalRef.value);
  modalInstance.show();
}
</script>

<style></style>
