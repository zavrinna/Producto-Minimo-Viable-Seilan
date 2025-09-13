document.getElementById("btn-no").addEventListener("click", () => {
  alert("No aceptaste los términos. No puedes continuar.");
});

document.getElementById("btn-yes").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
