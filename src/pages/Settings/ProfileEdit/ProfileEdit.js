import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap'

const ProfileEdit = (props) => {
    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col lg="10">
                    <Card>
                        <CardBody>
                            <CardTitle className="mb-4">General Info</CardTitle>
                            <Form>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="title" md="3" className="col-form-label">
                                        One sentence describing you *
                                    </Label>
                                    <Col md="9">
                                        <Input id="title" type="text" className="form-control" autoComplete="off" />
                                        <span className="font-13 text-muted">e.g "Senior front-end developer with 5+ years of experience"</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="billing-email-address" md="3" className="col-form-label">
                                        Short bio *
                                    </Label>
                                    <Col md="9">
                                        <textarea id="shortbio" className="form-control" rows="2"></textarea>
                                        <span className="font-13 text-muted">e.g "A short greeting to visitors"</span>
                                    </Col>
                                </FormGroup>
                            </Form>

                            <CardTitle className="mb-4">Social</CardTitle>
                            <Form>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="github-link" md="3" className="col-form-label">
                                        Github
                                    </Label>
                                    <Col md="5">
                                        <Input type="text" className="form-control" id="github-link" defaultValue="https://github.com/" />
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="linkedin-link" md="3" className="col-form-label">
                                        LinkedIn
                                    </Label>
                                    <Col md="5">
                                        <Input type="text" className="form-control" id="linkedin-link" defaultValue="https://www.linkedin.com/" />
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="stack-link" md="3" className="col-form-label">
                                        Stack Overflow
                                    </Label>
                                    <Col md="5">
                                        <Input type="text" className="form-control" id="stack-link" defaultValue="https://stackoverflow.com/" />
                                    </Col>
                                </FormGroup>
                            </Form>
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
        </React.Fragment>
    )
}

export default ProfileEdit
