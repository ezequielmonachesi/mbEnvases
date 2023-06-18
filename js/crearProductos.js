import Producto from "./productos.js";

let formularioBuscador = document.querySelector("form");
let buscar = document.getElementById("buscadorProductos");

let cajaDePizza = new Producto(
  "Caja de pizza",
  ["x25 x50"],
  ["marron"],
  "../assets/productos/caja-pizza.jpg",
  "delivery"
);
let cajaLomo = new Producto(
  "Caja de lomo",
  ["x25 x50"],
  ["blanco"],
  "../assets/productos/cajaLomo.jpg",
  "delivery"
);
let blonda = new Producto(
  "Blonda",
  "N°9 N°10",
  ["blanco"],
  "../assets/productos/blonda.jpg",
  "descartable"
);
let bolsaRinion = new Producto(
  "Bolsa Riñonera",
  "15x20",
  ["rojo", "blanco"],
  "../assets/productos/bolsa-riñon.jpg",
  "regaleria"
);
let papelDobleQ = new Producto(
  "Papel doble químico",
  "76x20x10u",
  ["blanco", "rojo", "azul"],
  "../assets/productos/papel-quimico.jpg",
  "papel"
);
let bolsaPolipropileno = new Producto(
  "Bolsa Polipropileno",
  "4x25, 10x10",
  ["transparente"],
  "../assets/productos/bolsapp.jpg",
  "bolsa"
);
let bolsaRomi = new Producto(
  "Bolsas Romi",
  "20x08x24",
  ["amarillo", "azul"],
  "../assets/productos/bolsas-romy-color.jpg",
  "bolsa"
);
let cubiertos = new Producto(
  "Cubiertos Descartables",
  "de a 4 unidades",
  ["blanco"],
  "../assets/productos/Cubiertos.png",
  "descartable"
);
let bolsaKraff = new Producto(
  "Bolsa Kraff",
  "N° 1, 2",
  ["marron"],
  "../assets/productos/bolsas-kraft.jpg",
  "bolsa"
);
let espuminaLaminada = new Producto(
  "Espumina Laminada",
  "1 metro",
  ["Varios"],
  "../assets/productos/espumina-laminada.jpg",
  "espumina"
);
let servilletaBar = new Producto(
  "Servilletas para bares",
  "x1000, x2000",
  ["blanco"],
  "../assets/productos/servilletaBar.png",
  "servilleta"
);
let toallasPlegables = new Producto(
  "Toallas plegables",
  "x250",
  ["blanco"],
  "../assets/productos/toallas-plegables.jpg",
  "toalla"
);
let papelObra = new Producto(
  "Papel Obra",
  "57x30x10u",
  ["blanco"],
  "../assets/productos/papel-obra.jpg",
  "papel"
);
let papelFilm = new Producto(
  "Papel Film",
  "38x500",
  ["transparente"],
  "../assets/productos/papel-film.jpg",
  "papel"
);
let cajaEmpanada = new Producto(
  "Caja de Empanadas",
  "x 1u, x 50u",
  ["marrón", "gris"],
  "../assets/productos/cajaEmpanada.png",
  "caja"
);
let papelManteca = new Producto(
  "Papel Manteca",
  "30cmx5m",
  ["blanco"],
  "../assets/productos/papelManteca.png",
  "papel"
);
let vasosPlasticos = new Producto(
  "Vasos Plásticos",
  "120cc 180cc 220cc",
  ["varios"],
  "../assets/productos/vasosPlasticos.png",
  "vaso"
);
let vasosPolipapel = new Producto(
  "Vasos Polipapel",
  "8oz 12oz",
  ["varios"],
  "../assets/productos/vasosPolipapel.png",
  "vaso"
);
let copasDanubio = new Producto(
  "Copa Danubio",
  "x1u x10u",
  ["varios"],
  "../assets/productos/copasDanubio.png",
  "vaso"
);
let vasosTermicos = new Producto(
  "Vaso Térmico",
  "x1u x10u",
  ["varios"],
  "../assets/productos/vasosTermicos.png",
  "vaso"
);
let papelAluminio = new Producto(
  "Papel Aluminio",
  "x5m x1Kg",
  ["plata"],
  "../assets/productos/papelAluminio.png",
  "papel"
);

let productos = [
  papelDobleQ,
  blonda,
  bolsaRinion,
  cajaDePizza,
  cajaEmpanada,
  cajaLomo,
  bolsaPolipropileno,
  bolsaRomi,
  cubiertos,
  bolsaKraff,
  espuminaLaminada,
  servilletaBar,
  toallasPlegables,
  papelObra,
  papelFilm,
  papelManteca,
  vasosPlasticos,
  vasosPolipapel,
  copasDanubio,
  vasosTermicos,
  papelAluminio
];

formularioBuscador.addEventListener("submit", buscarProducto);
formularioBuscador.addEventListener("keyup", buscarProducto);
// buscador
function buscarProducto(e) {
  e.preventDefault();
  let aside = document.querySelectorAll("aside");
  let parrafoNoEncontrado = document.createElement("p");
  parrafoNoEncontrado.innerHTML = `No encontrado`;
  aside.forEach((aside) => {
    aside.classList.add("d-none");
  });
  let contador = 0;
  aside.forEach((aside) => {
    if (aside.textContent.toLowerCase().includes(buscar.value.toLowerCase())) {
      aside.classList.remove("d-none");
      aside.classList.add("d-block");
    } else {
      contador += 1;
      console.log(contador)
    }
  });

  if (contador === 23) {
    document.getElementById(
      "textoNoEncontrado"
    ).innerHTML = `<div class="my-5 py-5"><p class="shadow px-3 py-3 m-0 border-2">No encontramos resultados para <span class="fw-bold text-success">"${buscar.value}"</span> <br><i class="bi bi-cart-x-fill fs-1 text-success"></i></p></div>`;
  } else {
    document.getElementById("textoNoEncontrado").innerHTML = "";
  }
}

const container = document.querySelector("#cardProductos");
function mostrarProductos(array) {
  array.forEach((item) => {
    // Construir contenido de la card
    const content = `
              <aside class="card position-relative border rounded-3 shadow imgZoom h-100 m-2">
                  <img src="${item.img}" alt="caja-pizza" class="w-100  rounded-2 altoAncho">
                  <article class="position-absolute top-50 start-50 translate-middle">
                    <div class="mb-5 text-center">
                      <h4 class="fw-bold cursor-default nombre">${item.nombre}</h4>
                      <button type="button" class="btn btn-success mb-4" 
                      data-bs-toggle="modal"
                      data-bs-target="#whatsapp">Consultar</button>
                    </div>
                  </article>
                  <ul class="list-unstyled text-start bg-black text-white bg-opacity-50 borde-inf-ul position-absolute bottom-0 start-0 m-0 p-1 cursor-default">
                    <li class="letrasUl">Marcas: Todas</li>
                    <li class="letrasUl">Medidas: ${item.medidas} y más</li>
                    <li class="letrasUl">Color: ${item.color}</li>
                    <li class="letrasUl">Precio: Consultar</li>
                  </ul>
                </aside>
    `;
    // Agregar elemento de tarjeta recién creado al contenedor
    container.innerHTML += content;
  });
}
mostrarProductos(productos);
