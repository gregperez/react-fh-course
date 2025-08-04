import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url   = 'http://site.imagen.jpg/';
    
    test('debe de hacer match conn el snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        const { getByRole } = render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe de mostrar el título en el componente', () => {
        const { getByText } = render(<GifItem title={ title } url={ url } />);
        expect( getByText(title) ).toBeTruthy();
    });
});
