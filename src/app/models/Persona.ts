export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;

    constructor(cedula: string, nombre: string, apellido: string, fechaNacimiento: Date) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}