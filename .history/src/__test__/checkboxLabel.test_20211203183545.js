import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import CheckboxLabel from './checkboxLabel.test'

afterEach(cleanup)

it('checkboxLabel changes the text after click', () => {
    render(<CheckboxLabel labelOn="On" labeloff="Off" />)
    expect((/off/i)).toBeTruthy()
    fireEvent.click(getByLabelText(/off/i))
    expect(queryByLabelText(/on/i)).toBeTruthy()
})