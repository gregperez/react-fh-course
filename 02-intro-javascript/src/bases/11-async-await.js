// const getImagenPromesa = () => new Promise( resolve => resolve('https://jjksjdskjds'));
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {
        const apiKey = 'wMOP3b6cqflQ0yhZjUdJII5QDLMGlyaE';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );        
    } catch (error) {
        // manejo del error
        console.error(error);
    }
};

getImagen();
