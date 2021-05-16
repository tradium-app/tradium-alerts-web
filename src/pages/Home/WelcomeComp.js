import React from 'react'

import { Row, Col, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import avatar1 from '../../assets/images/users/avatar-1.jpg'
import profileImg from '../../assets/images/profile-img.png'

const WelcomeComp = (props) => {
    return (
        <React.Fragment>
            <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                    <Row>
                        <Col xs="7">
                            <div className="text-primary p-3">
                                <h5 className="text-primary">Welcome Back !</h5>
                            </div>
                        </Col>
                        <Col xs="5" className="align-self-end">
                            <img src={profileImg} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </div>
                <CardBody className="pt-0">
                    <Row>
                        <Col sm="3">
                            <div className="avatar-md profile-user-wid mb-4">
                                <Link to="/profile">
                                    <img src={avatar1} alt="" className="img-thumbnail rounded-circle" />
                                </Link>
                            </div>
                        </Col>

                        <Col sm="9">
                            <div className="pt-4">
                                <h5 className="font-size-15 text-truncate">
                                    <Link to="/profile"> Suraj Shrestha</Link>
                                </h5>
                                <p className="text-muted mb-2 text-truncate">UI/UX Designer</p>
                                <p className="text-muted mb-2 text-truncate">Classes: 10</p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}
export default WelcomeComp
