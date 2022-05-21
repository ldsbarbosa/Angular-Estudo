import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
  nome: any = 'Allan Kay';
  pessoa: any = {
    nome: 'Linus Torvalds',
    idade: 34
  }
  trocaNome(evento: any){
    this.nome = (<HTMLInputElement>evento.target).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
