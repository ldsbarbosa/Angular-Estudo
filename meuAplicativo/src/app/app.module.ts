import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';// O próprio "AppComponent", que está na mesma pasta, também precisa ser importado.
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';// Além da classe exportada no arquivo TypeScript dentro do próprio componente, ele precisa ser importado no "app.module" para que o Angular possa utilizar o componente.
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [
    AppComponent,// Além de importado, declarado. Caso não, fica inutilizável.
    MeuPrimeiroComponent,// Uma vez importada, deve ser declarada nas "declarations".
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule// Importando um modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
