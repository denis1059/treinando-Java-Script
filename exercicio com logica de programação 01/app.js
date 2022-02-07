// escreva uma função que recebe 2 numeros e retorne o maior deles

//metodo 1

/*function max (x, y){
    if (x > y) return x;
        return y;
    }
console.log(max (1,2));
*/

//metodo 2


/*function max (x,y){
    return x > y ? x : y;
}
console.log(max (1,2));
*/


//metodo 3

/*const max = (x, y) => {
    return x > y ? x : y;
}

console.log(max (1,2));
*/

//metodo 4

const max = (x,y) => x > y ? x :y;
console.log(max(1,2));