import React, { useState } from 'react'
import { Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap'

const ProfileEdit = (props) => {
    return (
        <React.Fragment>
            <div className="checkout-tabs">
                <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">General Info</CardTitle>
                                <Form>
                                    <FormGroup className="mb-4" row>
                                        <Label htmlFor="billing-name" md="3" className="col-form-label">
                                            What do you want to learn*
                                        </Label>
                                        <Col md="9">
                                            <Input type="text" className="form-control" id="billing-name" />
                                            <span className="font-13 text-muted">e.g "I want to know more about JavaScript React Framework"</span>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mb-4" row>
                                        <Label htmlFor="billing-email-address" md="3" className="col-form-label">
                                            More Description
                                        </Label>
                                        <Col md="9">
                                            <textarea id="shortbio" className="form-control" rows="2"></textarea>
                                            <span className="font-13 text-muted">
                                                e.g "A short greeting to clients A summary of your strengths and skills Any other information you want
                                                clients to know"
                                            </span>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                        <Row className="my-4">
                            <Col>
                                <div className="text-sm-right">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">
                                        Save <i className="bx bx-save font-size-24 align-middle ml-2"></i>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="1"></Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ProfileEdit
