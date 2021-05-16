import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Media, Table, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

import modalimage1 from '../../assets/images/product/img-7.png'
import modalimage2 from '../../assets/images/product/img-4.png'

// Pages Components
import WelcomeComp from './WelcomeComp'
import ActivityComp from './ActivityComp'

import StarRatings from 'react-star-ratings'
import avatar3 from '../../assets/images/users/avatar-3.jpg'

const Dashboard = (props) => {
    const [modal, setmodal] = useState(false)

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl="4">
                            <WelcomeComp />

                            <Card className="mini-stats-wid">
                                <CardBody>
                                    <Media>
                                        <Media body>
                                            <p className="text-muted font-weight-medium">Balance</p>
                                            <h4 className="mb-0">$200</h4>
                                        </Media>
                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                            <Link to="/wallet">
                                                <span className="avatar-title">
                                                    <i className="bx bx bx-dollar-circle font-size-24"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </Media>
                                </CardBody>
                            </Card>
                            <ActivityComp />
                        </Col>
                        <Col xl="8">
                            <Row>
                                <Col>
                                    <div className="mb-2">My Teachers</div>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xl="10">
                                                    <div className="media mb-2">
                                                        <Link to="/profile">
                                                            <img
                                                                className="d-flex align-self-start rounded mr-4"
                                                                src={avatar3}
                                                                alt="Skote"
                                                                height="100"
                                                            />
                                                        </Link>
                                                        <div className="media-body">
                                                            <Link to="/profile">
                                                                <h5 className="mt-1 font-16 d-inline-block mr-2">Khagendra Shah</h5>
                                                            </Link>
                                                            <div className="d-inline-block">
                                                                <StarRatings
                                                                    rating={4}
                                                                    starRatedColor="#F1B44C"
                                                                    starEmptyColor="#2D363F"
                                                                    numberOfStars={5}
                                                                    name="rating"
                                                                    starDimension="12px"
                                                                    starSpacing="3px"
                                                                />
                                                            </div>
                                                            <p className="text-muted">Senior Software Engineer</p>
                                                            <p>
                                                                I'm a full-stack developer with 15+ years of experience in web application development
                                                                and code mentoring. Are you stuck? Let me help!
                                                            </p>
                                                            <div>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Java <div className="font-size-10 d-inline-block">(8+ yrs)</div>
                                                                </Badge>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Redux <div className="font-size-10 d-inline-block">(2+ yrs)</div>
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl="2" className="d-flex align-items-center justify-content-end">
                                                    <div className="m-2">
                                                        <Link to="/book-class" type="button" className="btn btn-primary waves-effect waves-light">
                                                            <i className="bx bx-calendar-plus font-size-20 align-middle"></i>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="clearfix border-bottom mt-4 mb-4"></div>
                                            <Row>
                                                <Col xl="10">
                                                    <div className="media mb-2">
                                                        <Link to="/profile">
                                                            <img
                                                                className="d-flex align-self-start rounded mr-4"
                                                                src={avatar3}
                                                                alt="Skote"
                                                                height="100"
                                                            />
                                                        </Link>
                                                        <div className="media-body">
                                                            <Link to="/profile">
                                                                <h5 className="mt-1 font-16 d-inline-block mr-2">Khagendra Shah</h5>
                                                            </Link>
                                                            <div className="d-inline-block">
                                                                <StarRatings
                                                                    rating={4}
                                                                    starRatedColor="#F1B44C"
                                                                    starEmptyColor="#2D363F"
                                                                    numberOfStars={5}
                                                                    name="rating"
                                                                    starDimension="12px"
                                                                    starSpacing="3px"
                                                                />
                                                            </div>
                                                            <p className="text-muted">Senior Software Engineer</p>
                                                            <p>
                                                                I'm a full-stack developer with 15+ years of experience in web application development
                                                                and code mentoring. Are you stuck? Let me help!
                                                            </p>
                                                            <div>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    React <div className="font-size-10 d-inline-block">(8+ yrs)</div>
                                                                </Badge>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Redux <div className="font-size-10 d-inline-block">(2+ yrs)</div>
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl="2" className="d-flex align-items-center justify-content-end">
                                                    <div className="m-2">
                                                        <Link to="/book-class" type="button" className="btn btn-primary waves-effect waves-light">
                                                            <i className="bx bx-calendar-plus font-size-20 align-middle"></i>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="mb-2">Recommended Teachers</div>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xl="10">
                                                    <div className="media mb-2">
                                                        <Link to="/profile">
                                                            <img
                                                                className="d-flex align-self-start rounded mr-4"
                                                                src={avatar3}
                                                                alt="Skote"
                                                                height="100"
                                                            />
                                                        </Link>
                                                        <div className="media-body">
                                                            <Link to="/profile">
                                                                <h5 className="mt-1 font-16 d-inline-block mr-2">Khagendra Shah</h5>
                                                            </Link>
                                                            <div className="d-inline-block">
                                                                <StarRatings
                                                                    rating={4}
                                                                    starRatedColor="#F1B44C"
                                                                    starEmptyColor="#2D363F"
                                                                    numberOfStars={5}
                                                                    name="rating"
                                                                    starDimension="12px"
                                                                    starSpacing="3px"
                                                                />
                                                            </div>
                                                            <p className="text-muted">Senior Software Engineer</p>
                                                            <p>
                                                                I'm a full-stack developer with 15+ years of experience in web application development
                                                                and code mentoring. Are you stuck? Let me help!
                                                            </p>
                                                            <div>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Java <div className="font-size-10 d-inline-block">(8+ yrs)</div>
                                                                </Badge>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Redux <div className="font-size-10 d-inline-block">(2+ yrs)</div>
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl="2" className="d-flex align-items-center justify-content-end">
                                                    <div className="m-2">
                                                        <Link to="/book-class" type="button" className="btn btn-primary waves-effect waves-light">
                                                            <i className="bx bx-calendar-plus font-size-20 align-middle"></i>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="clearfix border-bottom mt-4 mb-4"></div>
                                            <Row>
                                                <Col xl="10">
                                                    <div className="media mb-2">
                                                        <Link to="/profile">
                                                            <img
                                                                className="d-flex align-self-start rounded mr-4"
                                                                src={avatar3}
                                                                alt="Skote"
                                                                height="100"
                                                            />
                                                        </Link>
                                                        <div className="media-body">
                                                            <Link to="/profile">
                                                                <h5 className="mt-1 font-16 d-inline-block mr-2">Khagendra Shah</h5>
                                                            </Link>
                                                            <div className="d-inline-block">
                                                                <StarRatings
                                                                    rating={4}
                                                                    starRatedColor="#F1B44C"
                                                                    starEmptyColor="#2D363F"
                                                                    numberOfStars={5}
                                                                    name="rating"
                                                                    starDimension="12px"
                                                                    starSpacing="3px"
                                                                />
                                                            </div>
                                                            <p className="text-muted">Senior Software Engineer</p>
                                                            <p>
                                                                I'm a full-stack developer with 15+ years of experience in web application development
                                                                and code mentoring. Are you stuck? Let me help!
                                                            </p>
                                                            <div>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Java <div className="font-size-10 d-inline-block">(8+ yrs)</div>
                                                                </Badge>
                                                                <Badge pill className="font-size-14 p-1 m-1">
                                                                    Redux <div className="font-size-10 d-inline-block">(2+ yrs)</div>
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl="2" className="d-flex align-items-center justify-content-end">
                                                    <div className="m-2">
                                                        <Link to="/book-class" type="button" className="btn btn-primary waves-effect waves-light">
                                                            <i className="bx bx-calendar-plus font-size-20 align-middle"></i>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal
                isOpen={modal}
                role="dialog"
                autoFocus={true}
                centered={true}
                className="exampleModal"
                tabindex="-1"
                toggle={() => {
                    setmodal(!modal)
                }}
            >
                <div className="modal-content">
                    <ModalHeader
                        toggle={() => {
                            setmodal(!modal)
                        }}
                    >
                        Order Details
                    </ModalHeader>
                    <ModalBody>
                        <p className="mb-2">
                            Product id: <span className="text-primary">#SK2540</span>
                        </p>
                        <p className="mb-4">
                            Billing Name: <span className="text-primary">Neal Matthews</span>
                        </p>

                        <div className="table-responsive">
                            <Table className="table table-centered table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src={modalimage1} alt="" className="avatar-sm" />
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                <p className="text-muted mb-0">$ 225 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 255</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src={modalimage2} alt="" className="avatar-sm" />
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                <p className="text-muted mb-0">$ 145 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 145</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Sub Total:</h6>
                                        </td>
                                        <td>$ 400</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Shipping:</h6>
                                        </td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 className="m-0 text-right">Total:</h6>
                                        </td>
                                        <td>$ 400</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="button"
                            color="secondary"
                            onClick={() => {
                                setmodal(!modal)
                            }}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default Dashboard
