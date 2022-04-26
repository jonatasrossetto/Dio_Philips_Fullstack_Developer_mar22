'use strict';

let usuarios = new Map();

usuarios.set('user A','admin');
usuarios.set('user B','user');
usuarios.set('user C','admin');
usuarios.set('user D','user');
usuarios.set('user E','admin');
usuarios.set('user F','user');

function getAdmin(myMap){
   let aux = [];
   for (let [key,value] of myMap){
    if (value=='admin'){
        aux.push(key);
    }
   }
   return aux;
}

console.log(getAdmin(usuarios));

const matriz = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5];

function valoresUnicos(dados){
    const mySet = new Set(matriz);
    return [...mySet];
}

let matrizValoresUnicos = valoresUnicos(matriz);
console.log('comprimento da matriz:  '+matriz.length);
console.log(matriz);
console.log('comprimento do Set:  '+matrizValoresUnicos.length);
console.log(matrizValoresUnicos);