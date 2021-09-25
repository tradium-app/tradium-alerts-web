import React from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const ConditionValueSelect = ({ indicator, value, valueText, valueConfig }) => {
    const [, , valueHelpers] = useField(value)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueTextHelpers] = useField(valueText)
    const { setValue: setValueTextField } = valueTextHelpers

    const [, , valueConfigHelpers] = useField(valueConfig)
    const { setValue: setValueConfigField } = valueConfigHelpers

    const handleChange = (event) => {
        setValueTouched(true)
        const value = IndicatorValues.find((element) => element.name === indicator)?.values?.find((element) => element.value === event.target.value)
        setValueField(value.value)
        setValueTextField(value.valueText)
        setValueConfigField(value.valueConfig)
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
