import { Injectable } from '@angular/core';// Importando a classe de Injeção de Dependencias

@Injectable({// Caracterizando como um Injetor de Dependencias
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){// Criando um método ou função
    return ['Java','Ext JS','Angular'];
  }
}
