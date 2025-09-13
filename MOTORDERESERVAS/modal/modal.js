document.getElementById("btn-no").addEventListener("click", () => {
  alert("No aceptaste los términos. No puedes continuar.");
});

document.getElementById("btn-yes").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

document.querySelector('.btn-siguiente').addEventListener('click', () => {
  window.location.href = '../verificacion-de-reserva/index-verificacion.html';
});

