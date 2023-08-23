/* 4.- Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.
ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO */

const mayus = document.querySelector('#mayus-button');
const minus = document.querySelector('#minus-button');
const input = document.querySelector('#input-message');
const resultSection = document.querySelector('#result-section');



function funCallback(callback, text){
    return callback(text);
}

function removeElements(section){
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
}

function printResult(section, text){
    const result = document.createElement('p');
    result.innerText = text;
    section.appendChild(result);
}

function mayusText(text){
    return text.toUpperCase()
}

function minusText(text){
    return text.toLowerCase()
}



mayus.addEventListener('click', ()=>{
    
    const resultText = funCallback(mayusText, input.value);
    removeElements(resultSection);
    printResult(resultSection, resultText)
});

minus.addEventListener('click', ()=>{
    
    const resultText = funCallback(minusText, input.value);
    removeElements(resultSection);
    printResult(resultSection, resultText)
});
