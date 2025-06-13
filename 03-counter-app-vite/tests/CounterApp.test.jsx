import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en <CounterApp/>', () => {

    const initialValue = 100;

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
        
        render( <CounterApp value={ initialValue } /> );
        expect( screen.getByText(initialValue) ).toBeTruthy();
    });

    test('debe de incrementar con el botón +1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('101') ).toBeTruthy();
    });
    

    test('debe de decrementar con el botón -1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('99') ).toBeTruthy();
    });

    test('debe de funcionar el botón de reset', () => {

        render( <CounterApp value={ 355 } /> )
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        // screen.debug();

        expect( screen.getByText(355) ).toBeTruthy();
    });
    

});
