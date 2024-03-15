const array = [4,5,77,98,23,54];

array.forEach((element, index) => {
    console.log(element, index);
})


const executarOperacaoEmArray = (array, callback) => {
    array.forEach((num) => callback(num));
};

const callback = (num) => {
    console.log(num * 5);
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
