import { Component, OnInit } from '@angular/core'; // Falando que o arquivo é um componente

import { CursosService } from './cursos.service'; // Importação de um Serviço/Service

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  nomePortal: string; // String
  cursos: string[]; // Array de Strings

  constructor(private cursosService: CursosService) { // Método construtor recebe como parametro uma instância da classe "CursosService". Esse objeto entra na classe como um atributo privado devido à caracteristica "pritave" inserida nele
    this.nomePortal = 'http://loiane.training'; // Acessando variável/atributo privado da própria classe com o this por meio do metódo construtor
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
/*
Aula 07 da Loiane - Não é boa prática deixar informações dinâmicas e toda lógica de programação de como obter informações e
chamadas de serviço dentro do componente. O código dentro do componente é responsável por apenas mostrar as informações para o usuário e interagir com o usuário.
Outras responsabilidades podem ir para a tal classe chamada "Serviço".
Informações e Lógica -> Serviço
Renderização -> Componente
*/