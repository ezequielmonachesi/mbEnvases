
export default class Producto {
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

  toJSOSN(){
    return{
      nombre: this.#nombre,
      color: this.#color,
      precio: this.#precio,
      img: this.#img
    }
  }
}

