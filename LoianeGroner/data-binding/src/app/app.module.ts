import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Para o uso do ngModel, deve-se fazer esse import de formulários
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';// Importando o componente responsável pela criação dos formulários

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Apos o import, inclui-lo aqui.
    MeuFormModule //Incluso o componente responsável pela criação dos formulários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
