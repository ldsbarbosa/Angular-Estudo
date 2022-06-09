import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles:[
    `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
    `
  ]
})

export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://i.picsum.photos/id/193/200/300.jpg?hmac=b5ZG1TfdndbrnQ8UJbIu-ykB2PRWv0QpHwehH0pqMgE';
  urlImagem2: string = 'https://i.picsum.photos/id/984/200/300.jpg?hmac=mLBN3lSvSl08Vh8Kw96TLY7v239gr1idtxVXvYFDkSc';
  urlImagem3: string = 'https://i.picsum.photos/id/281/200/300.jpg?hmac=KCN8F5QTgxHdeQxLpZ5BOuUEVQEp8jAedlLSRERW7CY';
  
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nome: any = 'Loiane';
  pessoa: any = {
    nome: 'def',
    idade: 19
  }

  nomeDoCurso: string = 'Angular';


  getValor(){// TypeScript não precisa escrever o function antes da função. JavaScript precisa.
    return 4;
  }// TypeScript também não precisa escrever o ; depois de fechar as chaves da função. JavaScript precisa.

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }
  
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = (<HTMLInputElement>valor.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  trocaNome(evento: any){
    this.nome = (<HTMLInputElement>evento.target).value;
  }
  trocaNome2(evento: any){
    this.pessoa.nome = (<HTMLInputElement>evento.target).value;
  }
  trocaIdade(evento: any){
    this.pessoa.idade = (<HTMLInputElement>evento.target).value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
