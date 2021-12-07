import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import CheckboxLabel from './checkboxLabel.test'

afterEach(cleanup)

it('checkboxLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <CheckboxLabel labelOn="On" />
    )
    expect(queryByLabelText(/off/i)).toBeTruthy()
    fireEvent.click(getByLabelText(/off/i))
    expect(queryByLabelText(/on/i)).toBeTruthy()
})