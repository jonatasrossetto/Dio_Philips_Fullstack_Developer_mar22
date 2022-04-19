// Create two different functions to test if a string is a palindrome
let teste="roma me tem amor";
let teste0=0;
let teste1="roma me tem amor";
let teste2 ="54321 54321";
let teste3 ="9876543210";
let teste4 ="543212345";


// console.log(teste.replaceAll(" ",""));
// console.log(teste);
// let original=teste.replaceAll(" ","");
// let invertido=original.split("").reverse().join("");
// console.log(invertido);
// console.log(teste.length-1);




function IsPalindrome1(texto){
    if (!texto) {return "string inexistente"};

    original=texto.replaceAll(" ","");
    invertido=original.split("").reverse().join("");
    return (original==invertido);
}

function IsPalindrome2(texto){
    if (!texto) {return "string inexistente"};
    texto=texto.replaceAll(" ","");
    let invertido="";
    for (let index = texto.length-1; index >= 0; index=index-1) {
        invertido=invertido+texto[index];
    }
    return texto==invertido;
}

console.log("Testing the function IsPalindrome1");
console.log(`Is the string "${teste0}" a palindrome? ${IsPalindrome1(teste0)}`);
console.log(`Is the string "${teste1}" a palindrome? ${IsPalindrome1(teste1)}`);
console.log(`Is the string "${teste2}" a palindrome? ${IsPalindrome1(teste2)}`);
console.log(`Is the string "${teste3}" a palindrome? ${IsPalindrome1(teste3)}`);
console.log(`Is the string "${teste4}" a palindrome? ${IsPalindrome1(teste4)}`);
console.log("\n\n Testing the function IsPalindrome2");
console.log(`Is the string "${teste0}" a palindrome? ${IsPalindrome2(teste0)}`);
console.log(`Is the string "${teste1}" a palindrome? ${IsPalindrome2(teste1)}`);
console.log(`Is the string "${teste2}" a palindrome? ${IsPalindrome2(teste2)}`);
console.log(`Is the string "${teste3}" a palindrome? ${IsPalindrome2(teste3)}`);
console.log(`Is the string "${teste4}" a palindrome? ${IsPalindrome2(teste4)}`);

// *************************
// Troque todos os elementos pares e diferentes de 0 de um array pelo numero 0. Se o array for vazio retorne -1
// change all even numbers and non-zero elements in an array with the number 0. If the array is empty return -1

let matriz1=[1,3,4,6,80,33,23,90];
let matriz2=[];
console.log(matriz2);

function removeEvenNumbers(dados){
    if (dados.length==0){return "-1"};
    let matriz=dados;
    for (let index = 0; index < matriz.length; index++) {
        if (matriz[index]!=0 && matriz[index]%2==0){
            matriz[index]=0;
            //  console.log(matriz);
        }
    }
    return matriz;
}

console.log(`Input: ${matriz1}`);
console.log(`Output: ${removeEvenNumbers(matriz1)}`);

console.log(`Input: ${matriz2}`);
console.log(`Output: ${removeEvenNumbers(matriz2)}`);