const IndicatorValues = [
    {
        name: 'price',
        text: 'Price',
        operators: ['above', 'below'],
        comparable_to: ['sma', 'ema', 'week52High', 'week52Low'],
        difference_percentage: [0, 5, 10, 20, 30, 40],
    },
    {
        name: 'rsi',
        text: 'RSI (14)',
        config: { length: 14 },
        operators: ['above', 'below'],
        values: [{ value: '20' }, { value: '30' }, { value: '40' }, { value: '50' }, { value: '60' }, { value: '70' }, { value: '80' }],
    },
    {
        name: 'sma',
        text: 'Simple Moving Average (20)',
        config: { length: 20 },
        operators: ['above', 'below'],
        comparable_to: ['price', 'ema', 'week52High', 'week52Low'],
        difference_percentage: [0, 5, 10, 20, 30, 40],
    },
    {
        name: 'ema',
        text: 'Exponential Moving Average (20)',
        config: { length: 20 },
        operators: ['above', 'below'],
        comparable_to: ['price', 'sma', 'week52High', 'week52Low'],
        difference_percentage: [0, 5, 10, 20, 30, 40],
    },
    {
        name: 'week52High',
        text: '52 week high',
        operators: ['above', 'below'],
        comparable_to: ['sma', 'price', 'ema', 'week52Low'],
        difference_percentage: [0, 5, 10, 20, 30, 40],
    },
    {
        name: 'week52Low',
        text: '52 week low',
        operators: ['above', 'below'],
        comparable_to: ['sma', 'price', 'ema', 'week52High'],
        difference_percentage: [0, 5, 10, 20, 30, 40],
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
