import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component'; // Componentes

import { CursosService } from './cursos.service'; // Serviço

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent,//Exportação de um componente para o modulo que importar este modulo
    CursoDetalheComponent//Exportação de um componente para o modulo que importar este modulo
  ],
  providers: [
    CursosService //Identifica a classe CursosService como um provedor(serviço) para injetar dependências
  ] 
})
export class CursosModule { }
