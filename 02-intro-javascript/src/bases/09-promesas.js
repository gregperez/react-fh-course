import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {


//     setTimeout( () => {
//         // console.log('2 segundos después')
//         // resolve();

//         // Tarea
//         // importar el:
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000 );

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            // Tarea
            // importar el:
            const heroe = getHeroeById( id );
            // console.log(heroe);
            heroe === undefined ? reject('No se pudo encontrar el heroe') : resolve(heroe);
        }, 2000 );

    }); 
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );