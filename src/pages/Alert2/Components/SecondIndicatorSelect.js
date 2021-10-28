import React, { useEffect } from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const SecondIndicatorSelect = ({ name, value, indicator1 }) => {
    const [, , valueHelpers] = useField(name)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    useEffect(() => {
        setValueField(value)
    }, [value])

    const indicator1Config = IndicatorValues.find((element) => element.name === indicator1)

    const handleChange = (event) => {
        setValueTouched(true)
        setValueField(event.target.value)
    }

    return (
        <select className="form-control" onChange={handleChange} onBlur={handleChange} value={value}>
            <option value="1">-- Please Select --</option>
            {indicator1Config?.values?.map(({ value, valueText }) => (
                <option key={value} value={value}>
                    {valueText || value}
                </option>
            ))}
            <Indicator2SelectOptions indicators={indicator1Config?.comparable_to} />
        </select>
    )
}

const Indicator2SelectOptions = ({ indicators }) => {
    const indicatorConfigs = IndicatorValues.filter((element) => indicators?.includes(element.name))

    return (
        <>
            {indicatorConfigs &&
                indicatorConfigs.map(({ name, text }) => (
                    <option key={name} value={name}>
                        {text}
                    </option>
                ))}
        </>
    )
}

export default SecondIndicatorSelect
