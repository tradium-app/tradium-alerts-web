import React from 'react'
import IndicatorValues from './IndicatorValues'
import ValueSelect from './ValueSelect'

const CompareToSelect = ({ indicator1, indicator2Name, indicator2Value, indicator2ConfigName, valueField, value }) => {
    const indicator1Config = IndicatorValues.find((element) => element.name === indicator1)

    if (indicator1Config?.comparable_to) {
        const availableValues = IndicatorValues.filter((element) => indicator1Config?.comparable_to?.includes(element.name)).map((indConfig) => ({
            value: indConfig.name,
            valueText: indConfig.text,
            config: indConfig.config,
        }))
        return <ValueSelect name={indicator2Name} value={indicator2Value} configField={indicator2ConfigName} availableValues={availableValues} />
    } else {
        return <ValueSelect name={valueField} value={value} availableValues={indicator1Config?.values} />
    }
}

export default CompareToSelect
