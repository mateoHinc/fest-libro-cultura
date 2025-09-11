<template>
  <section id="programa" class="py-5">
    <div class="container">
      <div class="d-flex flex-wrap align-items-end gap-3 mb-4">
        <div>
          <h2 class="mb-0 section-title fw-bold">Programa</h2>
          <p class="mb-0 text-body-secondary">
            Filtra por día, escenario y tipo de actividad.
          </p>
        </div>
        <div class="ms-auto"></div>
        <div class="input-group" style="max-width: 320px">
          <span class="input-group-text"><i class="bi bi-search"></i></span>
          <input
            v-model.trim="localSearch"
            type="search"
            class="form-control"
            placeholder="Buscar charla, autor, tema..."
          />
        </div>
      </div>

      <div class="align-items-end mb-4 row g-3">
        <div class="col-12 col-md-4">
          <label class="form-label">Día</label>
          <select v-model="localFilters.day" class="form-select">
            <option value="">Todos</option>
            <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
          </select>
        </div>
        <div class="col-12 col-md-4">
          <label class="form-label">Escenario</label>
          <select v-model="localFilters.venue" class="form-select">
            <option value="">Todos</option>
            <option v-for="v in venues" :key="v" :value="v">{{ v }}</option>
          </select>
        </div>
        <div class="col-12 col-md-4">
          <label class="form-label">Tipo</label>
          <select v-model="localFilters.type" class="form-select">
            <option value="">Todos</option>
            <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>
      </div>

      <div class="row g-4">
        <div
          class="col-12 col-md-6 col-xl-4"
          v-for="ev in filteredEvents"
          :key="ev.id"
        >
          <!-- Add component EventCard -->
        </div>
      </div>

      <div class="text-center" v-if="filteredEvents.length === 0">
        <div class="mt-4 alert alert-info" role="alert">
          No encontramos actividades con esos filtros. Intenta modificar la
          búsqueda.
        </div>
      </div>
    </div>

    <!-- Modal Detalles -->
    <div
      class="modal fade"
      id="eventModal"
      tabindex="-1"
      aria-hidden="true"
      ref="eventModalRef"
    >
      <div class="modal-dialog modal-lg modal-dialog centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalEvent?.title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-wrap gap-3 mb-2">
              <span class="text-bg-primary badge">{{ modalEvent?.type }}</span>
              <span class="text-bg-light text-dark badge">
                <i class="me-1 bi bi-calendar-event"></i>
                {{ modalEvent?.day }} · {{ modalEvent?.time }}
              </span>
              <span class="text-bg-light text-dark badge">
                <i class="me-1 bi bi-geo-alt">{{ modalEvent?.venue }}</i>
              </span>
            </div>
            <p class="mb-3">{{ modalEvent?.description }}</p>
            <p v-if="modalEvent?.speakers?.length" class="mb-0">
              <i class="me-2 bi bi-mic"></i><strong>Ponentes:</strong>
              {{ modalEvent?.speakers.join(", ") }}
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn-outline-secondary btn" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button
              class="btn btn-primary"
              @click="$emit('add-to-calendar', modalEvent)"
            >
              <i class="me-1 bi bi-calendar-plus"></i>Agregar al calendario
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
