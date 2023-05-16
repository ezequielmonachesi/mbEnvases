import Producto from "./productos.js";

let cajaDePizza = new Producto("Caja de piza", "Marrón", '../assets/productos/caja-pizza.jpg', 350);
let cajaLomo = new Producto("Caja de lomo", "Blanco", '../assets/productos/cajaLomo.jpg', 250);
let blonda = new Producto("Blonda", "Blanco", '../assets/productos/blonda.jpg', 600);
let bolsaRinion = new Producto("Bolsa Riñonera", "Consultar", '../assets/productos/bolsa-riñon.jpg', 800);
let papelDobleQ = new Producto("Papel doble químico", "Blanco", '../assets/productos/papel-quimico.jpg', 800);

let productos = [cajaDePizza, cajaLomo, blonda, bolsaRinion, papelDobleQ];

const container = document.querySelector('#cardProductos')

function mostrarProductos(){
  productos.forEach((item)=>{
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
                    <li class="letrasUl">Medidas: Todas</li>
                    <li class="letrasUl">Color: ${item.color}</li>
                    <li class="letrasUl">Precio: Consultar</li>
                  </ul>
                </aside>
    `;
    // Agregar elemento de tarjeta recién creado al contenedor
    container.innerHTML+=content;
  })
}
mostrarProductos()

let inputBuscar = document.getElementById('btnBuscar');
let formBtnBuscar = document.querySelector('form');

formBtnBuscar.addEventListener('submit', buscarProducto)

function buscarProducto(e){
    e.preventDefault();
    let textoIngresado = inputBuscar.value;
    let buscarTexto = productos.includes((i)=>i.nombre == textoIngresado)
    console.log(buscarTexto)
    let h1 = document.getElementsByClassName('nombre');
    for (let i = 0; i < h1.length; i++) {
        let array = h1[i].innerHTML.includes(textoIngresado);
    }
}