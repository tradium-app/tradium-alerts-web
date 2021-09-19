import React from 'react'
import { useField } from 'formik'
import RsiValueConfigs from './RsiValueConfigs'
import IndicatorValues from './IndicatorValues'

const ConditionValueSelect = ({ indicator, value, valueConfig }) => {
    const [, , valueHelpers] = useField(value)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueConfigHelpers] = useField(valueConfig)
    const { setValue: setValueConfigField } = valueConfigHelpers

    const handleChange = (event) => {
        setValueTouched(true)
        setValueField(event.target.value)
        setValueConfigField(RsiValueConfigs[event.target.value])
    }

    return (
        <select className="form-control" onChange={handleChange}>
            <option>--Please Select--</option>
            {IndicatorValues[indicator] &&
                IndicatorValues[indicator].map(({ value, valueText }) => (
                    <option key={value} value={value}>
                        {valueText}
                    </option>
                ))}
        </select>
    )
}

export default ConditionValueSelect
