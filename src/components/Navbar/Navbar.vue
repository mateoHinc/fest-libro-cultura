<template>
  <nav class="sticky-top bg-body-tertiary shadow-sm navbar navbar-expand-lg">
    <div class="container">
      <a href="#inicio" class="d-flex align-items-center gap-2 navbar-brand">
        <span
          class="d-inline-flex align-items-center justify-content-center rounded-circle brand-gradient"
          style="width: 34px; height: 34px"
        >
          <i class="text-white bi bi-book"></i>
        </span>
        <strong>Festival del Libro y la cultura</strong>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="ms-auto mb-2 mb-lg-0 navbar-nav">
          <li class="nav-item">
            <a href="#programa" class="nav-link">Programa</a>
          </li>
          <li class="nav-item">
            <a href="#invitados" class="nav-link">Invitados</a>
          </li>
          <li class="nav-item">
            <a href="#escenarios" class="nav-link">Escenarios</a>
          </li>
          <li class="nav-item">
            <a href="#galeria" class="nav-link">Galería</a>
          </li>
          <li class="nav-item">
            <a href="#faq" class="nav-link">FAQ</a>
          </li>
          <li class="nav-item">
            <a href="#contacto" class="nav-link">Contacto</a>
          </li>
        </ul>
        <div class="d-flex gap-2 ms-lg-3">
          <button
            class="btn-outline-secondary btn"
            :aria-label="
              theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'
            "
          >
            <i
              class="bi"
              :class="theme === 'light' ? 'bi-moon-stars' : 'bi-sun'"
              aria-hidden="true"
            ></i>
          </button>
          <a href="#programa" class="btn btn-primary">Ver Programa</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    theme: { type: String, default: "light" },
  },
};
</script>
