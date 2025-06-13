//const arrego = new Array(100);
const arrego = [1,2,3,4];
//arrego.push(1);
//arrego.push(2);
//arrego.push(3);
//arrego.push(4);

let arrego2 = [ ...arrego, 5];
//arrego2.push(5);

const arreglo3 = arrego2.map(function(numero){
    return numero * 2;
});

console.log(arrego);
console.log(arrego2);
console.log(arreglo3);