import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service'; // Quando se põe a classe Cursos Service somente no providers do modulo raiz, ela só é instanciada uma vez
import { CriarCursoModule } from './criar-curso/criar-curso.module';// "Agora, nós estamos utilizando o criar-cursos.module,
// eu vou vir aqui no app.module e posso tirar esse criar-cursos.component e colocar o criar-cursos.module no lugar"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  //providers: [CursosService], // Padrão Singleton
  bootstrap: [AppComponent]
})
export class AppModule { }
