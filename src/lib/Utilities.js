const formatAlertCondition = (condition) => {
    return (
        toProperCase(condition.indicator1) +
        ' ' +
        getOperatorSymbol(condition.operator, condition.isNegative) +
        (condition.indicator2 ? toProperCase(condition.indicator2) : condition.valueText || condition.value) +
        (condition.diff_percent != 0
            ? (condition.diff_percent > 0 ? ' by more than ' : ' by less than ') + Math.abs(condition.diff_percent) + '% '
            : '')
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function formatMarketCap(x) {
    if (x > 1000) {
        return numberWithCommas(Math.floor(x / 1000)) + 'B'
    } else {
        return numberWithCommas(Math.floor(x)) + 'M'
    }
}

export { formatAlertCondition, toProperCase, formatMarketCap }
