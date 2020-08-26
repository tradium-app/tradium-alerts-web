import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Label, Button, Nav, NavItem, NavLink, TabContent, TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon } from "reactstrap";
import classnames from 'classnames';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CryptoWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            isMenu: false,
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
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Crypto" breadcrumbItem="Buy/Sell" />
                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <div className="float-right">
                                            <Dropdown isOpen={this.state.isMenu} toggle={this.toggleMenu}>
                                                <DropdownToggle type="button" tag="button" className="btn btn-light">
                                                    <i className="mdi mdi-wallet mr-1"></i> 
                                                    <span className="d-none d-sm-inline-block ml-1">Wallet Balance <i className="mdi mdi-chevron-down"></i></span>
                                                </DropdownToggle>
                                                <DropdownMenu right className="dropdown-menu-md">
                                                    <div className="dropdown-item-text">
                                                        <div>
                                                            <p className="text-muted mb-2">Available Balance</p>
                                                            <h5 className="mb-0">$ 9148.23</h5>
                                                        </div>
                                                    </div>

                                                    <DropdownItem divider/>

                                                    <DropdownItem href="#">
                                                        BTC : <span className="float-right">1.02356</span>
                                                    </DropdownItem>
                                                    <DropdownItem href="#">
                                                        ETH : <span className="float-right">0.04121</span>
                                                    </DropdownItem>
                                                    <DropdownItem href="#">
                                                        LTC : <span className="float-right">0.00356</span>
                                                    </DropdownItem>

                                                    <DropdownItem divider/>

                                                    <DropdownItem className="text-primary text-center" href="#">
                                                        Learn more
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <h4 className="card-title mb-4">Buy/Sell Crypto</h4>
                                        <div className="crypto-buy-sell-nav">
                                            <Nav tabs className="nav-tabs-custom" role="tablist">
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }} >
                                                        Buy
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }} >
                                                        Sell
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>

                                            <TabContent activeTab={this.state.activeTab} className="crypto-buy-sell-nav-content p-4">
                                                <TabPane tabId="1" id="buy">
                                                    <form>
                                                        <div className="mb-2">
                                                            <Label>Currency :</Label>
        
                                                            <Row>
                                                                <Col xl="2" sm="4">
                                                                    <div className="mb-3">
                                                                        <label className="card-radio-label mb-2">
                                                                                <input type="radio" name="currency" id="buycurrencyoption1" className="card-radio-input" defaultChecked readOnly/>
                    
                                                                                <div className="card-radio">
                                                                                    <div>
                                                                                        <i className="mdi mdi-bitcoin font-size-24 text-warning align-middle mr-2"></i>
                                                                                        <span>Bitcoin</span>
                                                                                    </div>
                                                                                </div>
                                                                        </label>
    
                                                                        <div>
                                                                            <p className="text-muted mb-1">Current price :</p>
                                                                            <h5 className="font-size-16">0.00016 BTC</h5>
                                                                        </div>
                                                                    </div>
                                                                </Col>
            
                                                                <Col xl="2" sm="4">
                                                                    <div className="mb-3">
                                                                        <Label className="card-radio-label mb-2">
                                                                            <Input type="radio" name="currency" id="buycurrencyoption2" className="card-radio-input"/>
                
                                                                            <div className="card-radio">
                                                                                <div>
                                                                                    <i className="mdi mdi-ethereum font-size-24 text-primary align-middle mr-2"></i>
                                                                                    <span>Ethereum</span>
                                                                                </div>
                                                                            </div>
                                                                        </Label>

                                                                        <div>
                                                                            <p className="text-muted mb-1">Current price :</p>
                                                                            <h5 className="font-size-16">0.0073 ETH</h5>
                                                                        </div>
                                                                    </div>
                                                                </Col>
            
                                                                <Col xl="2" sm="4">
                                                                    <div className="mb-3">
                                                                        <Label className="card-radio-label mb-2">
                                                                            <Input type="radio" name="currency" id="buycurrencyoption3" className="card-radio-input"/>
                
                                                                            <div className="card-radio">
                                                                                <div>
                                                                                    <i className="mdi mdi-litecoin font-size-24 text-info align-middle mr-2"></i>
                                                                                    <span>litecoin</span>
                                                                                </div>
                                                                            </div>
                                                                        </Label>

                                                                        <div>
                                                                            <p className="text-muted mb-1">Current price :</p>
                                                                            <h5 className="font-size-16">0.025 LTC</h5>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                
                                                            </Row>
        
                                                        </div>
        
                                                        <div className="mb-2">
                                                            <Label>Payment method :</Label>
        
                                                            <Row>
                                                                <Col xl="2" sm="4">
                                                                    <Label className="card-radio-label mb-3">
                                                                        <Input type="radio" name="pay-method" id="pay-methodoption1" className="card-radio-input"/>
            
                                                                        <div className="card-radio">
                                                                            <i className="fab fa-cc-mastercard font-size-24 text-primary align-middle mr-2"></i>
            
                                                                            <span>Credit / Debit Card</span>
                                                                        </div>
                                                                    </Label>
                                                                </Col>
            
            
                                                                <Col xl="2" sm="4">
                                                                    <Label className="card-radio-label mb-3">
                                                                        <Input type="radio" name="pay-method" id="pay-methodoption3" className="card-radio-input" defaultChecked readOnly/>
            
                                                                        <div className="card-radio">
                                                                            <i className="fab fa-cc-paypal font-size-24 text-primary align-middle mr-2"></i>
            
                                                                            <span>Paypal</span>
                                                                        </div>
                                                                    </Label>
                                                                </Col>
                                                            </Row>
                                                        </div>
        
                                                        <FormGroup>
                                                            <Label>Add value :</Label>
        
                                                            <Row>
                                                                <Col sm="6">
                                                                    <InputGroup className="mb-2 currency-value">
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <span className="input-group-text">Bitcoin</span>
                                                                        </InputGroupAddon>
                                                                        <Input type="text" className="form-control"/>
                                                                    </InputGroup>
                                                                </Col>
        
                                                                <Col sm="6">
                                                                    <InputGroup className="mb-2">
                                                                        <Input type="text" className="form-control text-sm-right"/>
        
                                                                        <InputGroupAddon addonType="append">
                                                                            <span className="input-group-text">USD Amount</span>
                                                                        </InputGroupAddon>
                                                                    </InputGroup>
                                                                </Col>
                                                            </Row>
                                                        </FormGroup>
        
                                                        <FormGroup>
                                                            <Label>Wallet Address :</Label>
                                                            <Input type="text" className="form-control"/>
                                                        </FormGroup>
                                                        <div className="text-center mt-4">
                                                            <Button type="button" color="success">Buy Crypto currency</Button>
                                                        </div>
                                                    </form>
                                                </TabPane>

                                                <TabPane tabId="2">
                                                    <Form>
                                                        <div className="mb-2">
                                                            <Label>Currency :</Label>
        
                                                            <Row>
                                                                <Col xl="2" sm="4">
                                                                    <div className="mb-3">
                                                                        <Label className="card-radio-label mb-2">
                                                                            <Input type="radio" name="currency" id="sellcurrencyoption1" className="card-radio-input" defaultChecked readOnly/>
                
                                                                            <div className="card-radio">
                                                                                <div>
                                                                                    <i className="mdi mdi-bitcoin font-size-24 text-warning align-middle mr-2"></i>
                                                                                    <span>Bitcoin</span>
                                                                                </div>
                                                                            </div>
                                                                        </Label>
                                                                        <div>
                                                                            <p className="text-muted mb-1">Current price :</p>
                                                                            <h5 className="font-size-16">0.00016 BTC</h5>
                                                                        </div>
                                                                    </div>
                                                                </Col>
            
                                                                <Col xl="2" sm="4">
                                                                    <div className="mb-3">
                                                                        <Label className="card-radio-label mb-2">
                                                                            <Input type="radio" name="currency" id="sellcurrencyoption2" className="card-radio-input"/>
                
                                                                            <div className="card-radio">
                                                                                <div>
                                                                                    <i className="mdi mdi-ethereum font-size-24 text-primary align-middle mr-2"></i>
                                                                                    <span>Ethereum</span>
                                                                                </div>
                                                                            </div>
                                                                        </Label>
                                                                        <div>
                                                                            <p className="text-muted mb-1">Current price :</p>
                                                                            <h5 className="font-size-16">0.0073 ETH</h5>
                                                                        </div>
                                                                    </div>
                                                                </Col>
            
                                                                <Col xl="2" sm="4">
                                                                    <div className="mb-3">
                                                                        <Label className="card-radio-label mb-2">
                                                                            <Input type="radio" name="currency" id="sellcurrencyoption3" className="card-radio-input"/>
                
                                                                            <div className="card-radio">
                                                                                <div>
                                                                                    <i className="mdi mdi-litecoin font-size-24 text-info align-middle mr-2"></i>
                                                                                    <span>litecoin</span>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                        </Label>
    
                                                                        <div>
                                                                            <p className="text-muted mb-1">Current price :</p>
                                                                            <h5 className="font-size-16">0.025 LTC</h5>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                                
                                                            </Row>
        
                                                        </div>
        
                                                        <FormGroup>
                                                            <Label>Email :</Label>
                                                            <Input type="email" className="form-control"/>
                                                        </FormGroup>
        
                                                        <FormGroup>
                                                            <Label>Add value :</Label>
        
                                                            <Row>
                                                                <Col sm="6">
                                                                    <InputGroup className="mb-2 currency-value">
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <span className="input-group-text">Crypto value</span>
                                                                        </InputGroupAddon>
                                                                        <Input type="text" className="form-control"/>
                                                                    </InputGroup>
                                                                </Col>
        
                                                                <Col sm="6">
                                                                    <InputGroup className="mb-2">
                                                                        <Input type="text" className="form-control text-sm-right"/>
        
                                                                        <InputGroupAddon addonType="append">
                                                                            <span className="input-group-text">USD Amount</span>
                                                                        </InputGroupAddon>
                                                                    </InputGroup>
                                                                </Col>
                                                            </Row>
                                                        </FormGroup>
        
                                                        <FormGroup>
                                                            <Label>Wallet Address :</Label>
                                                            <Input type="text" className="form-control"/>
                                                        </FormGroup>
                                                        <div className="text-center mt-4">
                                                            <Button type="button" color="danger">Sell Crypto currency</Button>
                                                        </div>
                                                    </Form>
                                                </TabPane>
                                                
                                            </TabContent>
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