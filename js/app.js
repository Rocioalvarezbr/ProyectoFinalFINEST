// VARIABLES //

const años = document.querySelector("#años");
const marcas = document.querySelector("#marcas");
const modelos = document.querySelector("#modelos");
const dataAutos = document.querySelector("#dataAutos");

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

function estrellas(rating) {
  let estrella = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      estrella += '<i class="bi bi-star-fill text-warning"></i>';
    } else {
      estrella += '<i class="bi bi-star text-warning"></i>';
    }
  }
  return estrella;
}

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (res) {
    return res.json();
  })
  .then(function (autos) {
    for (const auto of autos) {
      dataAutos.insertAdjacentHTML(
        "beforeend",
        `<div class="row">
          <div class="col-12 col-lg-4">
            <div>
              <img
                class="img-fluid"
                src="${auto.image}"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <div class="d-flex justify-content-between">
              <h2 id="marca1" class="fs-3">
              ${auto.brand} ${auto.model}
              </h2>
              <h3 class="fs-6">
              ${
                auto.year
              } | USD ${auto.price_usd.toLocaleString()} | ${estrellas(
          auto.rating
        )}
              </h3>
            </div>
            <p class="textVentas">
            ${auto.description}
            </p>
            <button type="button" class="btn buttonComprarVentas textVentas">
              <i class="bi bi-cart-fill"></i>
              Comprar
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary text-black textVentas"
            >
              <i class="bi bi-plus-square"></i>
              Mas información
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary text-black textVentas"
            >
              <i class="bi bi-box-arrow-right"></i>
              Compartir
            </button>
          </div>
        </div>
        <hr>`
      );
    }
  })
  .catch(function (err) {
    console.log(err);
  });
