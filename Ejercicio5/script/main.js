//5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.

const array = [25,56,200,123];

function funCallback(callback, arr){
    return callback(arr);
};

function validarMinutos(arr){
    
    let newArray = [];
    
    for(value of arr){
        if ((value)/60 > 2)  newArray.push(value);
    }

    return newArray;
};

const result =  funCallback(validarMinutos, array);

console.log(result);