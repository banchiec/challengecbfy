import { set } from "mongoose"
import React, { useState } from "react"

const CheckboxLabel = ({ labelOn, labelOff }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isChecked, setIsChecked] = useState(false)

    const onChange = () => {
        setIsChecked(!isChecked)
    }
    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            {isChecked ? labelOn : labelOff}
        </label>
    )
}


export default CheckboxLabel