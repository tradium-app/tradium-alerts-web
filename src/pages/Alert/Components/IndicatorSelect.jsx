import React, { useEffect } from 'react'
import { useField } from 'formik'

const IndicatorSelect = ({ name, value, configField, availableValues }) => {
    const [, , valueHelpers] = useField(name)
    const { setValue, setTouched } = valueHelpers

    const [, , configHelpers] = useField(configField)
    const { setValue: setConfigValue } = configHelpers

    useEffect(() => {
        setValue(value)
    }, [value])

    const handleChange = (event) => {
        setTouched(true)
        setValue(event.target.value)
        setConfigValue(availableValues?.find((v) => v.value == event.target.value)?.config)
    }

    return (
        <select className="form-control" onChange={handleChange} onBlur={handleChange} value={value || ''}>
            <option value="1">-- Please Select --</option>
            {availableValues?.map(({ value, valueText, config }) => (
                <option key={value} value={value} config={config}>
                    {valueText || value}
                </option>
            ))}
        </select>
    )
}

export default IndicatorSelect
