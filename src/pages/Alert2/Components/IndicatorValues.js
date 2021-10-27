const IndicatorValues = [
    {
        name: 'price',
        text: 'Price',
        operators: ['above', 'below'],
        comparable_to: ['sma_20', 'ema_20', '52week_high', '52week_low'],
        difference_percentage: [5, 10, 20, 30, 40],
    },
    {
        name: 'rsi_14',
        text: 'RSI (14)',
        config: { length: 14 },
        operators: ['above', 'below'],
        values: [{ value: '20' }, { value: '30' }, { value: '40' }, { value: '50' }, { value: '60' }, { value: '70' }, { value: '80' }],
    },
    {
        name: 'sma_20',
        text: 'Simple Moving Average (20)',
        config: { length: 20 },
        operators: ['above', 'below'],
        comparable_to: ['price', 'ema_20', '52week_high', '52week_low'],
        difference_percentage: [5, 10, 20, 30, 40],
    },
    {
        name: 'ema_20',
        text: 'Exponential Moving Average (20)',
        config: { length: 20 },
        operators: ['above', 'below'],
        comparable_to: ['sma_20', 'price', '52week_high', '52week_low'],
        difference_percentage: [5, 10, 20, 30, 40],
    },
    {
        name: '52week_high',
        text: '52 week high',
        operators: ['above', 'below'],
        comparable_to: ['sma_20', 'price', 'ema_20', '52week_low'],
        difference_percentage: [5, 10, 20, 30, 40],
    },
    {
        name: '52week_low',
        text: '52 week low',
        operators: ['above', 'below'],
        comparable_to: ['sma_20', 'price', 'ema_20', '52week_high'],
        difference_percentage: [5, 10, 20, 30, 40],
    },
    {
        name: 'reddit',
        text: 'Reddit Trending',
        values: [
            { value: 'top10', valueText: 'In Top 10' },
            { value: 'top20', valueText: 'In Top 20' },
            { value: 'top50', valueText: 'In Top 50' },
        ],
    },
    {
        name: 'earningsdate',
        text: 'Next Earnings Date',
        values: [
            { value: 'in_10_days', valueText: 'In 10 days' },
            { value: 'in_20_days', valueText: 'In 20 days' },
            { value: 'in_30_days', valueText: 'In 30 days' },
        ],
    },
]

export default IndicatorValues
