var calculadora = require("./calculadora");

console.log(calculadora.soma(10, 20));
console.log(calculadora.mult(10, 10));
console.log(calculadora.nome);

calculadora.nome = "Alterando nome exportado do modulo";

console.log(calculadora.nome);

/*
var mostrarSite = false;
const site = "www.guiadoprogramador.com";

console.log("Hello world");

if(mostrarSite) {
    console.log(site);
}
*/