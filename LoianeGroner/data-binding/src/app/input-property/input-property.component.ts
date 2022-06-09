import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {// Estudar mais sobre Decorators
  
  @Input('nome')          // Pode ser usado tanto o Decorator Input quanto o atributo "inputs" no Decorator Component
  nomeCurso: string = ''; // Sempre dê preferência à usar o Decorator Input ao invés da outra opção
  
  constructor() { }

  ngOnInit(): void {
  }

}
