import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, Nav, NavLink, TabContent, TabPane, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import classnames from 'classnames'

//Import Components
import Accordian from './accordian'

const FAQs = (props) => {
    const [activeTab, setactiveTab] = useState('1')

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="vertical-nav">
                            <Row>
                                <Col lg="2" sm="4">
                                    <Nav pills className="flex-column">
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => {
                                                setactiveTab('1')
                                            }}
                                        >
                                            <i className="bx bx-user nav-icon d-block mb-2"></i>
                                            <p className="font-weight-bold mb-0">About Me</p>
                                        </NavLink>

                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => {
                                                setactiveTab('2')
                                            }}
                                        >
                                            <i className="bx bx-bulb nav-icon d-block mb-2"></i>
                                            <p className="font-weight-bold mb-0">Expertise</p>
                                        </NavLink>

                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => {
                                                setactiveTab('3')
                                            }}
                                        >
                                            <i className="bx bx-desktop d-block nav-icon mb-2"></i>
                                            <p className="font-weight-bold mb-0">Employment</p>
                                        </NavLink>

                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => {
                                                setactiveTab('4')
                                            }}
                                        >
                                            <i className=" bx bx-folder d-block nav-icon mb-2"></i>
                                            <p className="font-weight-bold mb-0">Projects</p>
                                        </NavLink>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => {
                                                setactiveTab('5')
                                            }}
                                        >
                                            <i className="bx bx-network-chart d-block nav-icon mb-2"></i>
                                            <p className="font-weight-bold mb-0">Social Presence</p>
                                        </NavLink>
                                        <NavLink
                                            className={classnames({ active: activeTab === '6' })}
                                            onClick={() => {
                                                setactiveTab('6')
                                            }}
                                        >
                                            <i className="bx bx-cog d-block nav-icon mb-2"></i>
                                            <p className="font-weight-bold mb-0">Settings</p>
                                        </NavLink>
                                    </Nav>
                                </Col>
                                <Col lg="10" sm="8">
                                    <Card>
                                        <CardBody>
                                            <TabContent activeTab={activeTab}>
                                                <TabPane tabId="1" className="ml-4">
                                                    <h4 className="card-title mb-4">About Me</h4>

                                                    <Row>
                                                        <Col lg={12}>
                                                            <Row>
                                                                <Col md="6">
                                                                    <div className="p-20">
                                                                        <Form action="#">
                                                                            <FormGroup>
                                                                                <Label>One sentence describing you *</Label>
                                                                                <Input id="title" type="text" className="form-control" />
                                                                                <span className="font-13 text-muted">
                                                                                    e.g "Senior front-end developer with 5+ years of experience"
                                                                                </span>
                                                                            </FormGroup>
                                                                        </Form>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="p-20">
                                                                        <Form action="#">
                                                                            <FormGroup>
                                                                                <Label>Short bio *</Label>
                                                                                <textarea id="shortbio" className="form-control" rows="2"></textarea>
                                                                                <span className="font-13 text-muted">
                                                                                    e.g "A short greeting to clients A summary of your strengths and
                                                                                    skills Any other information you want clients to know"
                                                                                </span>
                                                                            </FormGroup>
                                                                        </Form>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Button color="primary" type="submit">
                                                                Update
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </TabPane>

                                                <TabPane tabId="2">
                                                    <h4 className="card-title mb-4">Expertise</h4>

                                                    <Accordian
                                                        question1="Why do we use it ?"
                                                        answer1="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                                                        question2="What is Lorem Ipsum ?"
                                                        answer2="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                                                        question3="Where can I get some ?"
                                                        answer3="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                                                        question4="Where does it come from ?"
                                                        answer4="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                                                    />
                                                </TabPane>

                                                <TabPane tabId="3">
                                                    <h4 className="card-title mb-4">Roadmap</h4>

                                                    <Accordian
                                                        question1="Why do we use it ?"
                                                        answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                                                        question2="What is Lorem Ipsum ?"
                                                        answer2="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                                                        question3="Where can I get some ?"
                                                        answer3="To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth."
                                                        question4="Where does it come from ?"
                                                        answer4="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                                                    />
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FAQs
