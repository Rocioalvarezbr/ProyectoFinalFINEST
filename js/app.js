// VENTAS - AÑO //

const años = document.querySelector("#años");

let añoInicio = 1900;
let añoFinal = 2023;
let opcionesHTML = "";

for (let año = añoInicio; año <= añoFinal; año++) {
  opcionesHTML += `<option value="${año}">${año}</option>`;
}

años.insertAdjacentHTML("beforeend", opcionesHTML);



document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("marcas");

  fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
    .then((response) => response.json())
    .then((data) => {
      let optionsHTML = "";

      for (let i = 0; i < data.length; i++) {
        optionsHTML += `<option value="${data[i]}">${data[i]}</option>`;
      }

      selectElement.insertAdjacentHTML("beforeend", optionsHTML);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("modelos");

  fetch("https://ha-front-api-proyecto-final.vercel.app/models?brand=Audi")
    .then((response) => response.json())
    .then((data) => {
      let optionsHTML = "";

      for (let i = 0; i < data.length; i++) {
        optionsHTML += `<option value="${data[i]}">${data[i]}</option>`;
      }

      selectElement.insertAdjacentHTML("beforeend", optionsHTML);
    });
});

// Agarrar de las options el valor de año, marca (brand), y el modelo. y guardarlo en constantes

const year = ;
const brand = ;
const model = ;

fetch(`https://ha-front-api-proyecto-final.vercel.app/cars?year=${year}&brand=${brand}&m
odel=${model}
`)

