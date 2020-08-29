import React, { useState } from 'react'

import { Container, Row, Col, Card, CardBody, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

import TutorCard from './TutorCard'

import img7 from '../../assets/images/product/img-7.png'
import img8 from '../../assets/images/product/img-8.png'

import avatar1 from '../../assets/images/users/avatar-1.jpg'
import avatar2 from '../../assets/images/users/avatar-2.jpg'
import avatar3 from '../../assets/images/users/avatar-3.jpg'

const Home = (props) => {
    const [activeTab, setactiveTab] = useState('1')

    const projects = [
        {
            id: 1,
            img: avatar2,
            name: 'Suraj Shrestha',
            description: 'JavaScript & Java Developer',
            status: 'Completed',
            color: 'primary',
            date: '15 Oct, 19',
            comments: 214,
        },
        {
            id: 2,
            img: avatar1,
            name: 'Ashiish',
            description: 'To achieve it would be necessary',
            status: 'Pending',
            color: 'warning',
            date: '22 Oct, 19',
            comments: 183,
            child: [{ id: 1, img: avatar3, name: 'Kenneth Johnson' }],
        },
        {
            id: 3,
            img: avatar3,
            name: 'Khagendra Shah',
            description: 'For science, music, sport, etc',
            status: 'Delay',
            color: 'danger',
            date: '13 Oct, 19',
            comments: 175,
            child: [
                { id: 1, img: avatar2, name: 'Kenneth Johnson' },
                { id: 2, img: 'Null', name: 'Andy Miller', color: 'primary' },
                { id: 3, img: avatar2, name: 'Daniel Candles' },
            ],
        },
    ]

    function imageShow(img, id) {
        var expandImg = document.getElementById('expandedImg' + id)
        expandImg.src = img
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xl="6">
                                            <div className="mt-4 mt-xl-3">
                                                <h2 className="mt-1 mb-3">Find a developer for Live Tutoring</h2>
                                                <p className="text-muted mb-4">Getting help has never been easier</p>
                                            </div>
                                        </Col>

                                        <Col xl="6">
                                            <div className="product-detai-imgs">
                                                <Row>
                                                    <Col md="2" xs="3">
                                                        <Nav className="flex-column" pills>
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: activeTab === '1' })}
                                                                    onClick={() => {
                                                                        setactiveTab('1')
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={img7}
                                                                        alt=""
                                                                        onClick={() => {
                                                                            imageShow(img7, 1)
                                                                        }}
                                                                        className="img-fluid mx-auto d-block rounded"
                                                                    />
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: activeTab === '2' })}
                                                                    onClick={() => {
                                                                        setactiveTab('2')
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={img8}
                                                                        alt=""
                                                                        onClick={() => {
                                                                            imageShow(img8, 2)
                                                                        }}
                                                                        className="img-fluid mx-auto d-block rounded"
                                                                    />
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: activeTab === '3' })}
                                                                    onClick={() => {
                                                                        setactiveTab('3')
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={img7}
                                                                        alt=""
                                                                        onClick={() => {
                                                                            imageShow(img7, 3)
                                                                        }}
                                                                        className="img-fluid mx-auto d-block rounded"
                                                                    />
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: activeTab === '4' })}
                                                                    onClick={() => {
                                                                        setactiveTab('4')
                                                                    }}
                                                                >
                                                                    <img
                                                                        src={img8}
                                                                        alt=""
                                                                        onClick={() => {
                                                                            imageShow(img8, 4)
                                                                        }}
                                                                        className="img-fluid mx-auto d-block rounded"
                                                                    />
                                                                </NavLink>
                                                            </NavItem>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={{ size: 7, offset: 1 }} xs="9">
                                                        <TabContent activeTab={activeTab}>
                                                            <TabPane tabId="1">
                                                                <div>
                                                                    <img src={img7} alt="" id="expandedImg1" className="img-fluid mx-auto d-block" />
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="2">
                                                                <div>
                                                                    <img src={img8} id="expandedImg2" alt="" className="img-fluid mx-auto d-block" />
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="3">
                                                                <div>
                                                                    <img src={img7} id="expandedImg3" alt="" className="img-fluid mx-auto d-block" />
                                                                </div>
                                                            </TabPane>
                                                            <TabPane tabId="4">
                                                                <div>
                                                                    <img src={img8} id="expandedImg4" alt="" className="img-fluid mx-auto d-block" />
                                                                </div>
                                                            </TabPane>
                                                        </TabContent>
                                                        <div className="text-center">
                                                            <Button type="button" color="primary" className="btn waves-effect waves-light mt-2 mr-1">
                                                                <i className="bx bx-search mr-2"></i> Search Now
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col lg={12}>
                            <div>
                                <h5 className="mb-3">Top Tutors</h5>

                                <Row>
                                    <TutorCard projects={projects} />
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Home
