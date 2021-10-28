import React, { useEffect } from 'react'
import { useField } from 'formik'
import IndicatorValues from './IndicatorValues'

const SecondIndicatorSelect = ({ indicator, valueField, value, valueTextField, valueConfigField }) => {
    const [, , valueHelpers] = useField(valueField)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueTextHelpers] = useField(valueTextField)
    const { setValue: setValueTextField } = valueTextHelpers

    const [, , valueConfigHelpers] = useField(valueConfigField)
    const { setValue: setValueConfigField } = valueConfigHelpers

    useEffect(() => {
        setValueFieldsBasedOnValue(value)
    }, [value])

    const indicatorConfig = IndicatorValues.find((element) => element.name === indicator)

    const handleChange = (event) => {
        setValueTouched(true)
        setValueFieldsBasedOnValue(event.target.value)
    }

    const setValueFieldsBasedOnValue = (newValue) => {
        if (newValue == null) return
        const valueObj = indicatorConfig?.values?.find((element) => element.value === newValue)
        if (valueObj != null) {
            setValueField(valueObj.value)
            setValueTextField(valueObj.valueText)
            setValueConfigField(valueObj.valueConfig)
        }
    }

    return (
        <select className="form-control" onChange={handleChange} onBlur={handleChange} value={value}>
            <option value="">-- Please Select --</option>
            {indicatorConfig?.values?.map(({ value, valueText }) => (
                <option key={value} value={value}>
                    {valueText || value}
                </option>
            ))}
            <Indicator2SelectOptions indicators={indicatorConfig?.comparable_to} />
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
