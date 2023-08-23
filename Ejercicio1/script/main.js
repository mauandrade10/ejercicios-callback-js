//1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

//Se inicializan las variables del DOM
const inputMessage = document.querySelector('#input-message');
const button = document.querySelector('#submit');

//Se genera el event Listener del clink del boton
button.addEventListener('click', ()=>{

    // Esta es la función que será el callback de la función
    function sendMessage(text){
        return text.value;
    }
    
    // Esta es la función que llama la anterior e ingresa el input del html
    function printMessage (callback, text){
        return callback(text)
    };

    // Se invoca la función y se guarda en una constante pata luego mostrarlo en consola
    const info = printMessage(sendMessage, inputMessage);
    console.log(info);
    
});


