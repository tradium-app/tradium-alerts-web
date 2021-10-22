import React from 'react'

const colNames = {
    isBuyAlert: 'Buy',
    isSellAlert: 'Sell',
    symbol: 'Symbol',
    changePercent: 'Change%',
    price: 'Price',
    chart: 'Chart',
    news: 'News',
    marketCap: 'Mar Cap.',
    week52DrawDown: '52 Week Range',
    tipranksUpside: 'TR Upside (1yr%)',
    revenueGrowthQuarterlyYoy: 'Rev. Q. YOY',
    revenueGrowthTTMYoy: 'Rev. Ttm YOY',
    priceToSalesTTM: 'P/S',
    priceToEarningsTTM: 'P/E',
    redditRank: 'Reddit Rank',
    nextEarningsDate: 'Next Earnings',
    rsi: 'Rsi',
    beta: 'Beta',
    trend: 'Trend',
    nextSupport: 'Support distance(%)',
    nextResistance: 'Resistance distance(%)',
}

const columns = React.memo(
    () => [
        {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Column 2',
            accessor: 'col2',
        },
    ],
    []
)

export default columns
