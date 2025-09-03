<template>
  <header id="inicio" class="d-flex align-items-center hero">
    <div class="py-5 container hero-content">
      <div class="justify-content-start row">
        <div class="col-12 col-lg-7">
          <div class="p-4 p-md-5 rounded-4 text-white glass">
            <span class="bg-warning mb-2 text-dark badge"
              >Próxima edición · Septiembre 2025</span
            >
            <h1 class="display-5 fw-bold section-title">
              Fiesta del Libro y la Cultura de Medellín
            </h1>
            <p class="mb-4 lead">
              Lectura, música, arte y conversaciones en la ciudad de la eterna
              primavera. ¡Entrada libre y para todas las edades!
            </p>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <a href="#programa" class="btn btn-light btn-lg">
                <i class="me-2 bi bi-calendar-event"></i>Explorar agendar
              </a>
              <a href="#invitados" class="btn-outline-light btn btn btn-lg">
                <i class="me-2 bi bi-people"></i>Autores invitados
              </a>
            </div>
            <hr class="my-4 border-light" />
            <div class="d-flex flex-wrap align-items-center gap-4">
              <div class="d-flex align-items-center gap-3">
                <i class="bi bi-geo-alt fs-3" aria-hidden="true"></i>
                <span
                  >Zona Norte (Jardín Botánico, Parque Explora) · Medellín,
                  Antioquia</span
                >
              </div>
              <div class="ms-auto"></div>
            </div>
            <div class="mt-3">
              <small class="text-white-50">Comienza en:</small>
              <div class="flex-wrap gap-3 mt-1" aria-live="polite">
                <span class="px-3 py-2 text-bg-light text-dark badge">
                  <strong>{{ countdown.days }}</strong> días
                </span>
                <span class="px-3 py-2 text-bg-light text-dark badge">
                  <strong>{{ countdown.hours }}</strong> h
                </span>
                <span class="px-3 py-2 text-bg-light text-dark badge">
                  <strong>{{ countdown.minutes }}</strong> min
                </span>
                <span class="px-3 py-2 text-bg-light text-dark badge">
                  <strong>{{ countdown.seconds }}</strong> s
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({ countdown: { type: Object, required: true } });
</script>
