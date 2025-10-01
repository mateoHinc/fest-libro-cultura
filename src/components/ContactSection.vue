<template>
  <section id="contacto" class="py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6">
          <h2 class="section-title fw-bold">Contacto</h2>
          <p class="text-body-secondary">
            ¿Tienes preguntas, propuestas editoriales o deseas participar como
            voluntario? Escríbenos.
          </p>
          <form novalidate @submit.prevent="submit" class="needs-validation">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                type="text"
                id="nombre"
                class="form-control"
                v-model.trim="form.name"
                required
              />
              <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
            </div>
            <div class="mb-3">
              <label for="correo" class="form-label">Correo</label>
              <input
                type="email"
                id="correo"
                class="form-control"
                v-model.trim="form.email"
                required
              />
              <div class="invalid-feedback">Correo inválido.</div>
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea
                id="mensaje"
                class="form-control"
                v-model.trim="form.message"
                required
                row="4"
              ></textarea>
              <div class="invalid-feedback">
                Cuéntanos en qué podemos ayudarte.
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              <i class="me-1 bi bi-envelope-check"></i>Enviar
            </button>
          </form>
        </div>
        <div class="col-lg-6">
          <div class="p-4 border rounded-4 h-100">
            <h3 class="h5 fw-bold">Información</h3>
            <ul class="mb-3 list-unstyled">
              <li class="mb-2">
                <i class="me-2 bi bi-geo-alt"></i>Zona Norte, Medellín ·
                Antioquia
              </li>
              <li class="mb-2">
                <i class="me-2 bi bi-clock"></i>Horarios: 10:00 a.m. - 8:00 p.m.
              </li>
              <li class="mb-2">
                <i class="me-2 bi bi-instagram"></i>@fiestadelibromed
              </li>
            </ul>
            <div class="mb-0 alert alert-warning small">
              <i class="me-2 bi bi-exclamation-triangle"></i>Este es un sitio de
              muestra. Actualiza fechas, invitados y programación reales antes
              de publicar.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
const emit = defineEmits(["send"]);
const form = reactive({ name: "", email: "", message: "" });
function submit(e) {
  const formEl = e.target.closest("form");
  if (formEl && !formEl.checkValidity()) {
    formEl.classList.add("was-validated");
    return;
  }
  emit("send", { ...form });
  form.name = "";
  form.email = "";
  form.message = "";
  if (formEl) formEl.classList.remove("was-validated");
}
</script>

<style></style>
