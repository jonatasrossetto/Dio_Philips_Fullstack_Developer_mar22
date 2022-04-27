'use strict';

/* Desafio #1
let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {
    //   const valorInformadoPeloUsuario = gets();
    const valorInformadoPeloUsuario = prompt('Entre o numero '+i+' :');
    console.log(valorInformadoPeloUsuario);
    
    if (valorInformadoPeloUsuario>0) {quantidadePositivos++}
    console.log('contador: '+quantidadePositivos);

}

console.log(quantidadePositivos);
//print(`${quantidadePositivos} valores positivos`);
*/

// # Desafio #2

// const teste1 = '0 2';
// const teste2 = '2 3';
// const teste3 = '99 97';
// const teste4 = '97 94';
// const teste5 = '30 35';
// const teste6 = '100 99';


//let gets = teste1;
/*
function fasesLua(gets){
    //let lines = gets().split('\n');
    let lines = gets.split('\n');

    let line = lines.shift().split(" ");
    let inicio = parseInt(line[0]);
    let final = parseInt(line[1]);

    console.log(line);
    console.log(inicio);
    console.log(final);

    if (inicio >= 0 && final <= 2) {
        //print('nova');
        console.log('nova');
    } else if (final > inicio && inicio>=2 && final<97) {
        //print('crescente');
        console.log('crescente');
    } else if (final < inicio && inicio <= 97 && final>2) {
        //print('minguante');
        console.log('minguante');
    } else if (final < inicio && inicio <= 2 && final>=0) {
        console.log('minguante');
        //print('minguante');
    } else { 
        //print('cheia');
        console.log('cheia');
    }
}

fasesLua(teste1);
fasesLua(teste2);
fasesLua(teste3);
fasesLua(teste4);
fasesLua(teste5);
fasesLua(teste6);
*/

// #Desafio 3
//teste1
const numTotal = 10;
// const numTotal = parseInt(gets())
const numFigCompradas = 3;
// const numFigCompradas = parseInt(gets())
const setFig = new Set()

const figurinhas = [5,8,3]

for(  let i=0; i<numFigCompradas; i++){
  //const fig = gets();
  const fig = figurinhas[i];
  console.log('i: '+i);
  console.log(figurinhas[i]);
  setFig.add( fig );
  console.log(setFig);
}

console.log(numTotal - setFig.size)
