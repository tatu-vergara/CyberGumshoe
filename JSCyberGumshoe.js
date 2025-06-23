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