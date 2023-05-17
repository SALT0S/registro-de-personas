import { Component } from '@angular/core';

export interface Persona {
  cedula: string,
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
}

const ELEMENT_DATA: Persona[] = [
  {cedula: '123456789', nombre: 'Hydrogen', apellido: 'H', fechaNacimiento: new Date()},
  {cedula: '123456789', nombre: 'Helium', apellido: 'He', fechaNacimiento: new Date()},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'fechaNacimiento'];
  dataSource = ELEMENT_DATA;
}
