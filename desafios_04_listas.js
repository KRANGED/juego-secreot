//Crea una lista vacía llamada "listaGenerica".
let listaGenerica =[];
// Crea una lista de lenguajes de programación llamada 
// "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = [ 'JavaScript', 'C', 'C++', 'Kotlin','Python'];
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('java');
lenguagesDeProgramacion.push('ruby');
lenguagesDeProgramacion.push('GoLang');
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementosDeLista(lenguagesDeProgramacion) {
    let contador = 0;
    while (contador < lenguagesDeProgramacion.length){
        console.log(lenguagesDeProgramacion[contador]);
        contador++;
    }
    
}
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosDeLista(lenguagesDeProgramacion) {
    let contador = 1;
    while (contador <= lenguagesDeProgramacion.length){
        console.log(lenguagesDeProgramacion[lenguagesDeProgramacion.length - contador]);
        contador++;
    }
    
}
// Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedioDeUnaListaDeElementosNumericos(lista){
    let suma = 0;
    let contador = 0;
    while(contador<lista.length){
        suma = suma + lista(contador);
        contador++;
    }
    return suma/lista.length;

}
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function busquedaNumeroMayorYMenor(lista) {
    let tamaño = lista.length;
    let mayor = lista[0];
    let menor = lista[0];

    contador1 = 0;
    contador2 = 0;

    while (contador1<tamaño) {
        if(mayor < lista[contador1]){
        mayor = lista[contador1];
    }
        if(menor > lista[contador1]){
        menor = lista[contador1];
        }
        contador1++;
    }

    
    return `El número mas pequeño dentro del arreglo es ${menor} mientras que el mayor fue ${mayor}`;

    
}
// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeElementosEnLaLista(lista) {
    let contador = 0;
    let suma = 0;

    while(contador < lista.length){
        suma = suma + lista[contador];
        contador++;
    }
    
}
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceDeElementoEnLista(lista,elemento) {
    if (lista.includes(elemento)) {
        let contador = 0;
        while(contador < lista.length){
            if(lista[contador] == elemento){
                return contador;
            }
            else{
                contador++;
            }
        }
        
    } else {
        return -1;
        
    }
    
}
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function suma1a1DeElementosEnListas(lista1,lista2) {
    if (lista1.length == lista2.length) {
        let listaResultante = []
        let contador = 0;
        while (contador < lista1.length) {
            listaResultante.push(lista1[contador]+lista2[contador]);
            contador++;
        }
        return listaResultante;
        
    }
    else{
        return `tamaño incorrecto de las listas`;
    }
    
}
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function elevarNumerosAlCuadradoDeUnaLista(lista) {
    let contador = 0;
    let listaAlCuadrado =[]

    while (contador<lista.length) {
        listaAlCuadrado.push(lista[contador]*lista[contador]);
        contador++;
        
    }
    return listaAlCuadrado;

    
}