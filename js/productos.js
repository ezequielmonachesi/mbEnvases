export default class Producto {
  #codigo;
  #nombre;
  #medidas;
  #color;
  #img;
  #precio;
  #tipo;
  constructor(codigo = uuidv4(), nombre, medidas, color, img, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#medidas = medidas;
    this.#color = color;
    this.#img = img;
    this.#precio = precio;
    this.#tipo = tipo;
  }
  get codigo(){
    return this.#codigo;
  }
  set codigo (nuevoCodigo){
    this.codigo = nuevoCodigo;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get medidas(){
    return this.medidas;
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
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
  get tipo(){
    return this.#tipo;
  }
  set tipo(nuevoTipo){
    this.#tipo = nuevoTipo;
  }

  toJSOSN(){
    return{
      codigo: this.#codigo,
      nombre: this.#nombre,
      medidas: this.#medidas,
      color: this.#color,
      img: this.#img,
      precio: this.#precio,
      tipo: this.#tipo
    }
  }
}

