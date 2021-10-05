import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table, Button } from 'reactstrap'
import toastr from 'toastr'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import SweetAlert from 'react-bootstrap-sweetalert'
import stockImg from '../../assets/images/stock-default-icon.png'

const Stock = () => {
    let { symbol } = useParams()
    symbol = symbol.toUpperCase()

    let chartContainerRef = null
    const [showDeleteAlert, setShowDeleteAlert] = useState({ show: false })

    const { data } = useQuery(GET_STOCK_PROFILE, {
        variables: { symbol },
    })

    const stockProfile = data?.getStockProfile

    const [addStockError, setAddStockError] = useState(null)
    const [addStockResponse, setAddStockResponse] = useState(null)
    const [addStock] = useMutation(ADD_STOCK_MUTATION, {
        onError: setAddStockError,
        onCompleted: setAddStockResponse,
    })

    if (addStockResponse?.addStock?.success) {
        toastr.success('Stock added to the WatchList.')
        setAddStockResponse(null)
    } else if (addStockResponse?.addStock?.success === false || addStockError) {
        toastr.error('Stock addition failed.')
        setAddStockResponse(null)
    }

    const [deleteAlertError, setDeleteAlertError] = useState(null)
    const [deleteAlertResponse, setDeleteAlertResponse] = useState(null)
    const [deleteAlert] = useMutation(DELETE_ALERT_MUTATION, {
        onError: setDeleteAlertError,
        onCompleted: setDeleteAlertResponse,
    })

    if (deleteAlertResponse?.deleteAlert?.success) {
        toastr.success('Alert deleted successfully.')
        setDeleteAlertResponse(null)
    } else if (deleteAlertResponse?.deleteAlert?.success === false || deleteAlertError) {
        toastr.error('Alert deletion failed.')
        setDeleteAlertResponse(null)
    }

    useEffect(() => {
        if (chartContainerRef) {
            new window.TradingView.widget({
                width: chartContainerRef.clientWidth - 8,
                height: chartContainerRef.clientHeight,
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
        }
    }, [chartContainerRef, symbol])

    return (
        <React.Fragment>
            <Helmet>
                <title>{symbol + ' | Profile'}</title>
            </Helmet>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl="12">
                            <Row>
                                <Col xl="3" sm="3">
                                    <Media>
                                        <div className="avatar-sm mr-3">
                                            <span className="avatar-title rounded-circle bg-soft-secondary p-1">
                                                <img
                                                    src={`https://finnhub.io/api/logo?symbol=${symbol}`}
                                                    alt=""
                                                    className="avatar img-thumbnail rounded-circle"
                                                    onError={(e) => {
                                                        if (e.target.src != stockImg) e.target.src = stockImg
                                                    }}
                                                />
                                            </span>
                                        </div>

                                        <Media body>
                                            <h4 className="card-title">{symbol}</h4>
                                            <h5>{stockProfile?.price.toFixed(2)}</h5>
                                        </Media>
                                    </Media>
                                </Col>

                                <Col xl="3" sm="3">
                                    <div className="mt-4 mt-sm-0">
                                        <p className="text-muted mb-2">Last 24 hrs</p>
                                        <h5>
                                            {stockProfile?.changePercent.toFixed(2)} %
                                            {stockProfile?.changePercent > 0 ? (
                                                <i className="mdi mdi-arrow-up text-success"></i>
                                            ) : (
                                                <i className="mdi mdi-arrow-down text-danger"></i>
                                            )}
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

                            <div
                                id="containerId"
                                ref={(element) => {
                                    chartContainerRef = element
                                }}
                                className="m-4 align-items-center"
                            ></div>
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
                                                {stockProfile?.alerts?.map((alert, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="media">
                                                                    <div className="mt-2 mr-3">
                                                                        <div className={alert.status == 'On' ? 'text-danger' : 'text-muted'}>
                                                                            {alert.status == 'On' ? (
                                                                                <i className="mdi mdi-bell-ring font-size-18"></i>
                                                                            ) : (
                                                                                <i className="bx bx-bell font-size-18"></i>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="media-body">
                                                                        <h5>{alert.title}</h5>
                                                                        {alert.conditions.map((condition, index) => (
                                                                            <div key={index}>
                                                                                {toProperCase(condition.timeframe) +
                                                                                    ' ' +
                                                                                    condition.indicator.toUpperCase() +
                                                                                    ' = ' +
                                                                                    condition.valueText}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="mt-2 mr-3">
                                                                    <Link
                                                                        onClick={() => {
                                                                            setShowDeleteAlert({ show: true, alertId: alert.id })
                                                                        }}
                                                                        className="action-icon text-muted"
                                                                        to="#"
                                                                    >
                                                                        <i className="bx bx-trash font-size-18"></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                        {showDeleteAlert.show ? (
                                            <SweetAlert
                                                title="Are you sure you want to delete the alert?"
                                                warning
                                                showCancel
                                                focusCancelBtn
                                                allowEscape
                                                confirmBtnBsStyle="danger"
                                                cancelBtnBsStyle="primary"
                                                onConfirm={() => {
                                                    deleteAlert({ variables: { alertId: showDeleteAlert.alertId } })
                                                    setShowDeleteAlert({ show: false })
                                                }}
                                                onCancel={() => {
                                                    setShowDeleteAlert({ show: false })
                                                }}
                                            ></SweetAlert>
                                        ) : null}
                                        {(!stockProfile?.alerts || stockProfile?.alerts.length == 0) && 'No Alerts configured yet.'}
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
                                                    <td>{formatMarketCap(stockProfile?.marketCap)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Debt</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>Cash</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td>-</td>
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
                                                    <td>{stockProfile?.rsi}</td>
                                                </tr>
                                                <tr>
                                                    <td>MACD</td>
                                                    <td>{stockProfile?.macd}</td>
                                                </tr>
                                                <tr>
                                                    <td>Beta</td>
                                                    <td>{stockProfile?.beta.toFixed(2)}</td>
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

function toProperCase(text) {
    return text[0].toUpperCase() + text.substring(1)
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

export const ADD_STOCK_MUTATION = gql`
    mutation addStock($symbol: String) {
        addStock(symbol: $symbol) {
            success
            message
        }
    }
`

export const GET_STOCK_PROFILE = gql`
    query getStockProfile($symbol: String) {
        getStockProfile(symbol: $symbol) {
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
            redditRank
            alertStatus
            isOnWatchList
            alerts {
                id
                symbol
                title
                status
                conditions {
                    order
                    indicator
                    timeframe
                    value
                    valueText
                }
            }
        }
    }
`

export const DELETE_ALERT_MUTATION = gql`
    mutation deleteAlert($alertId: String) {
        deleteAlert(alertId: $alertId) {
            success
            message
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(Stock))
