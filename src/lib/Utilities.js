const formatAlertCondition = (condition) => {
    return (
        toProperCase(condition.timeframe) +
        ' ' +
        toProperCase(condition.indicator1) +
        getOperatorSymbol(condition.operator, condition.isNegative) +
        (condition.indicator2 ? toProperCase(condition.indicator2) : condition.valueText || condition.value) +
        (condition.diff_percent > 0 ? ' (+' + condition.diff_percent + '%)' : '')
    )
}

function toProperCase(text) {
    return text[0].toUpperCase() + text.substring(1)
}

function getOperatorSymbol(operator, isNegative) {
    if (!operator) return '   '
    else if (isNegative) return operator == 'above' ? '  ≯  ' : '  ≮  '
    else return operator == 'above' ? '  >  ' : '  <  '
}

export { formatAlertCondition, toProperCase }
