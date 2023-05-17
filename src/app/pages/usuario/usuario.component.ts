import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  form!: FormGroup;
  listPersona: Persona[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  agregarPersona() {
    if (this.form.valid) {
      const persona: Persona = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        cedula: this.form.value.cedula,
        fechaNacimiento: this.form.value.fechaNacimiento,
        estado: true
      };
      this.listPersona.push(persona);
      this.form.reset();
    }else{
      alert("Datos invalidos");
    }
  }
  eliminarEstudiante(indice:number):void{
    this.listPersona.splice(indice,1);
  }
}
