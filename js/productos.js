
class Producto {
  #nombre;
  #color;
  #img;
  #precio;
  constructor(nombre, color, img, precio) {
    this.#nombre = nombre;
    this.#color = color;
    this.#img = img;
    this.#precio = precio;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get img() {
    return this.#img;
  }
  set img(nuevaImg) {
    this.#img = nuevaImg;
  }
  get color() {
    return this.#color;
  }
  set color(nuevoColor) {
    this.#color = nuevoColor;
  }
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
}

let cajaDePizza = new Producto("Caja de piza", "Marrón", '../assets/productos/caja-pizza.jpg', 350);
let cajaLomo = new Producto("Caja de lomo", "Blanco", '../assets/productos/cajaLomo.jpg', 250);
let blonda = new Producto("Blonda", "Blanco", '../assets/productos/blonda.jpg', 600)
let bolsaRinion = new Producto("Bolsa Riñonera", "Consultar", '../assets/productos/bolsa-riñon.jpg', 800)
let papelDobleQ = new Producto("Papel doble químico", "Blanco", '../assets/productos/papel-quimico.jpg', 800)

let productos = [cajaDePizza, cajaLomo, blonda, bolsaRinion, papelDobleQ];

const container = document.querySelector('#cardProductos')

productos.forEach((item)=>{
  // Construir contenido de la card
  const content = `
            <aside class="card position-relative border rounded-3 shadow imgZoom h-100 m-2">
                <img src="${item.img}" alt="caja-pizza" class="w-100  rounded-2 altoAncho">
                <article class="position-absolute top-50 start-50 translate-middle">
                  <div class="mb-5 text-center">
                    <h4 class="fw-bold cursor-default">${item.nombre}</h4>
                    <button type="button" class="btn btn-success mb-4" 
                    data-bs-toggle="modal"
                    data-bs-target="#whatsapp">Consultar</button>
                  </div>
                </article>
                <ul class="list-unstyled text-start bg-black text-white bg-opacity-50 borde-inf-ul position-absolute bottom-0 start-0 m-0 p-1 cursor-default">
                  <li class="letrasUl">Marcas: Todas</li>
                  <li class="letrasUl">Medidas: Todas</li>
                  <li class="letrasUl">Color: ${item.color}</li>
                  <li class="letrasUl">Precio: $${item.precio}</li>
                </ul>
              </aside>
  `;
  // Agregar elemento de tarjeta recién creado al contenedor
  container.innerHTML+=content;
})