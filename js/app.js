// VARIABLES //

const años = document.querySelector("#años");
const marcas = document.querySelector("#marcas");
const modelos = document.querySelector("#modelos");
const marca1 = document.querySelector("#marca1")

// VENTAS - AÑO //

let añoInicio = 1900;
let añoFinal = 2023;
let opcionesHTML = "";

for (let año = añoInicio; año <= añoFinal; año++) {
  opcionesHTML += `<option value="${año}">${año}</option>`;
}

años.insertAdjacentHTML("beforeend", opcionesHTML);

// VENTAS - MARCAS //

fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let opcionesHTML = "";

    for (let i = 0; i < data.length; i++) {
      opcionesHTML += `<option value="${data[i]}">${data[i]}</option>`;
    }

    marcas.insertAdjacentHTML("beforeend", opcionesHTML);
  })
  .catch(function (err) {
    console.log(err);
  });

// VENTAS - MODELOS //

fetch("https://ha-front-api-proyecto-final.vercel.app/models?brand=Audi")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let opcionesHTML = "";

    for (let i = 0; i < data.length; i++) {
      opcionesHTML += `<option value="${data[i]}">${data[i]}</option>`;
    }

    modelos.insertAdjacentHTML("beforeend", opcionesHTML);
  })
  .catch(function (err) {
    console.log(err);
  });

// VENTAS - AUTOS //

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    marca1.insertAdjacentHTML = cars[0].brand
  })
  .catch(function (err) {
    console.log(err);
  });

// Agarrar de las options el valor de año, marca (brand), y el modelo. y guardarlo en constantes

//const year = ;//
//const brand = ;//
//const model = ;//

//fetch(`https://ha-front-api-proyecto-final.vercel.app/cars?year=${year}&brand=${brand}&m
//odel=${model}//
//`)//
