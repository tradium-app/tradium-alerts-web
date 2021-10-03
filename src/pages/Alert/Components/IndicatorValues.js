const IndicatorValues = [
    {
        name: 'rsi',
        text: 'RSI',
        values: [
            { value: 'overbought_60', valueText: 'OverBought (60)', valueConfig: { length: 14, value: 60, upDirection: true } },
            { value: 'overbought_70', valueText: 'OverBought (70)', valueConfig: { length: 14, value: 70, upDirection: true } },
            { value: 'overbought_80', valueText: 'OverBought (80)', valueConfig: { length: 14, value: 80, upDirection: true } },
            { value: 'overbought_90', valueText: 'OverBought (90)', valueConfig: { length: 14, value: 90, upDirection: true } },
            { value: 'oversold_40', valueText: 'OverSold (40)', valueConfig: { length: 14, value: 40, upDirection: false } },
            { value: 'oversold_30', valueText: 'OverSold (30)', valueConfig: { length: 14, value: 30, upDirection: false } },
            { value: 'oversold_20', valueText: 'OverSold (20)', valueConfig: { length: 14, value: 20, upDirection: false } },
            { value: 'oversold_10', valueText: 'OverSold (10)', valueConfig: { length: 14, value: 10, upDirection: false } },
        ],
    },
    {
        name: 'sma',
        text: 'Simple Moving Average',
        values: [
            { value: 'above_sma20', valueText: 'Price above SMA20', valueConfig: { length: 20, value: 0, upDirection: true } },
            { value: 'above_10_sma20', valueText: 'Price 10% above SMA20', valueConfig: { length: 20, value: 10, upDirection: true } },
            { value: 'above_20_sma20', valueText: 'Price 20% above SMA20', valueConfig: { length: 20, value: 20, upDirection: true } },
            {
                value: 'golden_cross_sma20_sma50',
                valueText: 'Golden Cross (SMA20 above SMA50)',
                valueConfig: { length: 20, value: 10, upDirection: true },
            },
            { value: 'below_sma20', valueText: 'Price below SMA20', valueConfig: { length: 20, value: 0, upDirection: false } },
            { value: 'below_10_sma20', valueText: 'Price 10% below SMA20', valueConfig: { length: 20, value: 10, upDirection: false } },
            { value: 'below_20_sma20', valueText: 'Price 20% below SMA20', valueConfig: { length: 20, value: 20, upDirection: false } },
            {
                value: 'death_cross_sma20_sma50',
                valueText: 'Death Cross (SMA20 above SMA50)',
                valueConfig: { length: 20, value: 10, upDirection: true },
            },
        ],
    },
    {
        name: 'ema',
        text: 'Exponential Moving Average',
        values: [
            { value: 'above_ema20', valueText: 'Price above EMA20', valueConfig: { length: 20, value: 0, upDirection: true } },
            { value: 'above_10_ema20', valueText: 'Price 10% above EMA20', valueConfig: { length: 20, value: 10, upDirection: true } },
            { value: 'above_20_ema20', valueText: 'Price 20% above EMA20', valueConfig: { length: 20, value: 20, upDirection: true } },
            {
                value: 'golden_cross_ema20_ema50',
                valueText: 'Golden Cross (EMA20 above EMA50)',
                valueConfig: { length: 20, value: 10, upDirection: true },
            },
            { value: 'below_ema20', valueText: 'Price below EMA20', valueConfig: { length: 20, value: 0, upDirection: false } },
            { value: 'below_10_ema20', valueText: 'Price 10% below EMA20', valueConfig: { length: 20, value: 10, upDirection: false } },
            { value: 'below_20_ema20', valueText: 'Price 10% below EMA20', valueConfig: { length: 20, value: 20, upDirection: false } },
            {
                value: 'death_cross_ema20_ema50',
                valueText: 'Death Cross (EMA20 above EMA50)',
                valueConfig: { length: 20, value: 10, upDirection: true },
            },
        ],
    },
]

export default IndicatorValues
