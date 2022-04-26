'use strict';

/*
Atividade: validação de erros por tipo
    O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

    * Crie uma função que recebe um array e um número
    * Realize as seguintes validações:
        * Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        * Se o array não for do tipo 'object', lance um erro do tipo TypeError
        * Se o número não for do tipo 'number', lance um erro do tipo TypeError
        * Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    * Utilize a declaração try...catch
    * Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

// function testArray(matriz, numero){
//     try {
//         if (!matriz) {throw "ReferenceError"};
//         if (!numero) {throw "ReferenceError"};
//         if (typeof(matriz)!='object') {throw "TypeError"};
//         if (typeof(numero)!='number') {throw "TypeError"};
//         if (matriz.length!=numero) {throw "RangeError"};
//         if (matriz.length==numero) return matriz;
//     } 
//     catch (e) { console.log(e) }
//     // catch (e if e instanceof TypeError) { console.log(e) }
//     // catch (e if e instanceof RangeError) { console.log(e) };
// }

function testArray(matriz, numero){
    try{
        if (!matriz) throw new ReferenceError("envie o parâmetro matriz");
        if (!numero) throw new ReferenceError("envie o parâmetro numero");
        if (typeof(matriz)!='object') throw new TypeError("Tipo de matriz diferente de object");
        if (typeof(numero)!='number') throw new TypeError("Tipo de numero diferente de number");
        if (matriz.length!=numero) throw new RangeError("Tamanho de matriz inválido");
        if (matriz.length==numero) return matriz;
    }
    catch(e) {
        console.log(e);
        if (e instanceof ReferenceError) {
            console.log("Este é um erro de referência");
        }
        if (e instanceof TypeError) {
            console.log("Este é um erro de tipo de dado");
        }
        if (e instanceof RangeError) {
            console.log("Este é um erro de faixa de valor");
        }
    }
    
    // catch (e if e instanceof TypeError) { console.log(e) }
    // catch (e if e instanceof RangeError) { console.log(e) };
}

const matrizTeste = [1,2,3,4,5];

console.log(testArray());
console.log(testArray(matrizTeste));
console.log(testArray('a',));
console.log(testArray('a',1));
console.log(testArray(matrizTeste,'a'));
console.log(testArray(matrizTeste,6));

