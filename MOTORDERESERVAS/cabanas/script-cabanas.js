// Seleccionamos todos los botones de reserva
document.querySelectorAll(".reserve-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Aquí decides a qué archivo HTML debe ir cada cabaña
    if (index === 0) {
      // Primera cabaña (Malaquita Suite)
      window.location.href = "../modal/index-modal.html";
    } else if (index === 1) {
      // Segunda cabaña (Aguamarina)
      window.location.href = "../modal/index-modal.html";
    }
  });
});

  document.querySelector('.back-arrow').addEventListener('click', () => {
    window.history.back(); // retrocede una página en el historial
  });
