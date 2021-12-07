import React from 'react'
import { cleanup, render } from '@testing-library/react'
import CheckboxLabel from './checkboxLabel.test'


test('checkboxLabel changes the text after click', () => {
    render(<CheckboxLabel labelOn="On" labeloff="Off" />)

})