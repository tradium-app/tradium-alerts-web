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
                                <CardTitle className="mb-4">Create a Poll</CardTitle>
                                <Form className="justify-content-center">
                                    <FormGroup className="mb-4 justify-content-center" row>
                                        <Col md="8">
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                id="poll-question"
                                                placeholder="Start with a Question"
                                                rows="3"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="mb-4 justify-content-center" row>
                                        <Col md="6" xs="6">
                                            <Input type="text" className="form-control" id="option1" placeholder="Option 1" />
                                        </Col>
                                        <Col md="2" xs="2">
                                            <button type="button" className="inner btn btn-primary">
                                                {'+'}
                                            </button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                        <Row className="my-4">
                            <Col>
                                <div className="text-sm-right">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">
                                        Post the Question <i className="bx bx-save font-size-24 align-middle ml-2"></i>
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
