import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import checkboxLabel from '../src/components/checkboxLabel'

afterEach(cleanup)

it('checkboxLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <checkboxLabel labelOn="On" labeloff="Off" />
    )
    expect(queryByLabelText(/off/i)).toBeTruthy()
    fireEvent.click(getByLabelText(/off/i))
    expect(queryByLabelText(/on/i)).toBeTruthy()
})