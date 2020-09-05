import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardTitle, Media } from 'reactstrap'

import avatar2 from '../../assets/images/users/avatar-2.jpg'
import avatar3 from '../../assets/images/users/avatar-3.jpg'

const ProfileMenu = (props) => {
    const experiences = [
        { id: 1, iconClass: 'bx-server', link: '#', designation: 'Back end Developer', timeDuration: '2016 - 19' },
        { id: 2, iconClass: 'bx-code', link: '#', designation: 'Front end Developer', timeDuration: '2013 - 16' },
        { id: 3, iconClass: 'bx-edit', link: '#', designation: 'UI /UX Designer', timeDuration: '2011 - 13' },
    ]

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl="4">
                            <Card className="overflow-hidden">
                                <CardBody className="pt-0">
                                    <Row>
                                        <Col className="text-center">
                                            <div className="avatar-xl mt-2 mb-2 d-inline-block">
                                                <img src={avatar2} alt="" className="img-thumbnail rounded-circle" />
                                            </div>
                                            <h5 className="font-size-20 text-truncate">Suraj Shrestha</h5>
                                            <p className="text-muted mb-0 text-truncate">Indianapolis, Indiana</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="text-center pt-4">
                                                <Row>
                                                    <Col xs="6">
                                                        <h5 className="font-size-15">125</h5>
                                                        <p className="text-muted mb-0">Sessions</p>
                                                    </Col>
                                                    <Col xs="6">
                                                        <h5 className="font-size-15">$20</h5>
                                                        <p className="text-muted mb-0">Per Hour</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-4 mb-4">
                                                    <Col className="align-self-center text-center">
                                                        <img
                                                            className="avatar-xs img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                                            alt="Github"
                                                            height="50"
                                                        />
                                                        <img
                                                            className="avatar-xs img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                                            alt="LinkedIn"
                                                            height="50"
                                                        />
                                                        <img
                                                            className="avatar-xs img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                            src="https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-icon.svg?v=f13ebeedfa9e"
                                                            alt="Stack Overflow"
                                                            height="50"
                                                        />
                                                    </Col>
                                                </Row>
                                                <div className="mt-4">
                                                    <Link to="/book-class" className="btn btn-primary waves-effect waves-light btn-sm">
                                                        Book a session <i className="mdi mdi-arrow-right ml-1"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-5">Experience</CardTitle>
                                    <div className="">
                                        <ul className="verti-timeline list-unstyled">
                                            {experiences.map((experience, i) => (
                                                <li className={experience.id === 1 ? 'event-list active' : 'event-list'} key={'_exp_' + i}>
                                                    <div className="event-timeline-dot">
                                                        <i
                                                            className={
                                                                experience.id === 1
                                                                    ? 'bx bx-right-arrow-circle bx-fade-right'
                                                                    : 'bx bx-right-arrow-circle'
                                                            }
                                                        ></i>
                                                    </div>
                                                    <Media>
                                                        <div className="mr-3">
                                                            <i className={'bx ' + experience.iconClass + ' h4 text-primary'}></i>
                                                        </div>
                                                        <Media body>
                                                            <div>
                                                                <h5 className="font-size-15">
                                                                    <Link to={experience.link} className="text-dark">
                                                                        {experience.designation}
                                                                    </Link>
                                                                </h5>
                                                                <span className="text-primary">{experience.timeDuration}</span>
                                                            </div>
                                                        </Media>
                                                    </Media>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="8">
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">Senior Software Engineer</CardTitle>
                                    <p className="font-size-16 text-muted">
                                        Accomplished developer and software engineer with 11+ years of experience in developing and designing
                                        manufacturing, warehouse, sales, logistics, and financial tools, applications, and websites. Focused team
                                        player and multi-tasker, demonstrating proven technical expertise encompassing JavaScript, SQL, ASP.NET, Java,
                                        as well as other programming languages, and software applications.
                                    </p>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="media mb-4">
                                        <img className="d-flex align-self-start rounded mr-4" src={avatar3} alt="Skote" height="50" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">JavaScript</h5>
                                            <p>
                                                I'm a full-stack developer with 15+ years of experience in web application development and code
                                                mentoring. Are you stuck? Let me help!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="media mb-4">
                                        <img className="d-flex align-self-start rounded mr-4" src={avatar3} alt="Skote" height="50" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Python</h5>
                                            <p>
                                                I'm a full-stack developer with 15+ years of experience in web application development and code
                                                mentoring. Are you stuck? Let me help!
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ProfileMenu
