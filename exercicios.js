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