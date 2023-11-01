// VENTAS - AÑO //

const años = document.querySelector("#años");

let añoInicio = 1900;
let añoFinal = 2023;
let opcionesHTML = "";

for (let año = añoInicio; año <= añoFinal; año++) {
  opcionesHTML += `<option value="${año}">${año}</option>`;
}

años.insertAdjacentHTML("beforeend", opcionesHTML);
