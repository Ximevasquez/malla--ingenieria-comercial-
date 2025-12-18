function aprobar(ramo) {
  if (ramo.classList.contains("bloqueado")) {
    alert("Debes aprobar los prerrequisitos 📚");
    return;
  }

  ramo.classList.toggle("aprobado");
  desbloquear();
}

function desbloquear() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const reqs = ramo.dataset.req;
    if (!reqs) return;

    const requisitos = reqs.split(",");
    const ok = requisitos.every(id => {
      const r = document.querySelector(`[data-id="${id.trim()}"]`);
      return r && r.classList.contains("aprobado");
    });

    if (ok) ramo.classList.remove("bloqueado");
  });
}
