/*
EJERCICIO FIZZ BUZZ
- Si un numero es = a 3 o multiplo de 3 (3,6,9,12,15) vamos a imprimir: fizz
- Si un numero es multiplo de 5 vamos a imprimir: buzz
- Los que son multiplos de ambos como 15, 30, 45: van a imprimir FIZZBUZZ!
*/


for (let i = 1; i < 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FIZBUZZ`);
        continue;
    }else if(i % 3 == 0){
        console.log(`${i} fiz`);
        continue;
    }else if( i % 5 == 0){
        console.log(`${i} buzz`);
        continue;
    }
    console.log(i);
    
}
