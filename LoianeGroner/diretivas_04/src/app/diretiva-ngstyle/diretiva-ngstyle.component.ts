import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = true;
  tamanhoFonte: number = 10;// Não existe tipo inteiro, float, double ou long, somente "number"

  ativo2: boolean = true;
  tamanhoFonte2: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  aoClicar(){
    this.ativo = !this.ativo;
  }
  aoClicar2(){
    this.ativo2 = !this.ativo2;
  }
}
