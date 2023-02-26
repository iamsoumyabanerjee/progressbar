import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('#Select', () => {
    let props = {
        onChange: jest.fn(),
        defaultValue: 0,
        options: [
            { label: 'label', value: 0 },
            { label: 'label1', value: 1 }
        ]
    };
    test('it renders select', () => {
        render(<Select {...props} />);
        const select = screen.getAllByRole('combobox');
        const option = screen.getAllByRole('option');
        expect(select).toHaveLength(1);
        expect(option).toHaveLength(2);
    });
});
