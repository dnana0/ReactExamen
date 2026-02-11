const form = document.getElementById("formularioRegistro");

// Resetear formulario (valores por defecto)
document.getElementById("btnReset").addEventListener("click", () => {
  form.reset();
});

// Limpiar formulario completamente
document.getElementById("btnClear").addEventListener("click", () => {
  form.querySelectorAll("input, select, textarea").forEach((campo) => {
    if (campo.type === "checkbox" || campo.type === "radio") {
      campo.checked = false;
    } else {
      campo.value = "";
    }
  });
});
