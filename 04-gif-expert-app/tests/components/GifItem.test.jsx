import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url   = 'http://site.imagen.jpg';
    
    test('debe de hacer match conn el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
    });
    
});
