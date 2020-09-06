import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, Media, FormGroup, CardTitle, Form, Button } from 'reactstrap'

import { MDBDataTable } from 'mdbreact'
import './datatables.scss'

class Wallet extends Component {
    render() {
        const data = {
            columns: [
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'desc',
                    width: 80,
                },
                {
                    label: 'Description',
                    field: 'type',
                    sort: 'asc',
                    width: 280,
                },
                {
                    label: 'Amount',
                    field: 'amountinUSD',
                    sort: 'asc',
                    width: 60,
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                    width: 60,
                },
            ],
            rows: [
                {
                    date: '03 Mar, 2020',
                    type: 'Buy',
                    currency: 'Bitcoin',
                    amount: '1.00952 BTC',
                    amountinUSD: '$ 9067.62',
                    status: 'completed',
                },
                {
                    date: '04 Mar, 2020',
                    type: 'Sell',
                    currency: 'Ethereum',
                    amount: '0.00413 ETH',
                    amountinUSD: '$ 2123.01',
                    status: 'pending',
                },
                {
                    date: '04 Mar, 2020',
                    type: 'Buy',
                    currency: 'Bitcoin',
                    amount: '1.00952 BTC',
                    amountinUSD: '$ 9067.62',
                    status: 'completed',
                },
                {
                    date: '03 Mar, 2020',
                    type: 'Buy',
                    currency: 'Bitcoin',
                    amount: '1.00952 BTC',
                    amountinUSD: '$ 9067.62',
                    status: 'rejected',
                },
            ],
        }
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col xl="4">
                                <Card>
                                    <CardBody>
                                        <Media>
                                            <div className="mr-4">
                                                <i className="mdi mdi-account-circle text-primary h1"></i>
                                            </div>
                                            <Media body>
                                                <div className="text-muted">
                                                    <h5>Suraj Shrestha</h5>
                                                    <p className="mb-1">Indianapolis, Indiana</p>
                                                </div>
                                            </Media>
                                        </Media>
                                    </CardBody>
                                </Card>
                                <Card className="mini-stats-wid">
                                    <CardBody>
                                        <Media>
                                            <Media body>
                                                <p className="text-muted font-weight-medium">Current Balance</p>
                                                <h4 className="mb-0">$178</h4>
                                            </Media>
                                            <div className="mini-stat-icon avatar-sm rounded-circle align-self-center">
                                                <span className="avatar-title bg-success">
                                                    <i className={'bx bx bx-dollar-circle font-size-24'}></i>
                                                </span>
                                            </div>
                                        </Media>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xl="8">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">How many Webtutor Credits would you like to purchase?</CardTitle>
                                        <Form>
                                            <FormGroup className="mb-4" row>
                                                <div className="ml-2 mr-2">
                                                    <label className="card-radio-label mb-2">
                                                        <input
                                                            type="radio"
                                                            name="currency"
                                                            id="buycurrencyoption1"
                                                            className="card-radio-input"
                                                            readOnly
                                                        />

                                                        <div className="card-radio">
                                                            <div>
                                                                <i className="bx bx-dollar-circle font-size-24 text-warning align-middle mr-2"></i>
                                                                <span>50</span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="ml-2 mr-2">
                                                    <label className="card-radio-label mb-2">
                                                        <input
                                                            type="radio"
                                                            name="currency"
                                                            id="buycurrencyoption1"
                                                            className="card-radio-input"
                                                            readOnly
                                                        />

                                                        <div className="card-radio">
                                                            <div>
                                                                <i className="bx bx-dollar-circle font-size-24 text-danger align-middle mr-2"></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="ml-2 mr-2">
                                                    <label className="card-radio-label mb-2">
                                                        <input
                                                            type="radio"
                                                            name="currency"
                                                            id="buycurrencyoption1"
                                                            className="card-radio-input"
                                                            defaultChecked
                                                            readOnly
                                                        />

                                                        <div className="card-radio">
                                                            <div>
                                                                <i className="bx bx-dollar-circle font-size-24 text-success align-middle mr-2"></i>
                                                                <span>200</span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="ml-2 mr-2">
                                                    <label className="card-radio-label mb-2">
                                                        <input
                                                            type="radio"
                                                            name="currency"
                                                            id="buycurrencyoption1"
                                                            className="card-radio-input"
                                                            readOnly
                                                        />

                                                        <div className="card-radio">
                                                            <div>
                                                                <i className="bx bx-dollar-circle font-size-24 text-success align-middle mr-2"></i>
                                                                <span>Other</span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </FormGroup>
                                        </Form>
                                        <Row>
                                            <Col></Col>
                                            <Col></Col>
                                            <Col>
                                                <div className="border-bottom text-right pb-2 mb-2">
                                                    <div>Processing Fee : $2.03</div>
                                                </div>
                                                <div className="text-right pb-2 mb-2">
                                                    <div>Total Fee : $202.03</div>
                                                </div>
                                                <div className="text-right mt-4 pb-2 mb-2">
                                                    <Button type="submit" className="font-size-16" color="primary">
                                                        Pay using Paypal
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>

                                <Row>
                                    <Col lg="12">
                                        <Card>
                                            <CardBody>
                                                <h4 className="card-title mb-4">Recent Transactions</h4>

                                                <div className="mt-4">
                                                    <MDBDataTable
                                                        data={data}
                                                        responsive
                                                        bordered={false}
                                                        searching={false}
                                                        sortable={false}
                                                        noBottomColumns
                                                        displayEntries={false}
                                                    />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Wallet
