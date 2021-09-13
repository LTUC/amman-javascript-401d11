import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from '../App.js';

test('loads the app and shows the name', async ()=> {
    render(<App/>);
    const name = await waitFor(()=> screen.getByTestId("name"));
    expect(name).toHaveTextContent('default-person');
});