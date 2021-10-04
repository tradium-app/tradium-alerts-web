import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Table } from 'reactstrap'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import stockImg from '../../assets/images/stock-default-icon.png'
import useSortableData from '../../hooks/useSortableData'

const colNames = {
    symbol: 'Symbol',
    price: 'Price',
    changePercent: 'Change%',
    marketCap: 'Market Cap.',
    week52Low: '52 Week Range',
    revenueGrowthQuarterlyYoy: 'Rev. Quarter YOY',
    revenueGrowthTTMYoy: 'Rev. TTM YOY',
    beta: 'Beta',
}
const initialSortConfig = {
    storageKey: 'stocks-list',
    key: 'symbol',
    direction: 'ascending',
}

const HomePage = (props) => {
    const { loading, error, data } = useQuery(GET_WATCHLIST_QUERY, { pollInterval: 30000 })
    const { items, requestSort, sortConfig } = useSortableData(data?.getWatchList, initialSortConfig)

    return (
        <div className="page-content">
            <Container fluid>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
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
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>{!error && !loading && items?.map(createWatchListRow)}</tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const createWatchListRow = (stock, index) => {
    return (
        <tr key={index}>
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
            <td>{stock.beta.toFixed(2)}</td>
            <td>{stock.revenueGrowthQuarterlyYoy.toFixed(2)}</td>
            <td>{stock.revenueGrowthTTMYoy.toFixed(2)}</td>
            <td>
                <Link onClick={() => {}} className={stock.alertStatus ? 'text-danger' : 'text-muted'} to="#">
                    {stock.alertStatus ? <i className="mdi mdi-bell-ring font-size-18"></i> : <i className="mdi mdi-bell-outline font-size-18"></i>}
                </Link>
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
            changePercent
            marketCap
            week52High
            week52Low
            beta
            revenueGrowthQuarterlyYoy
            revenueGrowthTTMYoy
            alertStatus
        }
    }
`

export default HomePage
