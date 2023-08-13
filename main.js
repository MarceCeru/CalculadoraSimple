function traerNumero1 (){
    if (parseFloat(document.getElementById('numero1').value) == NaN){
        alert();
    }else {
        return parseFloat(document.getElementById('numero1').value)
    }
    
}

function traerNumero2 (){
    return  parseFloat(document.getElementById('numero2').value);
}

function operacion(){
    return document.getElementById('opcion').value;
}

function borra(){
    document.getElementById('botoningreso').re
}

function calcular(){

    let num1 = traerNumero1();
    let num2 = traerNumero2();
    
   
    if (isNaN(num1) || isNaN(num2) ) {
       alert('Ingrese dos numeros');
    } else {

    let resultado;
    let opcion = operacion();

    switch (opcion){
    case '+' :
        resultado = num1 + num2;
        break;
    case "-" :
        resultado = num1 - num2;
        break;
    case "*" :
        resultado = num1 * num2;
        break;
    case "/" :
        if (num2==0){
            alert('No es posible dividir por 0');
        } else {
              resultado = num1 / num2;
        break;
        }

      
    }
    //if (isNaN(resultado)){
    //    alert('Debe ingresar dos valores numericos');
    //}else{
        if (resultado>999999999999){
            alert('El resultado es demasiado grande');
        }else if(resultado<0.0000001){
            alert('El resultado es demasiado pequeño.');
        }else{
    document.getElementById('resultado').innerHTML = resultado;
        }
   }
 //   }
//    }
}