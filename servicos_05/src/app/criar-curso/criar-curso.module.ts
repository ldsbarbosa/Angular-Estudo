import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Há diferença de modulo root e modulo de funcionalidade

import { CursosService } from '../cursos/cursos.service'; // Quando se põe a classe Cursos Service somente no providers do modulo raiz, ela só é instanciada uma vez
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CriarCursoComponent
  ],
  //providers: [CursosService]
})
export class CriarCursoModule { }
