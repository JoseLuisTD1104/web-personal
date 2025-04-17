function toggle(el) {
    el.classList.toggle('open');
    event.stopPropagation();
  }

  function mostrarContenido(id) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  function toggle(el) {
    el.classList.toggle('open');
    event.stopPropagation();
  }
  
  function mostrarContenido(id) {
    const tabs = document.querySelectorAll(".tab");
    const contenidos = document.querySelectorAll(".tab-content");
    tabs.forEach(t => t.classList.remove("active"));
    contenidos.forEach(c => c.style.display = "none");
    document.querySelector(`.tab-content#${id}`).style.display = "block";
    document.querySelector(`.tab[onclick*="${id}"]`).classList.add("active");
  }
  
  // Ver archivo externo (modal)
  function verArchivo(elemento) {
    const ruta = elemento.getAttribute("data-path");
  
    // Si ya existe un visor, elimínalo
    const visorExistente = document.querySelector(".visor-emergente");
    if (visorExistente) visorExistente.remove();
  
    // Crear visor
    const visor = document.createElement("div");
    visor.className = "visor-emergente";
    visor.innerHTML = `
      <div class="visor-contenido">
        <button class="visor-cerrar" onclick="this.closest('.visor-emergente').remove()">✖</button>
        <pre>Cargando archivo...</pre>
      </div>
    `;
    document.body.appendChild(visor);
  
    // Cargar archivo
    fetch(ruta)
      .then(res => {
        if (!res.ok) throw new Error("Archivo no encontrado.");
        return res.text();
      })
      .then(text => {
        visor.querySelector("pre").textContent = text;
      })
      .catch(err => {
        visor.querySelector("pre").textContent = "❌ Error: " + err.message;
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const navCenter = document.querySelector(".nav-center");
  
    console.log("📦 toggle:", toggle);
    console.log("📦 navCenter:", navCenter);
  
    if (toggle && navCenter) {
      toggle.addEventListener("click", () => {
        navCenter.classList.toggle("open");
        console.log("🍔 Menú hamburguesa activado");
      });
    } else {
      console.warn("⚠️ No se encontró .nav-toggle o .nav-center");
    }
  });
  