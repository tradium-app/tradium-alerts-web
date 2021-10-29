import React from 'react'
import IndicatorValues from './IndicatorValues'
import ValueSelect from './ValueSelect'

const CompareToSelect = ({ indicator1, name1, value1, name2, value2 }) => {
    const indicator1Config = IndicatorValues.find((element) => element.name === indicator1)

    if (indicator1Config?.comparable_to) {
        const availableValues = IndicatorValues.filter((element) => indicator1Config?.comparable_to?.includes(element.name)).map((indConfig) => ({
            value: indConfig.name,
            valueText: indConfig.text,
        }))
        return <ValueSelect name={name1} value={value1} availableValues={availableValues} />
    } else {
        return <ValueSelect name={name2} value={value2} availableValues={indicator1Config?.values} />
    }
}

export default CompareToSelect
