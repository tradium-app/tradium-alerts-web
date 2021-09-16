import React from 'react'
import { useField } from 'formik'
import RsiValues from './RsiValues'

const ConditionValueSelect = (props) => {
    const [, , valueHelpers] = useField(props.value)
    const { setValue: setValueField, setTouched: setValueTouched } = valueHelpers

    const [, , valueConfigHelpers] = useField(props.valueConfig)
    const { setValue: setValueConfigField } = valueConfigHelpers

    const handleChange = (event) => {
        setValueTouched(true)
        setValueField(event.target.value)
        setValueConfigField(RsiValues[event.target.value])
    }

    return (
        <select className="form-control" onChange={handleChange}>
            <option value="">--Please Select--</option>
            <option value="overbought_60">Overbought (60)</option>
            <option value="overbought_70">Overbought (70)</option>
            <option value="overbought_80">Overbought (80)</option>
            <option value="overbought_90">Overbought (90)</option>
            <option value="oversold_40">OverSold (40)</option>
            <option value="oversold_30">OverSold (30)</option>
            <option value="oversold_20">OverSold (20)</option>
            <option value="oversold_10">OverSold (10)</option>
        </select>
    )
}

export default ConditionValueSelect
