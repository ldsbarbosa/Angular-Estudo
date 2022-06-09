import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Isso aqui é interessante
})
export class LogService {

  constructor() { }

  consoleLog(msg:string){
    console.log(msg);
  }
}
