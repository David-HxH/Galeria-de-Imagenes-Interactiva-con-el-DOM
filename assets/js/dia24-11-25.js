document.addEventListener("DOMContentLoaded", () => {
  const animalListElement = document.querySelector("section ul");

  const notas = [8, 7, 10, 5, 9];
  let sumaTotal = 0;

  for (const nota of notas) {
    animalListElement.innerHTML += `<li>${nota}</li>`;
    animalListElement.innerHTML += "<li>-------------------</li>";
    sumaTotal = sumaTotal + nota;
  }

  // Calcular el promedio
  const promedio = sumaTotal / notas.length;

  // Mostrar resultados
  animalListElement.innerHTML += `<li><strong>Suma total: ${sumaTotal}</strong></li>`;
  animalListElement.innerHTML += `<li><strong>Promedio: ${promedio}</strong></li>`;
});
