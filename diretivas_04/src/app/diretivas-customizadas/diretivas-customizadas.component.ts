import { Component, OnInit } from '@angular/core';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive'; // Tentando resolver o problema

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
