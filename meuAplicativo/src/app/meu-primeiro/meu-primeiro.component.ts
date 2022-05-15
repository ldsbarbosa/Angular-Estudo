import { Component } from '@angular/core';//Importanto a classe "Component" do pacote "/core" dentro de"Angular"

@Component({// Falando para o compilador do Typescript que a classe que declarei abaixo é um "Component"
    selector: 'meu-primeiro-component', // A chave "selector" é responsável por determinar qual seletor "<>" HTML irá selecionar meu componente. À sua frente, segue o valor, que acredito que não pode ser uma palavra já utilizada pelo HTML, como h1, por exemplo.
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
})// A chave "template" é responsável por armazenar diretamente no seletor o seu conteúdo. Neste uso, é feito a utilização do Template String. Ele facilita interpolação.
export class MeuPrimeiroComponent {// É aqui que declaro minha classe, usando Upper Cammel Case. A propriedade "export" é responsável por tornar a classe vísivel para outros arquivos.

}