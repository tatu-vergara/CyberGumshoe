document.addEventListener("DOMContentLoaded", () => {
  function hacerVibrar(id) {
    const elem = document.getElementById(id);
    if (!elem) return;
    elem.addEventListener("click", () => {
      elem.classList.add("vibrando");
      setTimeout(() => {
        elem.classList.remove("vibrando");
      }, 600);
    });
  }

  hacerVibrar("gumshoeImg");
  hacerVibrar("genoImg");
  hacerVibrar("boshiImg");
});

const testForm = document.getElementById("testForm");
const resultado = document.getElementById("resultado");

if (testForm) {
  testForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const r1 = testForm.q1.value;
    const r2 = testForm.q2.value;
    const r3 = testForm.q3.value;

    let puntaje = 0;
    if (r1 === "c") puntaje++;
    if (r2 === "c") puntaje++;
    if (r3 === "b") puntaje++;

    if (puntaje === 3) {
      resultado.innerText = "🎉 ¡Perfecto!";
    } else if (puntaje === 2) {
      resultado.innerText = "✅ tienes un error, ¡sigue practicando!";
    } else {
      resultado.innerText = "⚠️ Hay más de un error, revisa los consejos de seguridad y vuelve a intentarlo.";
    }
  });
}

$(document).ready(function () {
  $('#formContacto').on('submit', function (e) {
    e.preventDefault();

    // Simula envío
    $('#mensajeEnviado').show();

    // Muestra el modal
    $('#modalGracias').fadeIn();

    // Resetea el formulario
    $(this).trigger('reset');
  });

  $('#cerrarModal').on('click', function () {
    $('#modalGracias').fadeOut();
  });
});