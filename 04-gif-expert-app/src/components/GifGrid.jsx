import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    
    const getImages = async () => {
        const newImagens = await getGifs( category );
        setImages(newImagens);
    };

    useEffect( () => {
        getImages();
    }, []);


    return (
        <>
            <h3>{ category }</h3>

            <ol>
                { 
                    images.map( ({ id, title }) => (
                    <li key={ id }>{ title }</li>
                    ))
                }
            </ol>
        </>
    )
}