
class Producto {
  #nombre;
  #precio;
  #img;
  constructor(nombre, precio, img) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#img = img;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
  get img() {
    return this.#img;
  }
  set img(nuevaImg) {
    this.#img = nuevaImg;
  }
}

let cajaDePizza = new Producto("Caja de piza", 350, '../assets/productos/caja-pizza.jpg');
let cajaLomo = new Producto("Caja de lomo", 250, '../assets/productos/cajaLomo.jpg');
let blonda = new Producto("Blonda", 600, '../assets/productos/blonda.jpg')
let bolsaRinion = new Producto("Bolsa Riñonera", 800, '../assets/productos/bolsa-riñon.jpg')

let productos = [cajaDePizza, cajaLomo, blonda, bolsaRinion];

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
                  <li class="letrasUl">Marcas: todas</li>
                  <li class="letrasUl">Medidas: Todas</li>
                  <li class="letrasUl">Color: marrón</li>
                  <li class="letrasUl">Precio: $${item.precio}</li>
                </ul>
              </aside>
  `;
  // Agregar elemento de tarjeta recién creado al contenedor
  container.innerHTML+=content;
})