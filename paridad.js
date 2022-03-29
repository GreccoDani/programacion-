

let numero;
function ingrNro(){

    do{

      numero =  parseInt(prompt('Ingrese un numero para saber si es PAR, IMPAR ó CERO'));


    }while(isNaN(numero));

    console.log(`El número ingresado es ${numero}`);

}

function mostrParod() {

    if(numero == 0){
        console.log(`El numero ingresado es CERO`);
    } else if(numero % 2 == 0){
        console.log(`El numero ingresado es PAR`);
    } else {
        console.log(`El numero ingresado es IMPAR`);
    }
   
}



