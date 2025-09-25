<template>
  <section id="faq" class="bg-body-tertiary py-5">
    <div class="container">
      <h2 class="mb-4 section-title fw-bold">Preguntas Frecuentes</h2>
      <div class="accordion" id="faqAcc">
        <div class="accordion-item">
          <h2 class="accordion-header" id="q1">
            <button
              type="button"
              class="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#a1"
              aria-expanded="true"
              aria-controls="a1"
            >
              ¿La entrada tiene costo?
            </button>
          </h2>
          <div
            id="a1"
            class="accordion-collapse collapse show"
            aria-labelledby="q1"
            data-bs-parent="#faqAcc"
          >
            <div class="accordion-body">
              No, la entrada es libre hasta completar aforo en todos los
              escenarios.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="q2">
            <button
              class="collapsed accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#a2"
              aria-expanded="false"
              aria-controls="a2"
            >
              ¿Hay actividades para niños y jóvenes?
            </button>
          </h2>
          <div
            id="a2"
            class="accordion-collapse collapse"
            aria-labelledby="q2"
            data-bs-parent="#faqAcc"
          >
            <div class="accordion-body">
              Sí. Hay talleres, cuentacuentos y espacios de lectura para todas
              las edades.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="q3">
            <button
              class="collapsed accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#a3"
              aria-expanded="false"
              aria-controls="a3"
            >
              ¿Cómo llegar en transporte público?
            </button>
          </h2>
          <div
            id="a3"
            class="accordion-collapse collapse"
            aria-labelledby="q3"
            data-bs-parent="#faqAcc"
          >
            <div class="accordion-body">
              Puedes llegar en Metro hasta la estación Universidad (Línea A) y
              caminar pocos minutos hacia el Jardín Botánico.
            </div>
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
