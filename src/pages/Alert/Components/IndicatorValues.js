const IndicatorValues = [
    {
        name: 'rsi',
        text: 'RSI',
        values: [
            { value: 'overbought_60', valueText: 'OverBought (60)' },
            { value: 'overbought_70', valueText: 'OverBought (70)' },
            { value: 'overbought_80', valueText: 'OverBought (80)' },
            { value: 'overbought_90', valueText: 'OverBought (90)' },
            { value: 'oversold_40', valueText: 'OverSold (40)' },
            { value: 'oversold_30', valueText: 'OverSold (30)' },
            { value: 'oversold_20', valueText: 'OverSold (20)' },
            { value: 'oversold_10', valueText: 'OverSold (10)' },
        ],
    },
    {
        name: 'stock_trend',
        text: 'Stock Trend',
        values: [
            { value: 'uptrend', valueText: 'UpTrend' },
            { value: 'downtrend', valueText: 'DownTrend' },
        ],
    },
]

export default IndicatorValues
