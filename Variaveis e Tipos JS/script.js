// Create two different functions to test if a string is a palindrome
let teste="roma me tem amor";
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
    original=texto.replaceAll(" ","");
    invertido=original.split("").reverse().join("");
    return (original==invertido);
}

function IsPalindrome2(texto){
    texto=texto.replaceAll(" ","");
    let invertido="";
    for (let index = texto.length-1; index >= 0; index=index-1) {
        invertido=invertido+texto[index];
    }
    return texto==invertido;
}

console.log("Testing the function IsPalindrome1");
console.log(`Is the string "${teste1}" a palindrome? ${IsPalindrome1(teste1)}`);
console.log(`Is the string "${teste2}" a palindrome? ${IsPalindrome1(teste2)}`);
console.log(`Is the string "${teste3}" a palindrome? ${IsPalindrome1(teste3)}`);
console.log(`Is the string "${teste4}" a palindrome? ${IsPalindrome1(teste4)}`);
console.log("\n\n Testing the function IsPalindrome2");
console.log(`Is the string "${teste1}" a palindrome? ${IsPalindrome2(teste1)}`);
console.log(`Is the string "${teste2}" a palindrome? ${IsPalindrome2(teste2)}`);
console.log(`Is the string "${teste3}" a palindrome? ${IsPalindrome2(teste3)}`);
console.log(`Is the string "${teste4}" a palindrome? ${IsPalindrome2(teste4)}`);