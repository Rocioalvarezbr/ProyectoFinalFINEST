// VENTAS - AÑO //

const años = document.querySelector("#años");

let añoInicio = 1900;
let añoFinal = 2023;
let opcionesHTML = "";

for (let año = añoInicio; año <= añoFinal; año++) {
  opcionesHTML += `<option value="${año}">${año}</option>`;
}

años.insertAdjacentHTML("beforeend", opcionesHTML);

fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
  .then(function (response) {
    return response.json();
  })
  .then(function (marcas) {
    for (const marca of marcas) {
      marcasContainer.insertAdjacentHTML("beforeend");
    }
  });


  // fetch suelto, uno es el que tienen los autos y otro que trae unos array con strings que  cada string son las diferentes marcas,hecho ese fetch hacemos un .then incertadjacenthtml) //
