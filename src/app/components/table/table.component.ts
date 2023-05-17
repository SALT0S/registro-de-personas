import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'fechaNacimiento'];

  nombre = '';
  apellido = '';
  fechaNacimiento = new Date();
  cedula = '';
  listPersona: Persona[] = [];


  agregarPersona() {
    const persona: Persona = {
      cedula: this.cedula,
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
    };

    // Crear una nueva copia del array con el nuevo elemento
    this.listPersona = [...this.listPersona, persona];

    // Limpiar los campos de entrada
    this.nombre = '';
    this.apellido = '';
    this.fechaNacimiento = new Date();
    this.cedula = '';
  }

  ngOnInit() {
    // you can leave this empty, or put initialization logic here
  }
}
