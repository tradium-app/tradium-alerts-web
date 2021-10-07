import React, { useEffect } from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const ConditionValueSelect = ({ indicator, valueField, value, valueTextField, valueConfigField }) => {
    const [, , valueHelpers] = useField(valueField)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueTextHelpers] = useField(valueTextField)
    const { setValue: setValueTextField } = valueTextHelpers

    const [, , valueConfigHelpers] = useField(valueConfigField)
    const { setValue: setValueConfigField } = valueConfigHelpers

    useEffect(() => {
        setValueFieldsBasedOnValue(value)
    }, [value])

    const handleChange = (event) => {
        setValueTouched(true)
        setValueFieldsBasedOnValue(event.target.value)
    }

    const setValueFieldsBasedOnValue = (newValue) => {
        if (newValue == null) return
        const valueObj = IndicatorValues.find((element) => element.name === indicator)?.values?.find((element) => element.value === newValue)
        setValueField(valueObj.value)
        setValueTextField(valueObj.valueText)
        setValueConfigField(valueObj.valueConfig)
    }

    return (
        <select className="form-control" onChange={handleChange} onBlur={handleChange} value={value}>
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
