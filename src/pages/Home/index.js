import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Table, Badge, Media } from 'reactstrap'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import stockImg from '../../assets/images/stock-default-icon.png'

const HomePage = (props) => {
    const { loading, error, data } = useQuery(GET_WATCHLIST_QUERY, { pollInterval: 30000 })

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
                                                <th>Symbol</th>
                                                <th>Price</th>
                                                <th>Change%</th>
                                                <th>Market Cap.</th>
                                                <th>52 Week Low</th>
                                                <th>52 Week High</th>
                                                <th>Beta</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>{data && !error && !loading && data.getWatchList?.map(createWatchListRow)}</tbody>
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
            <td>
                <Media>
                    <div className="mr-3">
                        <img
                            src={`https://finnhub.io/api/logo?symbol=${stock.symbol}`}
                            alt=""
                            className="avatar-xs img-thumbnail rounded-circle"
                            onError={(e) => {
                                if (e.target.src != stockImg) e.target.src = stockImg
                            }}
                        />
                    </div>
                    <Media body>
                        <h5 className="font-size-13 mb-1">
                            <Link to={`/symbol/${stock.symbol.toUpperCase()}`}>{stock.symbol.toUpperCase()}</Link>
                        </h5>
                        <p className="text-muted mb-1">Tesla</p>
                    </Media>
                </Media>
            </td>
            <td>{numberWithCommas(stock.price)}</td>
            <td>{numberWithCommas(stock.changePercent)}</td>
            <td>{formatMarketCap(stock.marketCap)}</td>
            <td>{numberWithCommas(stock.week52Low)}</td>
            <td>{numberWithCommas(stock.week52High)}</td>
            <td>{stock.beta.toFixed(2)}</td>
            <td>
                <Link onClick={() => {}} className="action-icon text-danger" to="#">
                    <i className="mdi mdi-trash-can font-size-18"></i>
                </Link>
            </td>
        </tr>
    )
}

function numberWithCommas(x) {
    return Math.floor(x)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function formatMarketCap(x) {
    if (x > 1000) {
        return numberWithCommas(x / 1000) + ' B'
    } else {
        return numberWithCommas(x) + ' M'
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
        }
    }
`

export default HomePage
