import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()

export class CursosService {

    emitirCursoCriado = new EventEmitter<string>(); // Fazendo dois componentes, se tem services separadas, conversarem entre si por meio do EventEmitter
    static criouNovoCurso = new EventEmitter<string>(); // "Quando declaramos um atributo como estático, isso significa que nós não precisamos da instancia da classe para acessar o mesmo"

    private cursos: string[] = ['html','angular','css','javascript','php','nodejs','laravel','mysql','mariadb'];
    // Verificando quantas vezes a classe Cursos Service está sendo construida
    constructor(private objetoLogService: LogService){ // Injetando uma service dentro da outra
        console.log('CursosService');
    }
    getCursos(){
        this.objetoLogService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }
    addCursos(curso: string){
        this.objetoLogService.consoleLog(`Criando um novo curso ${curso}`); // ${} e `` são coisas do EC2015
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}