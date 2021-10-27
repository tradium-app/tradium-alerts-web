import { useField } from 'formik'
import React from 'react'
import { Label } from 'reactstrap'

const ToggleSwitch = ({ field }) => {
    const [, meta, statusHelpers] = useField(field)
    const { value } = meta
    const { setValue } = statusHelpers

    const toggle = () => {
        setValue(!value)
    }

    return (
        <div onClick={toggle} className="d-flex justify-content-center">
            <Label htmlFor="title" className="col-form-label">
                Enabled &nbsp;
            </Label>
            {value && <i className="bx bx-toggle-right font-size-40 text-success"></i>}
            {!value && <i className="bx bx-toggle-left font-size-40 text-danger"></i>}
        </div>
    )
}

export default ToggleSwitch
