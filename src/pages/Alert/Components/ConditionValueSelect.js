import React from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const ConditionValueSelect = ({ indicator, valueField, value, valueTextField, valueConfigField }) => {
    const [, , valueHelpers] = useField(valueField)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueTextHelpers] = useField(valueTextField)
    const { setValue: setValueTextField } = valueTextHelpers

    const [, , valueConfigHelpers] = useField(valueConfigField)
    const { setValue: setValueConfigField } = valueConfigHelpers

    const handleChange = (event) => {
        setValueTouched(true)
        const value = IndicatorValues.find((element) => element.name === indicator)?.values?.find((element) => element.value === event.target.value)
        setValueField(value.value)
        setValueTextField(value.valueText)
        setValueConfigField(value.valueConfig)
    }

    return (
        <select className="form-control" onChange={handleChange} value={value}>
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
