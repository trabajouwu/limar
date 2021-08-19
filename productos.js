const d = document;

export default class Producto{
  constructor(nombre, contenido, precio, imagen, etiquetas, tipo){
    this.nombre = nombre
    this.contenido = contenido
    this.precio = precio
    this.imagen = imagen
    this.etiquetas = etiquetas
    this.tipo = tipo
  }
}