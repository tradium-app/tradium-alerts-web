import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Container, Table } from 'reactstrap'
import gql from 'graphql-tag'
import { useLazyQuery } from '@apollo/client'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend } from 'recharts'
import stockImg from '../../assets/images/stock-default-icon.png'
import useSortableData from '../../hooks/useSortableData'

const colNames = {
    isBuyAlert: 'Buy',
    isSellAlert: 'Sell',
    symbol: 'Symbol',
    price: 'Price',
    changePercent: 'Change%',
    last30DaysClosePrices: 'Chart',
    marketCap: 'Market Cap.',
    week52DrawDown: '52 Week Range',
    beta: 'Beta',
    revenueGrowthQuarterlyYoy: 'Rev. Quarter YOY',
    revenueGrowthTTMYoy: 'Rev. TTM YOY',
    redditRank: 'Reddit Rank',
    rsi: 'Rsi',
    trend: 'Trend',
}

const initialSortConfig = {
    storageKey: 'stocks-list',
    key: 'isBuyAlert',
    direction: 'descending',
}

const HomePage = ({ authUser }) => {
    const [getWatchList, { loading, error, data }] = useLazyQuery(GET_WATCHLIST_QUERY, { pollInterval: 30000 })

    useEffect(() => {
        authUser && getWatchList()
    }, [authUser, getWatchList])

    const watchList = data?.getWatchList.map((s) => ({
        ...s,
        week52DrawDown: (s.week52High - s.price) / s.week52High || 0,
        redditRank: s.redditRank <= 0 ? 999 : s.redditRank,
    }))
    const { items, requestSort, sortConfig } = useSortableData(watchList, initialSortConfig)

    return (
        <div className="page-content">
            <Container fluid>
                <div className="table-responsive">
                    <Table className="table-centered table-nowrap">
                        <thead>
                            <tr>
                                {Object.keys(colNames).map((colName, index) => (
                                    <th key={index}>
                                        <Link onClick={() => requestSort(colName)} to="#" className="text-muted">
                                            {colNames[colName]}
                                        </Link>
                                        <i
                                            className={
                                                colName != sortConfig?.key
                                                    ? ''
                                                    : sortConfig.direction == 'ascending'
                                                    ? 'bx bx-up-arrow-alt'
                                                    : 'bx bx-down-arrow-alt'
                                            }
                                        ></i>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>{!error && !loading && items?.map(createWatchListRow)}</tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

const createWatchListRow = (stock, index) => {
    const last30DaysClosePrices = stock.last30DaysClosePrices.map((p) => ({ key: p }))

    return (
        <tr key={index}>
            <td>
                <Link onClick={() => {}} className={stock.isBuyAlert ? 'text-success' : 'text-muted'} to="#">
                    {stock.isBuyAlert ? <i className="mdi mdi-bell-ring font-size-18"></i> : <i className="mdi mdi-bell-outline font-size-18"></i>}
                </Link>
            </td>
            <td>
                <Link onClick={() => {}} className={stock.isSellAlert ? 'text-danger' : 'text-muted'} to="#">
                    {stock.isSellAlert ? <i className="mdi mdi-bell-ring font-size-18"></i> : <i className="mdi mdi-bell-outline font-size-18"></i>}
                </Link>
            </td>
            <td style={{ textAlign: 'left' }}>
                <Link to={`/symbol/${stock.symbol.toUpperCase()}`} className="ml-1">
                    <img
                        src={`https://finnhub.io/api/logo?symbol=${stock.symbol}`}
                        alt=""
                        className="avatar-xs img-thumbnail rounded-circle d-inline-block mr-2"
                        onError={(e) => {
                            if (e.target.src != stockImg) e.target.src = stockImg
                        }}
                    />
                    <h5 className="font-size-13 d-inline-block">{stock.symbol.toUpperCase()}</h5>
                </Link>
            </td>
            <td>{Math.floor(stock.price)}</td>
            <td className={stock.changePercent < 0 ? 'text-danger' : 'text-success'}>{Math.abs(stock.changePercent).toFixed(2)}</td>
            <td className="p-0 d-flex justify-content-center align-items-center">
                <LineChart width={50} height={40} data={last30DaysClosePrices}>
                    <Line type="monotone" dataKey="key" isAnimationActive={false} dot={false} width={50} height={40} accentHeight={40} />
                </LineChart>
            </td>
            <td>{formatMarketCap(stock.marketCap)}</td>
            <td>
                <div className="text-muted font-size-10 d-inline-block mr-2">{Math.floor(stock.week52Low)}</div>
                <div className="d-inline-block">
                    <input
                        type="range"
                        className="form-control-range"
                        min={Math.floor(stock.week52Low)}
                        max={Math.floor(stock.week52High)}
                        value={Math.floor(stock.price)}
                        disabled
                        style={{ width: '50px' }}
                    />
                </div>
                <div className="text-muted font-size-10 d-inline-block ml-2">{Math.floor(stock.week52High)}</div>
            </td>
            <td>{stock.beta.toFixed(1)}</td>
            <td>{stock.revenueGrowthQuarterlyYoy.toFixed(0)}</td>
            <td>{stock.revenueGrowthTTMYoy.toFixed(0)}</td>
            <td>{stock.redditRank < 999 ? stock.redditRank : ''}</td>
            <td>{stock.rsi != 100 && stock.rsi != 0 && stock.rsi.toFixed(0)}</td>
            <td>
                <div className="font-size-16">
                    <i className={stock.trend == 'Up' ? 'bx bx-up-arrow-alt text-success' : 'bx bx-down-arrow-alt text-danger'}></i>
                </div>
            </td>
        </tr>
    )
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

export const GET_WATCHLIST_QUERY = gql`
    query getWatchList {
        getWatchList {
            id
            symbol
            company
            price
            last30DaysClosePrices
            changePercent
            marketCap
            week52High
            week52Low
            beta
            revenueGrowthQuarterlyYoy
            revenueGrowthTTMYoy
            rsi
            trend
            redditRank
            isBuyAlert
            isSellAlert
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(HomePage))
