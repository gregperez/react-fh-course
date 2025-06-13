const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 34553535,
        latitud: 12.323,
        longitud: 23.1232,
    }
};

// console.log(persona);

const persona2 =  { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);