import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean = false;
  meuFavorito2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  aoClicar(){
    this.meuFavorito = !this.meuFavorito;
  }
  aoClicar2(){
    this.meuFavorito2 = !this.meuFavorito2;
  }
}
