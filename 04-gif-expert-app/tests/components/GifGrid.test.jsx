import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);
        // screen.debug();

        expect( screen.getByText( category ) ).toBeTruthy();
        expect( screen.getByText( 'Cargando...' ) ).toBeTruthy();
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            { id: '1', title: 'Gif 1', url: 'https://example.com/gif1.gif' },
            { id: '2', title: 'Gif 2', url: 'https://example.com/gif2.gif' }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category } />);

        // screen.debug();

        expect( screen.getAllByRole('img').length ).toBe( gifs.length );
        expect( screen.getAllByAltText('Gif 1')[0] ).toBeTruthy();
        expect( screen.getAllByAltText('Gif 2')[0] ).toBeTruthy();
    });
});
