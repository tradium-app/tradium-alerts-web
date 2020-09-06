import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, Form, Label, Input, Pagination, PaginationItem, PaginationLink, Badge } from 'reactstrap'
import StarRatings from 'react-star-ratings'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import avatar3 from '../../assets/images/users/avatar-3.jpg'
import { Link } from 'react-router-dom'

const FindTutors = (props) => {
    const [activeTab, setactiveTab] = useState(false)
    const [selectedMulti3, setselectedMulti3] = useState(null)

    const optionGroup2 = [
        { label: 'Java', value: 'Java' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'C#', value: 'C#' },
        { label: '.Net', value: '.Net' },
        { label: 'Python', value: 'Python' },
    ]

    function handleMulti3(selectedMulti3) {
        setselectedMulti3(selectedMulti3)
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg="3">
                            <Card>
                                <CardBody>
                                    <CardTitle className="font-size-10 mb-2">Filter</CardTitle>

                                    <div className="mt-2 pt-2">
                                        <h5 className="font-size-14 mb-4">Tutor Rate</h5>
                                        <br />
                                        <br />
                                        <Nouislider
                                            range={{ min: 0, max: 100 }}
                                            tooltips={true}
                                            start={[0, 30]}
                                            connect
                                            step={1}
                                            format={{
                                                to: (value) => value,
                                                from: (value) => value,
                                            }}
                                        />
                                        <br />
                                    </div>

                                    <div className="mt-4 pt-3">
                                        <h5 className="font-size-14 mb-3">Number of sessions and jobs</h5>
                                        <div className="custom-control custom-checkbox mt-2">
                                            <Input type="checkbox" value="0" className="custom-control-input" id="productdiscountCheck1" />
                                            <Label className="custom-control-label" htmlFor="productdiscountCheck1">
                                                &gt; 500
                                            </Label>
                                        </div>
                                        <div className="custom-control custom-checkbox mt-2">
                                            <Input type="checkbox" value="1" className="custom-control-input" id="productdiscountCheck2" />
                                            <Label className="custom-control-label" htmlFor="productdiscountCheck2">
                                                200 - 500
                                            </Label>
                                        </div>
                                        <div className="custom-control custom-checkbox mt-2">
                                            <Input type="checkbox" value="2" className="custom-control-input" id="productdiscountCheck3" />
                                            <Label className="custom-control-label" htmlFor="productdiscountCheck3">
                                                100 - 200
                                            </Label>
                                        </div>
                                        <div className="custom-control custom-checkbox mt-2">
                                            <Input
                                                type="checkbox"
                                                value="3"
                                                className="custom-control-input"
                                                id="productdiscountCheck4"
                                                defaultChecked
                                            />
                                            <Label className="custom-control-label" htmlFor="productdiscountCheck4">
                                                &lt; 100
                                            </Label>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-3">
                                        <h5 className="font-size-14 mb-3">Language</h5>
                                        <div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck1" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck1">
                                                    English
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck2" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck2">
                                                    Spanish
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck3" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck3">
                                                    French
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck4" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck4">
                                                    German
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck5" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck5">
                                                    Russian
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck6" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck6">
                                                    Chinese
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck7" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck7">
                                                    Japanese
                                                </Label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <Input type="checkbox" className="custom-control-input" id="productratingCheck8" />
                                                <Label className="custom-control-label" htmlFor="productratingCheck8">
                                                    Portuguese
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="9">
                            <Row className="mb-3">
                                <Col lg="1"></Col>
                                <Col lg="10">
                                    <Form className="app-search mb-0 templating-select select2-container">
                                        <Select
                                            value={selectedMulti3}
                                            options={optionGroup2}
                                            placeholder="Select topics..."
                                            onChange={() => {
                                                handleMulti3()
                                            }}
                                            isMulti={true}
                                            classNamePrefix="select2-selection"
                                            closeMenuOnSelect={true}
                                            defaultMenuIsOpen={false}
                                            components={makeAnimated({ DropdownIndicator, IndicatorSeparator: () => null })}
                                        />
                                    </Form>
                                </Col>
                                <Col lg="1"></Col>
                            </Row>
                            <div className="mb-2">3 results</div>
                            <Row>
                                <Col className="col-12">
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
                                <Col lg="12">
                                    <Pagination className="pagination pagination-rounded justify-content-center">
                                        <PaginationItem disabled>
                                            <PaginationLink previous href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink href="#">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">4</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">5</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink next href="#" />
                                        </PaginationItem>
                                    </Pagination>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

const DropdownIndicator = (props) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <i className="bx bx-search-alt font-size-24" aria-hidden="true" />
            </components.DropdownIndicator>
        )
    )
}

export default FindTutors
