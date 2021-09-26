import React, { useEffect, useRef, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table, Button } from 'reactstrap'
import toastr from 'toastr'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const Stock = ({ authUser }) => {
    let { symbol } = useParams()
    symbol = symbol.toUpperCase()
    const containerId = useRef(null)
    const { data: alerts } = useQuery(GET_ALERTS, {
        variables: { symbol },
    })

    const [addStockError, setAddStockError] = useState(null)
    const [addStockResponse, setAddStockResponse] = useState(null)
    const [addStock] = useMutation(ADD_STOCK_MUTATION, {
        onError: setAddStockError,
        onCompleted: setAddStockResponse,
    })

    if (addStockResponse?.addStock?.success) {
        toastr.success('Stock added to the WatchList.')
    }

    useEffect(() => {
        containerId.current = new window.TradingView.widget({
            width: containerId.current.clientWidth - 8,
            height: containerId.current.clientHeight,
            symbol: symbol,
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'light',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            hide_top_toolbar: true,
            save_image: false,
            studies: ['RSI@tv-basicstudies'],
            container_id: 'containerId',
        })
    }, [symbol])

    return (
        <React.Fragment>
            <Helmet>
                <title>{symbol + ' | Profile'}</title>
            </Helmet>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xl="3" sm="3">
                                            <Media>
                                                <div className="avatar-sm mr-3">
                                                    <span className="avatar-title rounded-circle bg-soft-warning text-warning font-size-22">
                                                        <i className="mdi mdi-bitcoin"></i>
                                                    </span>
                                                </div>

                                                <Media body>
                                                    <h4 className="card-title">{symbol}</h4>
                                                    <h5>1.02356 BTC</h5>
                                                </Media>
                                            </Media>
                                        </Col>

                                        <Col xl="3" sm="3">
                                            <div className="mt-4 mt-sm-0">
                                                <p className="text-muted mb-2">Last 24 hrs</p>
                                                <h5>
                                                    0.24 % <i className="mdi mdi-arrow-up text-success"></i>
                                                </h5>
                                            </div>
                                        </Col>
                                        <Col xl="6" sm="6" className="d-flex justify-content-end">
                                            <div className="mt-3 button-items">
                                                <Button
                                                    type="button"
                                                    color="primary"
                                                    onClick={() => {
                                                        addStock({ variables: { symbol } })
                                                    }}
                                                >
                                                    Add to WatchList
                                                </Button>

                                                <Link to={`/symbol/${symbol.toUpperCase()}/alert`} className="btn btn-primary">
                                                    Add an Alert
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div id="containerId" ref={containerId} className="m-4 align-items-center"></div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="4">
                            <Card className="overflow-hidden">
                                <CardBody>
                                    <CardTitle className="mb-3">Alerts</CardTitle>

                                    <div className="table-responsive">
                                        <Table className="table mb-0">
                                            <tbody>
                                                {alerts?.getAlerts.map((alert, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <h5>{alert.title}</h5>
                                                                {alert.conditions.map((condition, index) => (
                                                                    <div key={index}>
                                                                        {`${condition.timeframe} ${condition.indicator.toUpperCase()} equals
                                                                        ${condition.valueText}`}
                                                                    </div>
                                                                ))}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4">
                            <Card className="overflow-hidden">
                                <CardBody>
                                    <CardTitle className="mb-3">Capital Structure</CardTitle>

                                    <div className="table-responsive">
                                        <Table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Market Cap</td>
                                                    <td>$ 1,857</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Debt</td>
                                                    <td>- $ 157</td>
                                                </tr>
                                                <tr>
                                                    <td>Cash</td>
                                                    <td>$ 25</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td>$ 19.22</td>
                                                </tr>
                                                <tr>
                                                    <th>Total :</th>
                                                    <th>$ 1744.22</th>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4">
                            <Card className="overflow-hidden">
                                <CardBody>
                                    <CardTitle className="mb-3">Technical Indicators</CardTitle>

                                    <div className="table-responsive">
                                        <Table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>RSI</td>
                                                    <td>OverSold</td>
                                                </tr>
                                                <tr>
                                                    <td>MACD</td>
                                                    <td>OverSold</td>
                                                </tr>
                                                <tr>
                                                    <td>Cash</td>
                                                    <td>$ 25</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td>$ 19.22</td>
                                                </tr>
                                                <tr>
                                                    <th>Total :</th>
                                                    <th>$ 1744.22</th>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export const ADD_STOCK_MUTATION = gql`
    mutation addStock($symbol: String) {
        addStock(symbol: $symbol) {
            success
            message
        }
    }
`

export const GET_ALERTS = gql`
    query getAlerts($symbol: String) {
        getAlerts(symbol: $symbol) {
            id
            symbol
            title
            conditions {
                order
                indicator
                timeframe
                value
                valueText
            }
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(Stock))
