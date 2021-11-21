import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Table } from 'reactstrap'
import gql from 'graphql-tag'
import { useLazyQuery, useQuery } from '@apollo/client'
import useSortableData from '../../hooks/useSortableData'
import AlertListModal from './Components/alert-list-modal'
import useModal from '../../components/Common/useModal'
import { GET_ALERTS_QUERY } from '../../components/Common/TopbarDropdown/NotificationDropdown'
import NewsListModal from './Components/news-list-modal'
import { Helmet } from 'react-helmet'
import WatchListRow from './Components/watch-list-row'
import { GET_STOCK_NEWS_QUERY } from '../../components/Common/TopbarDropdown/NewsDropdown'

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
    prediction: 'Prediction',
    prediction2: 'Prediction2',
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

const initialSortConfig = {
    storageKey: 'stocks-list',
    key: 'symbol',
    direction: 'ascending',
}

const HomePage = ({ authUser }) => {
    const { isShowing: isShowingAlertListModal, toggle: toggleAlertListModal } = useModal()
    const [symbolInModal, setSymbolInModal] = useState(null)
    const [alertSignalInModal, setAlertSignalInModal] = useState(null)
    const [alertsInModal, setAlertsInModal] = useState(null)

    const { isShowing: isShowingNewsModal, toggle: toggleNewsModal } = useModal()
    const [newsInModal, setNewsInModal] = useState(null)

    const [getWatchList, { loading, error, data }] = useLazyQuery(GET_WATCHLIST_QUERY, { pollInterval: 30000 })
    const { data: alertData } = useQuery(GET_ALERTS_QUERY)
    const { data: trendData } = useQuery(GET_STOCK_TRENDLINES_QUERY)
    const { data: newsData } = useQuery(GET_STOCK_NEWS_QUERY)

    useEffect(() => {
        authUser && getWatchList()
    }, [authUser, getWatchList])

    const watchList = data?.getWatchList.map((s) => ({
        ...s,
        chart: calculateChangePercent(trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.recentClosePrices),
        prediction: calculateChangePercent(trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.nextPredictions),
        prediction2: calculateChangePercent(trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.nextPredictions2),
        tipranksUpside: s.tipranksPriceTarget != 0 ? ((s.tipranksPriceTarget - s.price) * 100) / s.price : 0,
        week52DrawDown: (s.week52High - s.price) / s.week52High || 0,
        redditRank: s.redditRank <= 0 ? 999 : s.redditRank,
        isBuyAlert: alertData?.getAlerts.some((a) => a.symbol == s.symbol && a.signal == 'Buy' && a.status == 'On'),
        isSellAlert: alertData?.getAlerts.some((a) => a.symbol == s.symbol && a.signal == 'Sell' && a.status == 'On'),
        recentClosePrices: trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.recentClosePrices,
        nextPredictions: trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.nextPredictions,
        nextPredictions2: trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.nextPredictions2,
        news: newsData?.getWatchListNews.filter((a) => a.symbol == s.symbol).length,
        nextSupport: s.sr && ((s.price - Math.max(...s.sr.filter((sp) => sp < s.price))) * 100) / s.price,
        nextResistance: s.sr && ((Math.min(...s.sr.filter((sp) => sp > s.price)) - s.price) * 100) / s.price,
    }))

    const { items, requestSort, sortConfig } = useSortableData(watchList, initialSortConfig)

    const showAlertList = (symbol, signal) => {
        const alerts = alertData?.getAlerts.filter((a) => a.symbol == symbol && a.signal == signal)
        setSymbolInModal(symbol)
        setAlertSignalInModal(signal)
        setAlertsInModal(alerts)
        toggleAlertListModal()
    }

    const showNewsList = (symbol) => {
        const news = newsData.getWatchListNews.filter((a) => a.symbol == symbol)
        setNewsInModal(news)
        toggleNewsModal()
    }

    return (
        <div className="page-content bg-white">
            <Helmet>
                <title>{'Tradium Alerts : for swing traders'}</title>
            </Helmet>
            <div className="main-table table-responsive">
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
                    <tbody>
                        {!error &&
                            !loading &&
                            items?.map((stock) => (
                                <WatchListRow stock={stock} showAlertList={showAlertList} showNewsList={showNewsList} key={stock.symbol} />
                            ))}
                    </tbody>
                </Table>
                <AlertListModal
                    symbol={symbolInModal}
                    alertSignal={alertSignalInModal}
                    alerts={alertsInModal}
                    isShowing={isShowingAlertListModal}
                    toggle={toggleAlertListModal}
                />
                <NewsListModal news={newsInModal} isShowing={isShowingNewsModal} toggle={toggleNewsModal} />
            </div>
        </div>
    )
}

const calculateChangePercent = (prices) => {
    if (!prices) return 0
    return (prices[prices.length - 1] - prices[0]) / prices[0]
}

export const GET_WATCHLIST_QUERY = gql`
    query getWatchList {
        getWatchList {
            id
            symbol
            company
            price
            changePercent
            marketCap
            week52High
            week52Low
            beta
            revenueGrowthQuarterlyYoy
            revenueGrowthTTMYoy
            priceToSalesTTM
            priceToEarningsTTM
            nextEarningsDate
            rsi
            trend
            redditRank
            tipranksPriceTarget
            sr
        }
    }
`

export const GET_STOCK_TRENDLINES_QUERY = gql`
    query getWatchListStockTrendlines {
        getWatchListStockTrendlines {
            symbol
            recentClosePrices
            nextPredictions
            nextPredictions2
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login?.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(HomePage))
