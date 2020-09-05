import React, { useState } from 'react'
import { Row, Col, Card, CardBody, Nav, NavLink, TabContent, TabPane, CardTitle, Form, FormGroup, Label, Input, NavItem, Table } from 'reactstrap'
import classnames from 'classnames'
import SkillCard from './SkillCard'

import img1 from '../../../assets/images/companies/img-1.png'
import img2 from '../../../assets/images/companies/img-2.png'
import img3 from '../../../assets/images/companies/img-3.png'
import img4 from '../../../assets/images/companies/img-4.png'
import img5 from '../../../assets/images/companies/img-5.png'
import EmploymentCard from '../EmploymentCard'

const skills = [
    {
        id: 1,
        img: img1,
        name: 'JavaScript',
        experience: '10+ years',
        related: ['React', 'Redux'],
        color: 'primary',
    },
    {
        id: 2,
        img: img2,
        name: 'Java',
        experience: '2+ years',
        related: ['Spring', 'Jongo'],
    },
    {
        id: 3,
        img: img3,
        name: '.Net',
        experience: '4+ years',
        related: ['Entity Framework'],
    },
    {
        id: 4,
        img: img4,
        name: 'SQL Server',
        experience: '5+ years',
    },
    {
        id: 5,
        img: img5,
        name: 'Mongo',
        experience: '2+ years',
    },
]

const employments = [
    {
        id: 1,
        img: img1,
        name: 'Senior Software Engineer',
        company: 'Salesforce',
        location: 'Indianapolis',
        description: 'Working on Marketing Software Projects. Developed Email Tracking Solutions.',
        from: '2015 July',
        to: '2019 June',
        technologies: ['React', 'Redux'],
    },
    {
        id: 2,
        img: img2,
        name: 'Senior Software Engineer',
        company: 'Salesforce',
        location: 'Indianapolis',
        description: 'Software Engineering Stuff',
        from: '2015 July',
        to: '2019 June',
        technologies: ['React', 'Redux'],
    },
]

const ProfileEdit = (props) => {
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
                                        <CardTitle>Skills</CardTitle>
                                        <Row>
                                            <SkillCard skills={skills} />
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3" id="v-pills-confir" role="tabpanel">
                                        <CardTitle className="mb-4">Employment</CardTitle>
                                        <EmploymentCard employments={employments} />
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

export default ProfileEdit
