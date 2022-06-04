import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]' // Se botar o nome da tag antes do seletor, você especifica o uso dele. p[appFundoAmarelo] é para paragrafo. buttton[appFundoAmarelo] é para botão.
})
export class FundoAmareloDirective {

  constructor(private elementReference: ElementRef,
    private varRenderiza: Renderer2) {
    console.log(this.elementReference); // Sempre que você quiser saber o que modificar, dê o bom e velho sysout na variável/objeto em questão. A ferramenta de inspecionar do Chrome é maravilhosa! :-D
    //this.elementReference.nativeElement.style.backgroundColor = "#c3a2bd"; // Acessar o DOM assim pode trazer vulnerabilidades de ataques. Ataques do tipo XXS.
    this.varRenderiza.setStyle(
      this.elementReference.nativeElement,
      'background-color',
      'yellow');// Assim é como a equipe do Angular recomenda
  }

}
