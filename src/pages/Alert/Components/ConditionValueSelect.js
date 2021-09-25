import React from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const ConditionValueSelect = ({ indicator, value, valueConfig }) => {
    const [, , valueHelpers] = useField(value)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueConfigHelpers] = useField(valueConfig)
    const { setValue: setValueConfigField } = valueConfigHelpers

    const handleChange = (event) => {
        setValueTouched(true)
        setValueField(event.target.value)
        const valueConfig = IndicatorValues.find((element) => element.name === indicator)?.values?.find(
            (element) => element.value === event.target.value
        ).valueConfig

        setValueConfigField(valueConfig)
    }

    return (
        <select className="form-control" onChange={handleChange}>
            <option>--Please Select--</option>
            {IndicatorValues.find((element) => element.name === indicator)?.values.map(({ value, valueText }) => (
                <option key={value} value={value}>
                    {valueText}
                </option>
            ))}
        </select>
    )
}

export default ConditionValueSelect
