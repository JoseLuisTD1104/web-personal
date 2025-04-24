document.addEventListener("DOMContentLoaded", function () {
    const inputBusqueda = document.getElementById("searchInput");
    const filtroCategoria = document.getElementById("categoryFilter");
    const filtroFecha = document.getElementById("dateFilter");
    const tarjetas = document.querySelectorAll(".tarjeta-publicacion");
    const mensajeSinResultados = document.getElementById("mensajeSinResultados");
  
    function normalizarTexto(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD") // quita tildes
        .replace(/[\u0300-\u036f]/g, "") // quita tildes
        .replace(/[^\w\s]/gi, "") // quita signos
        .trim();
    }
  
    function filtrar() {
      const textoBusqueda = normalizarTexto(inputBusqueda.value);
      const categoriaSeleccionada = filtroCategoria.value.toLowerCase();
      const fechaSeleccionada = filtroFecha.value;
  
      let resultadosVisibles = 0;
  
      tarjetas.forEach((tarjeta) => {
        const titulo = normalizarTexto(tarjeta.querySelector("h2").textContent);
        const categoria = normalizarTexto(tarjeta.querySelector(".categoria").textContent);
        const fecha = tarjeta.querySelector(".fecha").textContent.trim();
  
        const coincideTexto = textoBusqueda === "" || titulo.includes(textoBusqueda);
        const coincideCategoria = categoriaSeleccionada === "todas" || categoria === normalizarTexto(categoriaSeleccionada);
        const coincideFecha = fechaSeleccionada === "" || fecha === fechaSeleccionada;
  
        const mostrar = coincideTexto && coincideCategoria && coincideFecha;
  
        tarjeta.style.display = mostrar ? "flex" : "none";
        if (mostrar) resultadosVisibles++;
      });
  
      // Mostrar mensaje si no hay resultados
      mensajeSinResultados.style.display = resultadosVisibles === 0 ? "block" : "none";
    }
  
    // EVENTOS: escucha cambios en tiempo real
    inputBusqueda.addEventListener("input", filtrar);
    filtroCategoria.addEventListener("change", filtrar);
    filtroFecha.addEventListener("input", filtrar);
  });

  
