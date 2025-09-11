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
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
