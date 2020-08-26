import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, NavItem, NavLink, Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import ReactApexChart from 'react-apexcharts';

import { MDBDataTable } from "mdbreact";
import "./datatables.scss";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CryptoWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series:[{type:"area",name:"BTC",data:[87,57,74,99,75,38,62,47,82,56,45,47]},{type:"area",name:"ETH",data:[28,41,52,42,13,18,29,18,36,51,55,35]},{type:"line",name:"LTC",data:[45,52,38,24,33,65,45,75,54,18,28,10]}],
            options : {chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2,dashArray:[0,0,3]},fill:{type:"solid",opacity:[.15,.05,1]},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},colors:["#f1b44c","#3452e1","#50a5f1"]},
            isMenu: false,
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleMenu() {
        this.setState(prevState => ({
            isMenu: !prevState.isMenu
        }));
    }

    render() {
    const data = {
      columns: [
        {
          label: "ID No",
          field: "id",
          sort: "asc",
          width: 92
        },
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: 134
        },
        {
          label: "Type",
          field: "type",
          sort: "asc",
          width: 83
        },
        {
          label: "Currency",
          field: "currency",
          sort: "asc",
          width: 131
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
          width: 125
        },
        {
          label: "Amount in USD",
          field: "amountinUSD",
          sort: "asc",
          width: 194
        }
      ],
      rows: [
        {
          id: <Link to="#" className="text-body font-weight-bold">#SK3215</Link>,
          date: "03 Mar, 2020",
          type: "Buy",
          currency: "Bitcoin",
          amount: "1.00952 BTC",
          amountinUSD: "$ 9067.62"
        },
        {
            id: <Link to="#" className="text-body font-weight-bold">#SK3216</Link>,
            date: "04 Mar, 2020",
            type: "Sell",
            currency: "Ethereum",
            amount: "0.00413 ETH",
            amountinUSD: "$ 2123.01"
        },
        {
            id: <Link to="#" className="text-body font-weight-bold">#SK3217</Link>,
            date: "04 Mar, 2020",
            type: "Buy",
            currency: "Bitcoin",
            amount: "1.00952 BTC",
            amountinUSD: "$ 9067.62"
          },
          {
            id: <Link to="#" className="text-body font-weight-bold">#SK3218</Link>,
            date: "03 Mar, 2020",
            type: "Buy",
            currency: "Bitcoin",
            amount: "1.00952 BTC",
            amountinUSD: "$ 9067.62"
          },
          {
            id: <Link to="#" className="text-body font-weight-bold">#SK3219</Link>,
            date: "03 Mar, 2020",
            type: "Buy",
            currency: "Bitcoin",
            amount: "1.00952 BTC",
            amountinUSD: "$ 9067.62"
          },
          {
              id: <Link to="#" className="text-body font-weight-bold">#SK3220</Link>,
              date: "03 Mar, 2020",
              type: "Buy",
              currency: "Bitcoin",
              amount: "1.00952 BTC",
              amountinUSD: "$ 9067.62"
          }, 
          {
            id: <Link to="#" className="text-body font-weight-bold">#SK3221</Link>,
            date: "03 Mar, 2020",
            type: "Buy",
            currency: "Bitcoin",
            amount: "1.00952 BTC",
            amountinUSD: "$ 9067.62"
          },
          {
              id: <Link to="#" className="text-body font-weight-bold">#SK3222</Link>,
              date: "03 Mar, 2020",
              type: "Buy",
              currency: "Bitcoin",
              amount: "1.00952 BTC",
              amountinUSD: "$ 9067.62"
          },        
          {
            id: <Link to="#" className="text-body font-weight-bold">#SK3223</Link>,
            date: "03 Mar, 2020",
            type: "Buy",
            currency: "Bitcoin",
            amount: "1.00952 BTC",
            amountinUSD: "$ 9067.62"
          },
          {
              id: <Link to="#" className="text-body font-weight-bold">#SK3224</Link>,
              date: "03 Mar, 2020",
              type: "Buy",
              currency: "Bitcoin",
              amount: "1.00952 BTC",
              amountinUSD: "$ 9067.62"
          },
          {
            id: <Link to="#" className="text-body font-weight-bold">#SK3225</Link>,
            date: "03 Mar, 2020",
            type: "Buy",
            currency: "Bitcoin",
            amount: "1.00952 BTC",
            amountinUSD: "$ 9067.62"
          },
          {
              id: <Link to="#" className="text-body font-weight-bold">#SK3226</Link>,
              date: "03 Mar, 2020",
              type: "Buy",
              currency: "Bitcoin",
              amount: "1.00952 BTC",
              amountinUSD: "$ 9067.62"
          }
      ]
    };
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Crypto" breadcrumbItem="Wallets" />
        
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
                                                    <h5>Henry Wells</h5>
                                                    <p className="mb-1">henrywells@abc.com</p>
                                                    <p className="mb-0">Id no: #SK0234</p>
                                                </div>
                                                
                                            </Media>

                                            <Dropdown isOpen={this.state.isMenu} toggle={this.toggleMenu} className="ml-2">
                                                <DropdownToggle tag="i" className="text-muted">
                                                    <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem href="#">Action</DropdownItem>
                                                    <DropdownItem href="#">Another action</DropdownItem>
                                                    <DropdownItem href="#">Something else</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </Media>
                                    </CardBody>
                                    <CardBody className="border-top">
                                        
                                        <Row>
                                            <Col sm="6">
                                                <div>
                                                    <p className="text-muted mb-2">Available Balance</p>
                                                    <h5>$ 9148.23</h5>
                                                </div>
                                            </Col>
                                            <Col sm="6">
                                                <div className="text-sm-right mt-4 mt-sm-0">
                                                    <p className="text-muted mb-2">Since last month</p>
                                                    <h5>+ $ 248.35   <span className="badge badge-success ml-1 align-bottom">+ 1.3 %</span></h5>
                                                    
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>

                                    <CardBody className="border-top">
                                        <p className="text-muted mb-4">In this month</p>
                                        <div className="text-center">
                                            <Row>
                                                <Col sm="4">
                                                    <div>
                                                        <div className="font-size-24 text-primary mb-2">
                                                            <i className="bx bx-send"></i>
                                                        </div>
                                    
                                                        <p className="text-muted mb-2">Send</p>
                                                        <h5>$ 654.42</h5>
    
                                                        <div className="mt-3">
                                                            <Link to="#" className="btn btn-primary btn-sm w-md">Send</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="4">
                                                    <div className="mt-4 mt-sm-0">
                                                        <div className="font-size-24 text-primary mb-2">
                                                            <i className="bx bx-import"></i>
                                                        </div>
                                    
                                                        <p className="text-muted mb-2">receive</p>
                                                        <h5>$ 1054.32</h5>
    
                                                        <div className="mt-3">
                                                            <Link to="#" className="btn btn-primary btn-sm w-md">Receive</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="4">
                                                    <div className="mt-4 mt-sm-0">
                                                        <div className="font-size-24 text-primary mb-2">
                                                            <i className="bx bx-wallet"></i>
                                                        </div>
                                    
                                                        <p className="text-muted mb-2">Withdraw</p>
                                                        <h5>$ 824.34</h5>
    
                                                        <div className="mt-3">
                                                            <Link to="#" className="btn btn-primary btn-sm w-md">Withdraw</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                            
                            <Col xl="8">
                                <Row>
                                    <Col sm="4">
                                        <Card className="mini-stats-wid">
                                            <CardBody>
                                                <Media>
                                                    <div className="mr-3 align-self-center">
                                                        <i className="mdi mdi-bitcoin h2 text-warning mb-0"></i>
                                                    </div>
                                                    <Media body>
                                                        <p className="text-muted mb-2">Bitcoin Wallet</p>
                                                        <h5 className="mb-0">1.02356 BTC <span className="font-size-14 text-muted">= $ 9148.00</span></h5>
                                                    </Media>
                                                </Media>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                        <Card className="mini-stats-wid">
                                            <CardBody>
                                                <Media>
                                                    <div className="mr-3 align-self-center">
                                                        <i className="mdi mdi-ethereum h2 text-primary mb-0"></i>
                                                    </div>
                                                    <Media body>
                                                        <p className="text-muted mb-2">Ethereum Wallet</p>
                                                        <h5 className="mb-0">0.04121 ETH <span className="font-size-14 text-muted">= $ 8235.00</span></h5>
                                                    </Media>
                                                </Media>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="4">
                                        <Card className="mini-stats-wid">
                                            <CardBody>
                                                <Media>
                                                    <div className="mr-3 align-self-center">
                                                        <i className="mdi mdi-litecoin h2 text-info mb-0"></i>
                                                    </div>
                                                    <Media body>
                                                        <p className="text-muted mb-2">litecoin Wallet</p>
                                                        <h5 className="mb-0">0.00356 BTC <span className="font-size-14 text-muted">= $ 4721.00</span></h5>
                                                    </Media>
                                                </Media>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-3">Overview</h4>

                                        <div>
                                            <div id="overview-chart" className="apex-charts" dir="ltr">
                                                <ReactApexChart series={this.state.series} options={this.state.options} type="line" height={240} />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">Activities</h4>
                                        
                                        <ul className="nav nav-tabs nav-tabs-custom">
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }} >
                                                    All
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }} >
                                                    Buy
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggleTab('3'); }} >
                                                    Sell
                                                </NavLink>
                                            </NavItem>
                                        </ul>

                                        <div className="mt-4">
                                            <MDBDataTable responsive bordered data={data} />
                                        </div>
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

export default CryptoWallet;