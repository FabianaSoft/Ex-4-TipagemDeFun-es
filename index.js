//void
function digaOla() {
    console.log('Olá');
}
digaOla();
//string
function digaOlaPara(nome) {
    return 'Olá ' + nome;
}
console.log(digaOlaPara('João'));
//number
function dobro(numero) {
    return numero * 2;
}
console.log(dobro(5));
//boolean
function parOuImpar(numero) {
    return numero % 2 === 0;
}
console.log(parOuImpar(2));
//null
function naoRetornaNada() {
    return null;
}
console.log(naoRetornaNada());
//undefined
function naoRetornaNada2() {
    return undefined;
}
console.log(naoRetornaNada2());
//array
function inverterArray(array) {
    return array.reverse();
}
console.log(inverterArray([1, 2, 3, 4]));
//any
function qualquerCoisa(x) {
    return x;
}
console.log(qualquerCoisa(1));
//object
function montaObjeto(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
console.log(montaObjeto('João', 20));
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
function escolheCor(cor) {
    return Cor[cor];
}
console.log(escolheCor(Cor.Azul));
