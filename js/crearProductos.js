import Producto from "./productos.js";

let formularioBuscador = document.querySelector("form");
let buscar = document.getElementById("buscar");

let cajaDePizza = new Producto(
  "Caja de pizza",
  ["x25 x50 y más"],
  ["Marrón"],
  "../assets/productos/caja-pizza.jpg",
  "delivery"
);
let cajaLomo = new Producto(
  "Caja de lomo",
  ["x25 x50 y más"],
  ["Blanco"],
  "../assets/productos/cajaLomo.jpg",
  "delivery"
);
let blonda = new Producto(
  "Blonda",
  "N°9 N°10 y más",
  ["Blanco"],
  "../assets/productos/blonda.jpg",
  "descartable"
);
let bolsaRinion = new Producto(
  "Bolsa Riñonera",
  "15x20 y más",
  ["Rojo", "Blanco"],
  "../assets/productos/bolsa-riñon.jpg",
  "regaleria"
);
let papelDobleQ = new Producto(
  "Papel doble químico",
  "76x20x10u y más",
  ["Blanco", "Rojo", "Azul"],
  "../assets/productos/papel-quimico.jpg",
  "papel"
);

let productos = [papelDobleQ, blonda, bolsaRinion, cajaDePizza, cajaLomo];

console.log(productos);

formularioBuscador.addEventListener("submit", buscarProducto);
// buscador
function buscarProducto(e) {
  e.preventDefault();
  productos.forEach((producto) => {
    if (producto.nombre.toLowerCase().includes(buscar.value.toLowerCase())) {
      mostrarProductos(productos);
    }
  });
}

const container = document.querySelector("#cardProductos");
function mostrarProductos(item) {
  productos.forEach((item) => {
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
                    <li class="letrasUl">Medidas: ${item.medidas}</li>
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
