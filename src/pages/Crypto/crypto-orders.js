import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Label, Form, FormGroup, Button } from "reactstrap";
import classnames from 'classnames';

//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MDBDataTable } from "mdbreact";
import "./datatables.scss";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CryptoOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.handleChange.bind(this);
    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
    };

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    
    render() {
        const data = {
            columns: [
              {
                label: "Date",
                field: "date",
                sort: "asc",
                width: 136
              },
              {
                label: "Type",
                field: "type",
                sort: "asc",
                width: 84
              },
              {
                label: "Coin",
                field: "coin",
                sort: "asc",
                width: 104
              },
              {
                label: "Value",
                field: "value",
                sort: "asc",
                width: 126
              },
              {
                label: "Value in USD",
                field: "valueinUSD",
                sort: "asc",
                width: 168
              },
              {
                label: "Status",
                field: "status",
                sort: "asc",
                width: 109
              }
            ],
            rows: [
              {
                date: "03 Mar, 2020",
                type: "Buy",
                coin: "Bitcoin",
                value: "1.00952 BTC",
                valueinUSD: "$ 9067.62",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "04 Mar, 2020",
                type: "Sell",
                coin: "Ethereum",
                value: "0.00413 ETH	",
                valueinUSD: "$ 2123.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "04 Mar, 2020",
                type: "Buy",
                coin: "Bitcoin",
                value: "0.00321 BTC	",
                valueinUSD: "$ 1802.62",
                status : <span className="badge badge-warning font-size-10">Pending</span>
              },
              {
                date: "05 Mar, 2020",
                type: "Buy",
                coin: "Litecoin",
                value: "0.00224 LTC",
                valueinUSD: "$ 1773.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "06 Mar, 2020",
                type: "Buy",
                coin: "Ethereum",
                value: "Ethereum",
                valueinUSD: "$ 9423.73",
                status : <span className="badge badge-danger font-size-10">Failed</span>
              },
              {
                date: "07 Mar, 2020",
                type: "Buy",
                coin: "Bitcoin",
                value: "1.00952 BTC",
                valueinUSD: "$ 9067.62",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "07 Mar, 2020",
                type: "Sell",
                coin: "Ethereum",
                value: "0.00413 ETH	",
                valueinUSD: "$ 2123.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "08 Mar, 2020",
                type: "Buy",
                coin: "Bitcoin",
                value: "0.00321 BTC	",
                valueinUSD: "$ 1802.62",
                status : <span className="badge badge-warning font-size-10">Pending</span>
              },
              {
                date: "09 Mar, 2020",
                type: "Buy",
                coin: "Litecoin",
                value: "0.00224 LTC",
                valueinUSD: "$ 1773.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "10 Mar, 2020",
                type: "Buy",
                coin: "Ethereum",
                value: "Ethereum",
                valueinUSD: "$ 9423.73",
                status : <span className="badge badge-warning font-size-10">Pending</span>
              },
              {
                date: "10 Mar, 2020",
                type: "Buy",
                coin: "Bitcoin",
                value: "1.00952 BTC",
                valueinUSD: "$ 9067.62",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "11 Mar, 2020",
                type: "Sell",
                coin: "Ethereum",
                value: "0.00413 ETH	",
                valueinUSD: "$ 2123.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "12 Mar, 2020",
                type: "Buy",
                coin: "Bitcoin",
                value: "0.00321 BTC	",
                valueinUSD: "$ 1802.62",
                status : <span className="badge badge-warning font-size-10">Pending</span>
              },
              {
                date: "13 Mar, 2020",
                type: "Buy",
                coin: "Litecoin",
                value: "0.00224 LTC",
                valueinUSD: "$ 1773.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
              {
                date: "14 Mar, 2020",
                type: "Buy",
                coin: "Ethereum",
                value: "Ethereum",
                valueinUSD: "$ 9423.73",
                status : <span className="badge badge-danger font-size-10">Failed</span>
              },
              {
                date: "15 Mar, 2020",
                type: "Buy",
                coin: "Litecoin",
                value: "0.00224 LTC",
                valueinUSD: "$ 1773.01",
                status : <span className="badge badge-success font-size-10">Completed</span>
              },
            ]
        };
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Crypto" breadcrumbItem="Orders" />
        
                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-3">Orders</h4>

                                        
                                        <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }} >
                                                    All Orders
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }} >
                                                    Processing
                                                </NavLink>
                                            </NavItem>
                                        </ul>
        
                                        
                                        <TabContent activeTab={this.state.activeTab} className="p-3">
                                            <TabPane tabId="1" id="all-order">
                                                <Form>
                                                    <Row>
                                                        
                                                        <div className="col-xl col-sm-6">
                                                            <FormGroup className="mt-3 mb-0">
                                                                <Label>Date :</Label>
                                                                <DatePicker
                                                                    selected={this.state.startDate}
                                                                    onChange={this.handleChange}
                                                                    className="form-control"
                                                                    placeholderText="Select date" 
                                                                />
                                                            </FormGroup>
                                                        </div>
        
                                                        <div className="col-xl col-sm-6">
                                                            <FormGroup className="mt-3 mb-0">
                                                                <Label>Coin</Label>
                                                                <select className="form-control select2-search-disable">
                                                                    <option value="BTC" defaultValue>Bitcoin</option>
                                                                    <option value="ETH">Ethereum</option>
                                                                    <option value="LTC">litecoin</option>
                                                                </select>
                                                            </FormGroup>
                                                        </div>
        
                                                        <div className="col-xl col-sm-6">
                                                            <FormGroup className="mt-3 mb-0">
                                                                <Label>Type</Label>
                                                                <select className="form-control select2-search-disable">
                                                                    <option value="BU" defaultValue>Buy</option>
                                                                    <option value="SE">Sell</option>
                                                                </select>
                                                            </FormGroup>
                                                        </div>

                                                        <div className="col-xl col-sm-6">
                                                            <FormGroup className="mt-3 mb-0">
                                                                <Label>Status</Label>
                                                                <select className="form-control select2-search-disable">
                                                                    <option value="CO" defaultValue>Completed</option>
                                                                    <option value="PE">Pending</option>
                                                                </select>
                                                            </FormGroup>
                                                        </div>
        
                                                        <div className="col-xl col-sm-6 align-self-end">
                                                            <div className="mt-3">
                                                                <Button type="button" color="primary" className="w-md">Add Order</Button>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </Form>

                                                
                                                <MDBDataTable responsive bordered data={data} className="mt-5" />
                                                
                                            </TabPane>
                                            <TabPane tabId="2" id="processing">
                                                <div>
                                                    <MDBDataTable responsive bordered data={data} className="mt-4" />
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default CryptoOrders;