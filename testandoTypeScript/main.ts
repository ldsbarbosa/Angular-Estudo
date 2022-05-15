// Créditos à: Loiane Groner
var minhaVar = 'minha variavel'; // Declaração de variável no JavaScript puro, vanilla, que estamos acostumados.

function minhaFun(x,y){// Declaração de função no JavaScript também.
    return x + y;
}

let num = 2; // ECMAScript 2015 ou ES6
const PI = 3.1415; // ECMAScript 2015 ou ES6


var numeros = [1,2,3];
// Ler sobre programação funcional
numeros.map(function(valor){
    return valor*2;
});

numeros.map(valor => valor * 2); // ES 6

class Matematica {// ES 6
    soma(x, y){
        return x + y;
    }
}
var n1: string = 'dqawdqdwqw'; // No TypeScript, é possível forçar tipagem de variável
var n2: any = 'dqawdqdwqw';
n2 = 4.4;
/* Sites úteis:

    es6-features.org
    babeljs.io

    Comandos prompt úteis:

    tsc nomeDoArquivo.ts
*/