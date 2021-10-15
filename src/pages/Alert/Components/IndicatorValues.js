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
            // {
            //     value: 'golden_cross_sma20_sma50',
            //     valueText: 'Golden Cross (SMA20 above SMA50)',
            //     valueConfig: { length: 20, length2: 50, upDirection: true },
            // },
            { value: 'below_sma20', valueText: 'Price below SMA20', valueConfig: { length: 20, value: 0, upDirection: false } },
            { value: 'below_10_sma20', valueText: 'Price 10% below SMA20', valueConfig: { length: 20, value: 10, upDirection: false } },
            { value: 'below_20_sma20', valueText: 'Price 20% below SMA20', valueConfig: { length: 20, value: 20, upDirection: false } },
            // {
            //     value: 'death_cross_sma20_sma50',
            //     valueText: 'Death Cross (SMA20 above SMA50)',
            //     valueConfig: { length: 20, length2: 50, upDirection: false },
            // },
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
                valueConfig: { length: 20, length2: 50, upDirection: true },
            },
            { value: 'below_ema20', valueText: 'Price below EMA20', valueConfig: { length: 20, value: 0, upDirection: false } },
            { value: 'below_10_ema20', valueText: 'Price 10% below EMA20', valueConfig: { length: 20, value: 10, upDirection: false } },
            { value: 'below_20_ema20', valueText: 'Price 20% below EMA20', valueConfig: { length: 20, value: 20, upDirection: false } },
            {
                value: 'death_cross_ema20_ema50',
                valueText: 'Death Cross (EMA20 below EMA50)',
                valueConfig: { length: 20, length2: 50, upDirection: false },
            },
        ],
    },
    {
        name: 'reddit',
        text: 'Reddit Trending',
        values: [
            { value: 'top10', valueText: 'In Top 10', valueConfig: { value: 10, upDirection: true } },
            { value: 'top20', valueText: 'In Top 20', valueConfig: { value: 20, upDirection: true } },
            { value: 'top50', valueText: 'In Top 50', valueConfig: { value: 50, upDirection: true } },
            { value: 'not_top10', valueText: 'Not in Top 10', valueConfig: { value: 10, upDirection: false } },
            { value: 'not_top20', valueText: 'Not in Top 20', valueConfig: { value: 20, upDirection: false } },
            { value: 'not_top50', valueText: 'Not in Top 50', valueConfig: { value: 50, upDirection: false } },
        ],
    },
    {
        name: 'week52high',
        text: '52 Week High',
        values: [
            { value: '10_below_week52high', valueText: 'Price 10% below 52 Week High', valueConfig: { value: 10, upDirection: false } },
            { value: '20_below_week52high', valueText: 'Price 20% below 52 Week High', valueConfig: { value: 20, upDirection: false } },
            { value: '30_below_week52high', valueText: 'Price 30% below 52 Week High', valueConfig: { value: 30, upDirection: false } },
            { value: '40_below_week52high', valueText: 'Price 40% below 52 Week High', valueConfig: { value: 40, upDirection: false } },
            { value: '50_below_week52high', valueText: 'Price 50% below 52 Week High', valueConfig: { value: 50, upDirection: false } },
        ],
    },
    {
        name: 'week52low',
        text: '52 Week Low',
        values: [
            { value: '10_above_week52low', valueText: 'Price 10% above 52 Week Low', valueConfig: { value: 10, upDirection: true } },
            { value: '20_above_week52low', valueText: 'Price 20% above 52 Week Low', valueConfig: { value: 20, upDirection: true } },
        ],
    },
]

export default IndicatorValues
