const array = [4,5,77,98,23,54];

array.forEach((element, index) => {
    console.log(element, index);
})


const executarOperacaoEmArray = (array, callback) => {
    array.forEach((num) => callback(num));
};

const callback = (num) => {
    console.log(num * 3);
}

executarOperacaoEmArray(array, callback);


const verificaNum = (element) => {
    const index =  array.indexOf(element);
    if (index !==  -1) {
        console.log(`O Número consta no array e seu index é : ${index}`);
    } else {
        return console.log(-1);
    }

}

verificaNum(4);
verificaNum(55);

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];
    
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const procurarAluno = (aluno) => {
    const nomeEncontrado = todasAsTurmas.find(nome => nome.toLowerCase() === aluno.toLowerCase());
    if (nomeEncontrado) {
        console.log(`O aluno consta na turma e seu nome é ${aluno}`);
    } else {
        console.log(`Aluno não encontrado`);
    }
}

procurarAluno('Fax');
procurarAluno('João Silva');

const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((element) => { 
    const resultado = element * 3;
    console.log(resultado);
});

const resultadosMultiplicacao = numeros.map(numero => numero * 3);
const indice = resultadosMultiplicacao.findIndex(elemento => elemento === 18);
console.log(`O índice do número 18 é: ${indice}`);
