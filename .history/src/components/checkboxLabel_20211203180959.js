import { set } from "mongoose"
import React, { useState } from "react"

const checkboxLabel = ({ labelOn, labelOff }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isChecked, setIsChecked] = useState(false)

    const onChange = () => {
        setIsChecked(!isChecked)
    }
    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onchange} />
            {isChecked ? labelOn : labelOff}
        </label>
    )
}

