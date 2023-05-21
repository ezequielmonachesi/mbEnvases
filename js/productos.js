export default class Producto {
  #nombre;
  #medidas;
  #color;
  #img;
  #tipo;
  constructor(nombre, medidas, color = [], img, tipo) {
    this.#nombre = nombre;
    this.#medidas = medidas;
    this.#color = color;
    this.#img = img;
    this.#tipo = tipo;
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
  get tipo() {
    return this.#tipo;
  }
  set tipo(nuevoTipo) {
    this.#tipo = nuevoTipo;
  }

  toJSOSN(){
    return{
      nombre: this.#nombre,
      medidas: this.#medidas,
      color: this.#color,
      img: this.#img,
      tipo: this.#tipo
    }
  }
}

