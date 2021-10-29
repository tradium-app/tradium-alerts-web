import React, { useEffect } from 'react'
import { useField } from 'formik'

const ValueSelect = ({ name, value, availableValues }) => {
    const [, , valueHelpers] = useField(name)
    const { setValue, setTouched } = valueHelpers

    useEffect(() => {
        setValue(value)
    }, [value])

    const handleChange = (event) => {
        setTouched(true)
        setValue(event.target.value)
    }

    return (
        <select className="form-control" onChange={handleChange} onBlur={handleChange} value={value || ''}>
            <option value="1">-- Please Select --</option>
            {availableValues?.map(({ value, valueText }) => (
                <option key={value} value={value}>
                    {valueText || value}
                </option>
            ))}
        </select>
    )
}

export default ValueSelect
