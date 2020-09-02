import React, { useState } from 'react'
import { Row, Col, Card, CardBody, Nav, NavLink, TabContent, TabPane, CardTitle, Form, FormGroup, Label, Input, NavItem, Table } from 'reactstrap'
import classnames from 'classnames'

const FAQs = (props) => {
    const [activeTab, setactiveTab] = useState('1')

    return (
        <React.Fragment>
            <div className="checkout-tabs">
                <Row>
                    <Col lg="2">
                        <Nav className="flex-column" pills>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => {
                                        setactiveTab('1')
                                    }}
                                >
                                    <i className="bx bx-user d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-4">General Info</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => {
                                        setactiveTab('2')
                                    }}
                                >
                                    <i className="bx bx-bulb d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-4">Skills</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => {
                                        setactiveTab('3')
                                    }}
                                >
                                    <i className="bx bx-desktop d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-4">Employment</p>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => {
                                        setactiveTab('4')
                                    }}
                                >
                                    <i className="bx bx-folder d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-0">Projects</p>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: activeTab === '5' })}
                                    onClick={() => {
                                        setactiveTab('5')
                                    }}
                                >
                                    <i className="bx bx-network-chart d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-0">Social Presence</p>
                                </NavLink>
                                <NavLink
                                    className={classnames({ active: activeTab === '6' })}
                                    onClick={() => {
                                        setactiveTab('6')
                                    }}
                                >
                                    <i className="bx bx-cog d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-0">Settings</p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col lg="10">
                        <Card>
                            <CardBody>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <div>
                                            <CardTitle className="mb-4">General Info</CardTitle>
                                            <Form>
                                                <FormGroup className="mb-4" row>
                                                    <Label htmlFor="billing-name" md="3" className="col-form-label">
                                                        One sentence describing you *
                                                    </Label>
                                                    <Col md="9">
                                                        <Input type="text" className="form-control" id="billing-name" />
                                                        <span className="font-13 text-muted">
                                                            e.g "Senior front-end developer with 5+ years of experience"
                                                        </span>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup className="mb-4" row>
                                                    <Label htmlFor="billing-email-address" md="3" className="col-form-label">
                                                        Short bio *
                                                    </Label>
                                                    <Col md="9">
                                                        <textarea id="shortbio" className="form-control" rows="2"></textarea>
                                                        <span className="font-13 text-muted">
                                                            e.g "A short greeting to clients A summary of your strengths and skills Any other
                                                            information you want clients to know"
                                                        </span>
                                                    </Col>
                                                </FormGroup>
                                            </Form>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                                        <div>
                                            <CardTitle>Payment information</CardTitle>
                                            <div>
                                                <div className="custom-control custom-radio custom-control-inline mr-4">
                                                    <Input
                                                        type="radio"
                                                        value="1"
                                                        id="customRadioInline1"
                                                        name="customRadioInline1"
                                                        className="custom-control-input"
                                                    />
                                                    <Label className="custom-control-label" htmlFor="customRadioInline1">
                                                        <i className="fab fa-cc-mastercard mr-1 font-size-20 align-top"></i> Credit / Debit Card
                                                    </Label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline mr-4">
                                                    <Input
                                                        type="radio"
                                                        value="2"
                                                        id="customRadioInline2"
                                                        name="customRadioInline1"
                                                        className="custom-control-input"
                                                    />
                                                    <Label className="custom-control-label" htmlFor="customRadioInline2">
                                                        <i className="fab fa-cc-paypal mr-1 font-size-20 align-top"></i> Paypal
                                                    </Label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline mr-4">
                                                    <Input
                                                        type="radio"
                                                        value="3"
                                                        id="customRadioInline3"
                                                        defaultChecked
                                                        name="customRadioInline1"
                                                        className="custom-control-input"
                                                    />
                                                    <Label className="custom-control-label" htmlFor="customRadioInline3">
                                                        <i className="far fa-money-bill-alt mr-1 font-size-20 align-top"></i> Cash on Delivery
                                                    </Label>
                                                </div>
                                            </div>

                                            <h5 className="mt-5 mb-3 font-size-15">For card Payment</h5>
                                            <div className="p-4 border">
                                                <Form>
                                                    <FormGroup className="mb-0">
                                                        <Label htmlFor="cardnumberInput">Card Number</Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="cardnumberInput"
                                                            placeholder="0000 0000 0000 0000"
                                                        />
                                                    </FormGroup>
                                                    <Row>
                                                        <Col lg="6">
                                                            <FormGroup className="mt-4 mb-0">
                                                                <Label htmlFor="cardnameInput">Name on card</Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cardnameInput"
                                                                    placeholder="Name on Card"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col lg="3">
                                                            <FormGroup className=" mt-4 mb-0">
                                                                <Label htmlFor="expirydateInput">Expiry date</Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="expirydateInput"
                                                                    placeholder="MM/YY"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col lg="3">
                                                            <FormGroup className="mt-4 mb-0">
                                                                <Label htmlFor="cvvcodeInput">CVV Code</Label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="cvvcodeInput"
                                                                    placeholder="Enter CVV Code"
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3" id="v-pills-confir" role="tabpanel">
                                        <Card className="shadow-none border mb-0">
                                            <CardBody>
                                                <CardTitle className="mb-4">Order Summary</CardTitle>

                                                <div className="table-responsive">
                                                    <Table className="table-centered mb-0 table-nowrap">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th scope="col">Product</th>
                                                                <th scope="col">Product Desc</th>
                                                                <th scope="col">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colSpan="2">
                                                                    <h6 className="m-0 text-right">Sub Total:</h6>
                                                                </td>
                                                                <td>$ 675</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="3">
                                                                    <div className="bg-soft-primary p-3 rounded">
                                                                        <h5 className="font-size-14 text-primary mb-0">
                                                                            <i className="fas fa-shipping-fast mr-2"></i> Shipping{' '}
                                                                            <span className="float-right">Free</span>
                                                                        </h5>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="2">
                                                                    <h6 className="m-0 text-right">Total:</h6>
                                                                </td>
                                                                <td>$ 675</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                        <Row className="my-4">
                            <Col>
                                <div className="text-sm-right">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">
                                        <i className="bx bx-save font-size-16 align-middle mr-2"></i> Update
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default FAQs
