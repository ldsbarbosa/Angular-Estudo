// Créditos à: Loiane Groner
var minhaVar = 'minha variavel'; // Declaração de variável no JavaScript puro, vanilla, que estamos acostumados.
function minhaFun(x, y) {
    return x + y;
}
var num = 2; // ECMAScript 2015 ou ES6
var PI = 3.1415; // ECMAScript 2015 ou ES6
var numeros = [1, 2, 3];
// Ler sobre programação funcional
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'dqawdqdwqw'; // No TypeScript, é possível forçar tipagem de variável
var n2 = 'dqawdqdwqw';
n2 = 4.4;
/* Sites úteis:

    es6-features.org
    babeljs.io

    Comandos prompt úteis:

    tsc nomeDoArquivo.ts
*/ 
