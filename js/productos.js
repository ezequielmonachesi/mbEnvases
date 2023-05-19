export default class Producto {
  #nombre;
  #medidas;
  #color;
  #img;
  constructor(nombre, medidas, color = [], img) {
    this.#nombre = nombre;
    this.#medidas = medidas;
    this.#color = color;
    this.#img = img;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get medidas(){
    return this.#medidas;
  }
  set medidas (nuevaMedidas){
    this.#medidas = nuevaMedidas;
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

  toJSOSN(){
    return{
      nombre: this.#nombre,
      medidas: this.#medidas,
      color: this.#color,
      img: this.#img,
    }
  }
}

