import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service'; // Importando a service

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService] // Saindo do singleton e fazendo várias instancias. Quando se declara uma service dentro do componente, se faz uma instancia independente
})
export class CriarCursoComponent implements OnInit {

cursos: string[] = [];

  constructor(private cursosService: CursosService) { } // Passando a service quando se constroi essa classe/componente

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
  onAddCurso(curso: string){
    this.cursosService.addCursos(curso);
  }
}
