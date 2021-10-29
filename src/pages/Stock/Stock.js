import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table } from 'reactstrap'
import toastr from '../../toastrCustom'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import SweetAlert from 'react-bootstrap-sweetalert'
import stockImg from '../../assets/images/stock-default-icon.png'
import AddRemoveStock from './Components/AddRemoveStock'
import { formatAlertCondition } from '../../lib/Utilities'

const Stock = () => {
    let { symbol } = useParams()
    symbol = symbol.toUpperCase()

    let chartContainerRef = null
    const [showDeleteAlert, setShowDeleteAlert] = useState({ show: false })

    const { data } = useQuery(GET_STOCK_PROFILE, {
        variables: { symbol },
    })

    const stockProfile = data?.getStockProfile

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
                                            <div className="mt-md-0 mt-sm-0 d-inline-block">
                                                <h4 className="card-title">{symbol}</h4>
                                                <div>
                                                    <span className="font-size-16">{stockProfile?.price.toFixed(2)} </span>
                                                    <span className={stockProfile?.changePercent > 0 ? 'text-success' : 'text-danger'}>
                                                        &nbsp;(
                                                        {stockProfile?.changePercent.toFixed(2)} %
                                                        {stockProfile?.changePercent > 0 ? (
                                                            <i className="mdi mdi-arrow-up text-success"></i>
                                                        ) : (
                                                            <i className="mdi mdi-arrow-down text-danger"></i>
                                                        )}
                                                        )
                                                    </span>
                                                </div>
                                            </div>
                                        </Media>
                                    </Media>
                                </Col>
                                <Col xl="9" sm="9" className="d-flex justify-content-end">
                                    <div className="mb-2 button-items">
                                        {stockProfile && <AddRemoveStock symbol={symbol} isOnWatchList={stockProfile.isOnWatchList} />}
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
                                className="mb-4 align-items-center"
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
                                                                    <div className="col-form-label mr-2">
                                                                        {alert.status == 'On' && alert.signal == 'Buy' && (
                                                                            <i className="mdi mdi-bell-ring text-success font-size-18"></i>
                                                                        )}
                                                                        {alert.status == 'On' && alert.signal == 'Sell' && (
                                                                            <i className="mdi mdi-bell-ring text-danger font-size-18"></i>
                                                                        )}
                                                                        {alert.status == 'Off' && (
                                                                            <i className="mdi mdi-bell-outline text-muted font-size-18"></i>
                                                                        )}
                                                                    </div>
                                                                    <div className="media-body">
                                                                        <h5>{alert.signal + ' : ' + alert.title}</h5>
                                                                        {alert.conditions.map((condition, index) => (
                                                                            <div key={index}>{formatAlertCondition(condition)}</div>
                                                                        ))}
                                                                    </div>
                                                                    <div className="col-form-label ml-1">
                                                                        <Link
                                                                            className="action-icon text-muted mr-2"
                                                                            to={`/symbol/${alert.symbol}/alert/${alert.id}`}
                                                                        >
                                                                            <i className="bx bx-edit-alt font-size-18"></i>
                                                                        </Link>
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
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                        {showDeleteAlert.show ? (
                                            <SweetAlert
                                                title="Are you sure you want to delete this alert?"
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
                                    <CardTitle className="mb-3">Technicals</CardTitle>

                                    <div className="table-responsive">
                                        <Table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Supports</td>
                                                    <td>
                                                        {stockProfile?.sr &&
                                                            stockProfile?.sr
                                                                .filter((sp) => sp < stockProfile?.price)
                                                                .sort((a, b) => b - a)
                                                                .slice(0, 3)
                                                                .map((sp) => sp.toFixed(0))
                                                                .join(', ')}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Resistances</td>
                                                    <td>
                                                        {stockProfile?.sr &&
                                                            stockProfile?.sr
                                                                .filter((sp) => sp > stockProfile?.price)
                                                                .sort()
                                                                .slice(0, 3)
                                                                .map((sp) => sp.toFixed(0))
                                                                .join(', ')}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RSI</td>
                                                    <td>{stockProfile?.rsi.toFixed(0)}</td>
                                                </tr>
                                                <tr>
                                                    <td>MACD</td>
                                                    <td>{stockProfile?.macd}</td>
                                                </tr>
                                                <tr>
                                                    <td>Beta</td>
                                                    <td>{stockProfile?.beta.toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>TipRanks PriceTarget</td>
                                                    <td>{stockProfile?.tipranksPriceTarget.toFixed(0)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Reddit Rank</td>
                                                    <td>{stockProfile?.redditRank.toFixed(0)}</td>
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

function getOperatorSymbol(operator, isNegative) {
    if (!operator) return '   '
    else if (isNegative) return operator == 'above' ? '  ≯  ' : '  ≮  '
    else return operator == 'above' ? '  >  ' : '  <  '
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
            tipranksPriceTarget
            sr
            alertStatus
            isOnWatchList
            alerts {
                id
                symbol
                signal
                title
                status
                conditions {
                    order
                    timeframe
                    isNegative
                    indicator1
                    operator
                    indicator2
                    diff_percent
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
