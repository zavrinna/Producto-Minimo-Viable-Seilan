const modal = document.getElementById("terms-modal");
const abrirModal = document.getElementById("abrirModal");
const closeModal = document.querySelector(".close-modal");
const cancelTerms = document.getElementById("cancelTerms");
const acceptTerms = document.getElementById("acceptTerms");
const btnPagar = document.getElementById("btnPagar");

// Abrir modal
abrirModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

// Cerrar modal con la X o Cancelar
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
cancelTerms.addEventListener("click", () => {
  modal.style.display = "none";
});

// Aceptar términos
acceptTerms.addEventListener("click", () => {
  modal.style.display = "none";
  btnPagar.disabled = false; // activar botón pagar
});

// Cerrar modal si clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

