import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('#Button', () => {
    let props = {
        type: 'button',
        onClick: jest.fn(),
        value: 'Value'
    };
    test('it renders button', () => {
        render(<Button {...props} />);
        const button = screen.getAllByRole('button');
        expect(button).toHaveLength(1);
    });

    test('it renders the correct value', () => {
        render(<Button {...props} />);
        const button = screen.getByRole('button');
        expect(button.innerHTML).toBe(props.value);
    });
});
