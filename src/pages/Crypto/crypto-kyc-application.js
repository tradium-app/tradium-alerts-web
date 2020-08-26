import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, TabContent, TabPane, NavItem, NavLink, Label, Button, Input, Form, FormGroup } from "reactstrap";
import classnames from 'classnames';
import { Link } from "react-router-dom";

//Dropzone
import Dropzone from "react-dropzone";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import images
import verificationImg from "../../assets/images/verification-img.png";

class CryptoWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeTab: 1,
            selectedFiles: [],
        };
        this.togglemodal.bind(this);
        this.toggleTab.bind(this);
        this.handleAcceptedFiles.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }    
    
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if(tab >= 1 && tab <=3 ){
                this.setState({
                    activeTab: tab
                });
            }
        }
    }

    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
    
        this.setState({ selectedFiles: files });
    };
    
      /**
       * Formats the size
       */
    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Crypto" breadcrumbItem="KYC Application" />
        
                        <Row className="justify-content-center mt-lg-5">
                            <Col xl="5" sm="8">
                                <Card>
                                    <CardBody>
                                        <div className="text-center">
                                            <Row className="justify-content-center">
                                                <Col lg="10">
                                                    <h4 className="mt-4 font-weight-semibold">KYC Verification</h4>
                                                    <p className="text-muted mt-3">Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis perferendis asperiores repellat.</p>

                                                    <div className="mt-4">
                                                        {/* button triggers modal */}
                                                        <Button type="button" color="primary"  onClick={this.togglemodal}>
                                                            Click here for Verification
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Row className="justify-content-center mt-5 mb-2">
                                                <Col sm="6" xs="8">
                                                    <div>
                                                        <img src={verificationImg} alt="" className="img-fluid"/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        {/* modal */}
                                        <Modal isOpen={this.state.modal} role="dialog" size="lg" autoFocus={true} centered={true} id="verificationModal" tabIndex="-1" toggle={this.togglemodal}>
                                                <div className="modal-content">
                                                <ModalHeader toggle={this.togglemodal}>
                                                    Verify your Account
                                                </ModalHeader>
                                                    <ModalBody>
                                                        <div id="kyc-verify-wizard" className="twitter-bs-wizard">
                                                            <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTab === 1 })} onClick={() => { this.toggleTab(1); }} >
                                                                        <span className="step-number mr-2">01</span>
                                                                        Personal Info
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTab === 2 })} onClick={() => { this.toggleTab(2); }} >
                                                                        <span className="step-number mr-2">02</span>
                                                                        Confirm email
                                                                    </NavLink>
                                                                </NavItem>
                                                                <NavItem>
                                                                    <NavLink className={classnames({ active: this.state.activeTab === 3 })} onClick={() => { this.toggleTab(3); }} >
                                                                        <span className="step-number mr-2">03</span>
                                                                        Document Verification
                                                                    </NavLink>
                                                                </NavItem>
                                                            </ul>
                                                            <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                                                                <TabPane tabId={1} id="personal-info">
                                                                    <Form>
                                                                        <Row>
                                                                            <Col lg="6">
                                                                                <FormGroup>
                                                                                    <Label for="kycfirstname-input">First name</Label>
                                                                                    <Input type="text" className="form-control" id="kycfirstname-input" placeholder="Enter First name"/>
                                                                                </FormGroup>
                                                                            </Col>
                                                                            <Col lg="6">
                                                                                <FormGroup>
                                                                                    <Label for="kyclastname-input">Last name</Label>
                                                                                    <Input type="text" className="form-control" id="kyclastname-input" placeholder="Enter Last name"/>
                                                                                </FormGroup>
                                                                            </Col>
                                                                        </Row>

                                                                        <Row>
                                                                            <Col lg="6">
                                                                                <FormGroup>
                                                                                    <Label for="kycphoneno-input">Phone</Label>
                                                                                    <Input type="text" className="form-control" id="kycphoneno-input" placeholder="Enter Phone number"/>
                                                                                </FormGroup>
                                                                            </Col>
                                                                            <Col lg="6">
                                                                                <FormGroup>
                                                                                    <Label for="kycbirthdate-input">Date of birth</Label>
                                                                                    <Input type="text" className="form-control" id="kycbirthdate-input" placeholder="Enter Date of birth"/>
                                                                                </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col lg="12">
                                                                                <FormGroup>
                                                                                    <Label for="kycselectcity-input">City</Label>
                                                                                    <select className="custom-select" id="kycselectcity-input">
                                                                                        <option value="1" defaultValue>San Francisco</option>
                                                                                        <option value="2">Los Angeles</option>
                                                                                        <option value="3">San Diego</option>
                                                                                    </select>
                                                                                </FormGroup>
                                                                            </Col>
                                                                        </Row>
                                                                    </Form>
                                                                </TabPane>
                                                                <TabPane tabId={2} id="confirm-email">
                                                                  <div>
                                                                    <Form>
                                                                        <Row>
                                                                            <Col lg="12">
                                                                                <FormGroup>
                                                                                    <Label for="kycemail-input">Email</Label>
                                                                                    <Input type="email" className="form-control" id="kycemail-input" placeholder="Enter Email Address"/>
                                                                                </FormGroup>

                                                                                <FormGroup>
                                                                                    <Label for="kycconfirmcode-input">Confirm code</Label>
                                                                                    <Input type="email" className="form-control" id="kycconfirmcode-input" placeholder="Enter Confirm code"/>
                                                                                </FormGroup>

                                                                                <div className="mb-3">
                                                                                    Didn't recieve code ?
                                                                                    <Button type="button" color="link">Resend Code</Button>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </Form>
                                                                  </div>
                                                                </TabPane>
                                                                <TabPane tabId={3} id="doc-verification">
                                                                    <h5 className="font-size-14 mb-3">Upload document file for a verification</h5>
                                                                    <div className="kyc-doc-verification mb-3">
                                                                    <Dropzone
                                                                        onDrop={acceptedFiles =>
                                                                        this.handleAcceptedFiles(acceptedFiles)
                                                                        }
                                                                    >
                                                                        {({ getRootProps, getInputProps }) => (
                                                                        <div className="dropzone">
                                                                            <div
                                                                            className="dz-message needsclick"
                                                                            {...getRootProps()}
                                                                            >
                                                                            <input {...getInputProps()} />
                                                                            <div className="mb-3">
                                                                                    <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                                                            </div>
                                                                            <h3>Drop files here or click to upload.</h3>
                                                                            </div>
                                                                        </div>
                                                                        )}
                                                                    </Dropzone>
                                                                    <div
                                                                        className="dropzone-previews mt-3"
                                                                        id="file-previews"
                                                                    >
                                                                        {this.state.selectedFiles.map((f, i) => {
                                                                        return (
                                                                            <Card
                                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                            key={i + "-file"}
                                                                            >
                                                                            <div className="p-2">
                                                                                <Row className="align-items-center">
                                                                                <Col className="col-auto">
                                                                                    <img
                                                                                    data-dz-thumbnail=""
                                                                                    height="80"
                                                                                    className="avatar-sm rounded bg-light"
                                                                                    alt={f.name}
                                                                                    src={f.preview}
                                                                                    />
                                                                                </Col>
                                                                                <Col>
                                                                                    <Link
                                                                                    to="#"
                                                                                    className="text-muted font-weight-bold"
                                                                                    >
                                                                                    {f.name}
                                                                                    </Link>
                                                                                    <p className="mb-0">
                                                                                    <strong>{f.formattedSize}</strong>
                                                                                    </p>
                                                                                </Col>
                                                                                </Row>
                                                                            </div>
                                                                            </Card>
                                                                        );
                                                                        })}
                                                                    </div>
                                                                    </div>
                                                                </TabPane>
                                                                
                                                            </TabContent>
                                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                                <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1);} }>Previous</Link></li>
                                                                <li className={this.state.activeTab === 3 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1);} }>Next</Link></li>
                                                            </ul>
                                                        </div>
                                                    </ModalBody>
                                                </div>
                                        </Modal>
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