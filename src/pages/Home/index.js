import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Container, Table } from 'reactstrap'
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
    price: 'Price',
    changePercent: 'Change%',
    recentClosePrices: 'Chart',
    marketCap: 'Market Cap.',
    week52DrawDown: '52 Week Range',
    beta: 'Beta',
    revenueGrowthQuarterlyYoy: 'Rev. Quarter YOY',
    revenueGrowthTTMYoy: 'Rev. TTM YOY',
    redditRank: 'Reddit Rank',
    rsi: 'Rsi',
    trend: 'Trend',
    news: 'News',
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
        week52DrawDown: (s.week52High - s.price) / s.week52High || 0,
        redditRank: s.redditRank <= 0 ? 999 : s.redditRank,
        isBuyAlert: alertData?.getAlerts.some((a) => a.symbol == s.symbol && a.signal == 'Buy' && a.status == 'On'),
        isSellAlert: alertData?.getAlerts.some((a) => a.symbol == s.symbol && a.signal == 'Sell' && a.status == 'On'),
        recentClosePrices: trendData?.getWatchListStockTrendlines.find((a) => a.symbol == s.symbol)?.recentClosePrices,
        news: newsData?.getWatchListNews.filter((a) => a.symbol == s.symbol).length,
    }))

    const { items, requestSort, sortConfig } = useSortableData(watchList, initialSortConfig)

    const showAlertList = (symbol, signal) => {
        const alerts = alertData.getAlerts.filter((a) => a.symbol == symbol && a.signal == signal)
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
                <title>{'Swing Trade Alerts'}</title>
            </Helmet>
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
            </Container>
        </div>
    )
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
            rsi
            trend
            redditRank
        }
    }
`

export const GET_STOCK_TRENDLINES_QUERY = gql`
    query getWatchListStockTrendlines {
        getWatchListStockTrendlines {
            symbol
            recentClosePrices
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login?.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(HomePage))
