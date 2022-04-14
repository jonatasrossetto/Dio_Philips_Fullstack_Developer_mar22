
function promptNumber(text){
    let input = 's';
    while (isNaN(input)){
        input = Number(prompt(text));
        if (isNaN(input)) {
            alert('Please enter a number');
        }
    }
    return input;
}

let n1 = promptNumber('Enter number n1');
let n2 = promptNumber('Enter number n2');

// Crie uma função que recebe dois números como parâmetro
// Confira se os números são iguais
// Confira se a soma dos números é maior que 10 ou menor que 20
// Retorne uma string dizendo "Os numeros n1 e n2 não/são iguais. Sua soma é soma, que é maior/menor que 20"


console.log(`Os números ${n1} e ${n2} ${n1==n2?'são':'não são'} iguais. Sua soma é igual à ${n1+n2} que é ${(n1+n2)<20?'menor':'maior'} que 20`);

// function comparaN1eN2(nA, nB){
//     console.log(`Os números ${nA} e ${nB} ${na===nb?'são':'não são'} iguais`);
    
// }

// comparaN1eN2(n1, n2);
