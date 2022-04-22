'use strict';

let alunos = [{Nome:"A", Notas: [4,6,7]},
                {Nome:"B", Notas: [3,2,2]},
                {Nome:"C", Notas: [5,6,8]},
                {Nome:"D", Notas: [5,7,10]}]

function alunosAprovados (matriz, mediafinal){
    let alunosAuxiliar = [];
    for (const objeto of matriz) {
        let media = (objeto.Notas[0]+objeto.Notas[1]+objeto.Notas[2])/3;
        // console.log(objeto.Nome+'  :  '+media);
        if (media>=mediafinal){
            // console.log('aprovado')
            objeto.media = media;
            alunosAuxiliar.push(objeto);
        }
    }
    // console.log(alunosAuxiliar);
    return alunosAuxiliar;
}

console.log(alunosAprovados(alunos,5));


function calculaIdade(anos){
    console.log(`Daqui ${anos} anos, ${this.nome} terá ${this.idade+anos}`);
};

let pessoa1 = {nome:'Jônatas Rossetto',
            idade:47};
let pessoa2 = {nome:'Sheila Cal',
            idade:46};

calculaIdade.call(pessoa1,5);
calculaIdade.call(pessoa2,5);
calculaIdade.apply(pessoa1,[2]);
calculaIdade.apply(pessoa2,[3]);

let calculaidade1 = calculaIdade.bind(pessoa1);
calculaidade1(3);
calculaidade1(10);


