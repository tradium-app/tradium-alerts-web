import React, { useState } from 'react';

import { Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Label , Input, Form, FormGroup, Progress,Container } from "reactstrap";

import classnames from 'classnames';
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const FormWizard = (props) => {

      const [activeTab, setactiveTab] = useState(1);
      const [activeTabProgress, setactiveTabProgress] = useState(1);
      const [progressValue, setprogressValue] = useState(25);

  function toggleTab(tab) {
        if (activeTab !== tab) {
            if(tab >= 1 && tab <=4 ){
              setactiveTab(tab);
            }
        }
  }

 function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
        if(tab >= 1 && tab <=4 ){

          setactiveTabProgress(tab);
           
          if(tab === 1) {  setprogressValue(25) }
          if(tab === 2) {  setprogressValue(50) }
          if(tab === 3) {  setprogressValue(75) }
          if(tab === 4) {  setprogressValue(100) }
        }
    }
}


    return (
        <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>
                    <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">Basic pills Wizard</h4>

                                        <div id="basic-pills-wizard" className="twitter-bs-wizard">
                                            <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTab === 1 })} onClick={() => { setactiveTab(1); }} >
                                                                        <span className="step-number mr-2">01</span>
                                                                        Seller Details
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTab === 2 })} onClick={() => { setactiveTab(2); }} >
                                                                        <span className="step-number mr-2">02</span>
                                                                        <span>Company Document</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTab === 3 })} onClick={() => { setactiveTab(3); }} >
                                                                        <span className="step-number mr-2">03</span>
                                                                        Bank Details
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTab === 4 })} onClick={() => { setactiveTab(4); }} >
                                                                    <span className="step-number mr-2">04</span>
                                                                    Confirm Detail
                                                                    </NavLink>
                                                                </NavItem>
                                            </ul>
                                            <TabContent activeTab={activeTab} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-firstname-input1">First name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-firstname-input1"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-lastname-input2">Last name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-lastname-input2"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-phoneno-input3">Phone</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-phoneno-input3"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-email-input4">Email</Label>
                                                                    <Input type="email" className="form-control" id="basicpill-email-input4"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <Label for="basicpill-address-input1">Address</Label>
                                                                    <textarea id="basicpill-address-input1" className="form-control" rows="2"></textarea>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                  <div>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-pancard-input5">PAN Card</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-pancard-input5"/>
                                                                </FormGroup>
                                                            </Col>

                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-vatno-input6">VAT/TIN No.</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-vatno-input6"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-cstno-input7">CST No.</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-cstno-input7"/>
                                                                </FormGroup>
                                                            </Col>

                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-servicetax-input8">Service Tax No.</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-servicetax-input8"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-companyuin-input9">Company UIN</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-companyuin-input9"/>
                                                                </FormGroup>
                                                            </Col>

                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-declaration-input10">Declaration</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-Declaration-input10"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                  </div>
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <div>
                                                      <Form>
                                                          <Row>
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-namecard-input11">Name on Card</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-namecard-input11"/>
                                                                  </FormGroup>
                                                              </Col>
  
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label>Credit Card Type</Label>
                                                                      <select className="custom-select">
                                                                            <option defaultValue>Select Card Type</option>
                                                                            <option value="AE">American Express</option>
                                                                            <option value="VI">Visa</option>
                                                                            <option value="MC">MasterCard</option>
                                                                            <option value="DI">Discover</option>
                                                                      </select>
                                                                  </FormGroup>
                                                              </Col>
                                                          </Row>
                                                          <Row>
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-cardno-input12">Credit Card Number</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-cardno-input12"/>
                                                                  </FormGroup>
                                                              </Col>
  
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-card-verification-input">Card Verification Number</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-card-verification-input"/>
                                                                  </FormGroup>
                                                              </Col>
                                                          </Row>
                                                          <Row>
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-expiration-input13">Expiration Date</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-expiration-input13"/>
                                                                  </FormGroup>
                                                              </Col>
  
                                                          </Row>
                                                      </Form>
                                                    </div>
                                                  </TabPane>
                                                <TabPane tabId={4}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>
                                                
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                            <li className={activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { toggleTab(activeTab - 1);} }>Previous</Link></li>
                                            <li className={activeTab === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { toggleTab(activeTab + 1);} }>Next</Link></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">Wizard with progressbar</h4>

                                        <div id="progrss-wizard" className="twitter-bs-wizard">
                                            <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                                            <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 1 })} onClick={() => { toggleTabProgress(1); }} >
                                                                        <span className="step-number mr-2">01</span>
                                                                        Seller Details
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 2 })} onClick={() => { toggleTabProgress(2); }} >
                                                                        <span className="step-number mr-2">02</span>.
                                                                        <span>Company Document</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 3 })} onClick={() => { toggleTabProgress(3); }} >
                                                                        <span className="step-number mr-2">03</span>
                                                                        Bank Details
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: activeTabProgress === 4 })} onClick={() => { toggleTabProgress(4); }} >
                                                                    <span className="step-number mr-2">04</span>
                                                                    Confirm Detail
                                                                    </NavLink>
                                                                </NavItem>
                                            </ul>

                                            <div id="bar" className="mt-4">
                                                <Progress color="success" striped animated value={progressValue} />
                                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"></div>
                                            </div>
                                            <TabContent activeTab={activeTabProgress} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-firstname-input14">First name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-firstname-input14"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-lastname-input15">Last name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-lastname-input15"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-phoneno-input16">Phone</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-phoneno-input16"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-email-input17">Email</Label>
                                                                    <Input type="email" className="form-control" id="basicpill-email-input17"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <FormGroup>
                                                                    <Label for="basicpill-address-input2">Address</Label>
                                                                    <textarea id="basicpill-address-input2" className="form-control" rows="2"></textarea>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                  <div>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-pancard-input18">PAN Card</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-pancard-input18"/>
                                                                </FormGroup>
                                                            </Col>

                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-vatno-input19">VAT/TIN No.</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-vatno-input19"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-cstno-input20">CST No.</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-cstno-input20"/>
                                                                </FormGroup>
                                                            </Col>

                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-servicetax-input21">Service Tax No.</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-servicetax-input21"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-companyuin-input22">Company UIN</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-companyuin-input22"/>
                                                                </FormGroup>
                                                            </Col>

                                                            <Col lg="6">
                                                                <FormGroup>
                                                                    <Label for="basicpill-declaration-input23">Declaration</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-Declaration-input23"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                  </div>
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <div>
                                                      <Form>
                                                          <Row>
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-namecard-input24">Name on Card</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-namecard-input24"/>
                                                                  </FormGroup>
                                                              </Col>
  
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label>Credit Card Type</Label>
                                                                      <select className="custom-select">
                                                                            <option defaultValue>Select Card Type</option>
                                                                            <option value="AE">American Express</option>
                                                                            <option value="VI">Visa</option>
                                                                            <option value="MC">MasterCard</option>
                                                                            <option value="DI">Discover</option>
                                                                      </select>
                                                                  </FormGroup>
                                                              </Col>
                                                          </Row>
                                                          <Row>
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-cardno-input25">Credit Card Number</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-cardno-input25"/>
                                                                  </FormGroup>
                                                              </Col>
  
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-card-verification-input26">Card Verification Number</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-card-verification-input26"/>
                                                                  </FormGroup>
                                                              </Col>
                                                          </Row>
                                                          <Row>
                                                              <Col lg="6">
                                                                  <FormGroup>
                                                                      <Label for="basicpill-expiration-input27">Expiration Date</Label>
                                                                      <Input type="text" className="form-control" id="basicpill-expiration-input27"/>
                                                                  </FormGroup>
                                                              </Col>
  
                                                          </Row>
                                                      </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                <li className={activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress - 1);} }>Previous</Link></li>
                                                <li className={activeTabProgress === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress + 1);} }>Next</Link></li>
                                            </ul>
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

export default FormWizard;
