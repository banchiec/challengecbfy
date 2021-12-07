import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import CheckboxLabel from '../src/checkboxLabel.test'

afterEach(cleanup)

test('checkboxLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <CheckboxLabel labelOn="On" labeloff="Off" />
    )
    expect(queryByLabelText(/off/i)).toBeTruthy()
    fireEvent.click(getByLabelText(/off/i))
    expect(queryByLabelText(/on/i)).toBeTruthy()
})