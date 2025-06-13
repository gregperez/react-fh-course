const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// const { edad, clave, nombre } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ nombre, clave, edad, rango = 'Capitan'}) => {
    
    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.2323,
            lng: -12.2323
        }
    }
}


const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log(lat, lng);