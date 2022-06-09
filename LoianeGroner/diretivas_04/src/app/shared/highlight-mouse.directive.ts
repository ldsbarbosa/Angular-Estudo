import { Directive, HostListener, ElementRef, Renderer2,
Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective implements OnInit{

  @HostListener('mouseenter') onMouseOver(){ // O HostListener serve para escutar mudanças em qualquer elemento do DOM e fazer algo a respeito disso, acionando um evento
    /*this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'gray');*/
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseOut(){
    /*this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'white');*/
    this.backgroundColor = this.defaultColor;
  }

  //@HostBinding('style.backgroundColor') backgroundColor!: string; // Fazendo assim, se economiza mais linhas de código e fica mais organizado.
  @HostBinding('style.backgroundColor') get setColor(){ // Forma alternativa. Assim é bom para aproveitar getters e setters. Também, caso haja algmma lógica que deseje executar, é melhor usando dessa forma
    //Código extra
    return this.backgroundColor;
  }

  @Input() defaultColor: string = "white";
  @Input() highlightColor: string = "yellow";

  private backgroundColor!: string;


  constructor(
    /*private _elementRef: ElementRef,
    private _renderer2: Renderer2*/) { 

    }
    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
    }
}
