import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService!: CursosService;

  constructor(private _cursosService: CursosService) {
    //this.cursosService = new CursosService();
    //this.cursosService = this._cursosService;
  }

  ngOnInit(): void {// Quando se obtem dados, é boa prática o uso do ngOnInit
    //this.cursos = this.cursosService.getCursos();
    this.cursos = this._cursosService.getCursos();
    //this._cursosService.emitirCursoCriado.subscribe(
    //  curso => console.log(curso)
    //  function(curso){
    //    console.log(curso);
    // }
    //);
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso) // Adicionando esse curso que foi enviado via emitter(Service) aqui na nossa variável curso (Componente  )
    );
  }

}
