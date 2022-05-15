import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent,//Exportação de um componente para o modulo principal
    CursoDetalheComponent//Exportação de um componente para o modulo principal
  ]
})
export class CursosModule { }
