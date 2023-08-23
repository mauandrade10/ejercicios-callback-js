//2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

let number = '';
let secondNumber = '';
let control = false;


const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const sum = document.querySelector('#sum');
const substract = document.querySelector('#sum');
const multiply = document.querySelector('#sum');
const divide = document.querySelector('#sum');
const equals = document.querySelector('#equals')


const resultSection = document.querySelector('.result-section');
const inputSection = document.querySelector('.input-section');


function printNumber(n){
    const writeNumber = document.createElement('p');
    writeNumber.innerText = n;
    resultSection.append(writeNumber);
}

function printOperation(text){
    const writeNumber = document.createElement('p');
    writeNumber.innerText = text;
    inputSection.append(writeNumber);
}


function deleteInfo(section){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
}

function ejecuteOperation(callback, num1, num2){
    return callback(num1, num2);
}


one.addEventListener('click',()=>{
    if(control == false){
        printNumber(1);
        number = number + '1';
        console.log(number);
    }else{
        deleteInfo(resultSection);
        deleteInfo(inputSection);
        printNumber(1);
        number = number + '1';
        console.log(number);
        control = false;
    }

})


two.addEventListener('click',()=>{
    printNumber(2);
    number = number + '2';
    console.log(number);
})

three.addEventListener('click',()=>{
    printNumber(3);
    number = number + '3';
    console.log(number);})


four.addEventListener('click',()=>{
    printNumber(4);
    number = number + '4';
    console.log(number);
})

five.addEventListener('click',()=>{
    printNumber(5);
    number = number + '5';
    console.log(number);})


six.addEventListener('click',()=>{
    printNumber(6);
    number = number + '6';
    console.log(number);
})

seven.addEventListener('click',()=>{
    printNumber(7);
    number = number + '7';
    console.log(number);})


eight.addEventListener('click',()=>{
    printNumber(8);
    number = number + '8';
    console.log(number);
})

nine.addEventListener('click',()=>{
    printNumber(9);
    number = number + '9';
    console.log(number);
})

zero.addEventListener('click',()=>{
    printNumber(0);
    number = number + '0';
    console.log(number);
})

sum.addEventListener('click',()=>{
    deleteInfo(resultSection);
    deleteInfo(inputSection);
    printOperation(`${number} +`);
    secondNumber = Number(number);
    console.log(secondNumber);
    number = '';

    function sum (num1, num2){
        return num1 + num2;
    }

    equals.addEventListener('click',()=>{
        deleteInfo(resultSection);
        console.log(number,secondNumber);
        const result = ejecuteOperation(sum, Number(number),  secondNumber);
        printNumber(result);
        deleteInfo(inputSection);
        printOperation(`${number} + ${secondNumber} =`);
        number = '';
        secondNumber = 0;
        control = true;
    })

})

substract.addEventListener('click',()=>{
    deleteInfo(resultSection);
    deleteInfo(inputSection);
    printOperation(`${number} +`);
    secondNumber = Number(number);
    console.log(secondNumber);
    number = '';

    function substract (num1, num2){
        return num1 - num2;
    }

    equals.addEventListener('click',()=>{
        deleteInfo(resultSection);
        console.log(number,secondNumber);
        const result = ejecuteOperation(substract, Number(number),  secondNumber);
        printNumber(result);
        deleteInfo(inputSection);
        printOperation(`${number} - ${secondNumber} =`);
        number = '';
        secondNumber = 0;
        control = true;
    })

})

multiply.addEventListener('click',()=>{
    deleteInfo(resultSection);
    deleteInfo(inputSection);
    printOperation(`${number} +`);
    secondNumber = Number(number);
    console.log(secondNumber);
    number = '';

    function multiply (num1, num2){
        return num1 * num2;
    }

    equals.addEventListener('click',()=>{
        deleteInfo(resultSection);
        console.log(number,secondNumber);
        const result = ejecuteOperation(multiply, Number(number),  secondNumber);
        printNumber(result);
        deleteInfo(inputSection);
        printOperation(`${number} * ${secondNumber} =`);
        number = '';
        secondNumber = 0;
        control = true;
    })

})

divide.addEventListener('click',()=>{
    deleteInfo(resultSection);
    deleteInfo(inputSection);
    printOperation(`${number} +`);
    secondNumber = Number(number);
    console.log(secondNumber);
    number = '';

    function divide (num1, num2){
        return num1 / num2;
    }

    equals.addEventListener('click',()=>{
        deleteInfo(resultSection);
        console.log(number,secondNumber);
        const result = ejecuteOperation(divide, Number(number),  secondNumber);
        printNumber(result);
        deleteInfo(inputSection);
        printOperation(`${number} / ${secondNumber} =`);
        number = '';
        secondNumber = 0;
        control = true;
    })

})


