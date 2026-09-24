function mostrarInfo(nombre, descripcion) {
  const panel = document.getElementById('detalle');
  const titulo = document.getElementById('titulo-fruta');
  const desc = document.getElementById('desc-fruta');

  titulo.textContent = nombre;
  desc.textContent = descripcion;

  // Muestra el panel removiendo la clase 'oculto'
  panel.classList.remove('oculto');
}