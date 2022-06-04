import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent{

  cursos: string[] = ['Angular 13'];
  mostrarCursos: boolean = true;

  constructor() { }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
