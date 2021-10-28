import React, { useEffect } from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const CompareToSelect = ({ indicator1, name1, value1, name2, value2 }) => {
    const [, , value1Helpers] = useField(name1)
    const { setValue: setValue1Field, setTouched: setValue1Touched } = value1Helpers

    const [, , value2Helpers] = useField(name2)
    const { setValue: setValue2Field, setTouched: setValue2Touched } = value2Helpers

    useEffect(() => {
        setValue1Field(value1)
        setValue2Field(value2)
    }, [value1, value2])

    const indicator1Config = IndicatorValues.find((element) => element.name === indicator1)

    const handleChange = (event) => {
        setValue1Touched(true)
        setValue1Field(event.target.value)
        setValue2Touched(true)
        setValue2Field(event.target.value)
    }

    return (
        <select className="form-control" onChange={handleChange} onBlur={handleChange} value={value1}>
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

export default CompareToSelect
