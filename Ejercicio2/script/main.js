//2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

//Se inicializan las variables del DOM
const inputMessage = document.querySelector('#input-message');
const button = document.querySelector('#submit');

button.addEventListener('click', ()=>{
    
    function typeMessage(text){

        if(text.value === 'true' || text.value === 'false'){
            return 'boolean'
        }
        else if (isNaN(Number(text.value))) {
            return typeof(text.value);
        }
        else return typeof(Number(text.value))
    };

    function printTypeMessage(callback, text){
        return callback(text);
    }

    const result = printTypeMessage(typeMessage, inputMessage);
    console.log(result)
})