import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno.model';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  listado: Alumno[] = [
    {
      nombre: 'Jose Obtuso',
      curso: 'Angular',
      modalidad: 'Online',
      edad: 24,
      fechaInscripcion: '2022-01-17',
      matricula: 21000,
    },
    {
      nombre: 'Pedro Agudo',
      curso: 'Angular',
      modalidad: 'Presencial',
      edad: 21,
      fechaInscripcion: '2022-02-25',
      matricula: 8500,
    },
    {
      nombre: 'Camilo Reacio',
      curso: 'React',
      modalidad: 'Online',
      edad: 35,
      fechaInscripcion: '2022-03-05',
      matricula: 17000,
    },
  ];
  constructor() {}
}
