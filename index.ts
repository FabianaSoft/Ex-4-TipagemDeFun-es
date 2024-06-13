
//void

function digaOla(): void{
    console.log('Olá');
}

digaOla();

//string

function digaOlaPara(nome: string): string{
    return 'Olá ' + nome;
}

console.log(digaOlaPara('João'));

//number

function dobro(numero: number): number{
    return numero * 2;
}
console.log(dobro(5));

//boolean

function parOuImpar(numero: number): boolean{
    return numero % 2 === 0;
}

console.log(parOuImpar(2));

//null

function naoRetornaNada(): null{
    return null;
}

console.log(naoRetornaNada());

//undefined

function naoRetornaNada2(): undefined{
    return undefined;
}

console.log(naoRetornaNada2());

//array

function inverterArray(array: number[]): number[]{
    return array.reverse();
}

console.log(inverterArray([1, 2, 3, 4]));

//any

function qualquerCoisa(x: any): any{
    return x;
}

console.log(qualquerCoisa(1));

//object

function montaObjeto(nome: string, idade: number): object{
    return {
        nome: nome,
        idade: idade
    };
}

console.log(montaObjeto('João', 20));

//Enum

enum Cor{
    Vermelho=0,
    Verde=1,
    Azul=2
}

function escolheCor(cor: Cor): string{
    return Cor[cor];
}

console.log(escolheCor(Cor.Azul));


