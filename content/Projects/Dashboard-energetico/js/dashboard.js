document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/energia.json")
      .then(response => response.json())
      .then(data => {
        const fechas = data.map(item => item.fecha);
        const iluminacion = data.map(item => item.iluminacion);
        const aire = data.map(item => item.aire_acondicionado);
        const maquinaria = data.map(item => item.maquinaria);
        const oficinas = data.map(item => item.oficinas);
  
        const ctx = document.getElementById("graficaEnergia").getContext("2d");
  
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: fechas,
            datasets: [
              {
                label: "Iluminación (kWh)",
                data: iluminacion,
                backgroundColor: "rgba(255, 206, 86, 0.7)"
              },
              {
                label: "Aire Acondicionado (kWh)",
                data: aire,
                backgroundColor: "rgba(54, 162, 235, 0.7)"
              },
              {
                label: "Maquinaria (kWh)",
                data: maquinaria,
                backgroundColor: "rgba(255, 99, 132, 0.7)"
              },
              {
                label: "Oficinas (kWh)",
                data: oficinas,
                backgroundColor: "rgba(75, 192, 192, 0.7)"
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Consumo Energético Diario por Categoría"
              },
              legend: {
                position: "bottom"
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Consumo (kWh)"
                }
              }
            }
          }
        });
      })
      .catch(error => {
        console.error("Error al cargar los datos:", error);
      });
  });
  