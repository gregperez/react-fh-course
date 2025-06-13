//const saludar = function(nombre) {
//    return `Hola, ${nombre}`;
//}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Vegeta'));

console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());

// objecto implícito: se trata de envolver la respuesta, sin un return con ( )
const getUser = () => ({
    uid: 'ABC123',
    userName: 'testUser'
});

const user = getUser()
console.log(user);

// Tarea
// 1. trasforman a una función de Flecha
// 2. retornar objecto implícito
// 3. pruebas

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    userName: nombre
});

const usuarioActivo = getUsuarioActivo('Greg');
console.log(usuarioActivo);