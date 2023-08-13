###Calculadora en HTML CSS Y JAVA SCRIPT
---
### AUTOR: Marcelo Cerutti
---
###HERRAMIENTAS USADAS:
###*HTML,
###*CSS,
###*JAVA SCRIPT'
---
###ALGORITMO PRINCIPAL
...

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

    ..
---
###CASOS DE TEST
---

*Entrada 1 100, entrada 2 0, operacion /, salida undefined.

solucion..

...   
   if (num2==0){
            alert('No es posible dividir por 0');
        } else {
              resultado = num1 / num2;
        break;
    ..

*Entrada 1 999999, entrada2 999999999, operacion *, salida exedia el espacio para el resultado.
*Entrada 1 1, entrada 2 999999999999999, operacion /, salida Un numero demasiado pequeño.

solucion..

...
    if (resultado>999999999999){
            alert('El resultado es demasiado grande');
        }else if(resultado<0.0000001){
            alert('El resultado es demasiado pequeño.');
        }else{
    document.getElementById('resultado').innerHTML = resultado;
        }
   }

