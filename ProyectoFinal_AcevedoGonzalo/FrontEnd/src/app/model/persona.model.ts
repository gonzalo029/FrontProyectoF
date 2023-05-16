export class persona{
  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  Descripcion: string;

  constructor(nombre: string, apellido: string, img: string, Descripcion: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.Descripcion = Descripcion;
  }

}