import React, { useState } from 'react'

import { Container, Row, Col, Card, CardBody, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

import TutorCard from './TutorCard'

import img7 from '../../assets/images/product/img-7.png'
import img8 from '../../assets/images/product/img-8.png'

import avatar1 from '../../assets/images/users/avatar-1.jpg'
import avatar2 from '../../assets/images/users/avatar-2.jpg'
import avatar3 from '../../assets/images/users/avatar-3.jpg'
import { Link } from 'react-router-dom'

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
                <br />
                <br />
                <br />
                <div className="text-center mt-8 mb-16">
                    <div>
                        <h1>
                            Find a developer for <br /> live tutoring
                        </h1>
                        <div>
                            <Link to="/find-tutors" color="primary" className="btn btn-primary waves-effect waves-light mt-2 mr-1">
                                <i className="bx bx-search mr-2"></i> Search Now
                            </Link>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <Container fluid>
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
