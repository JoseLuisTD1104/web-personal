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
