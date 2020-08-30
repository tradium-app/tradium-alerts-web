import React from 'react'
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

//Import Countdown
import Countdown from 'react-countdown'

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <span>You are good to go!</span>
    } else {
        // Render a countdown
        return (
            <>
                <div className="coming-box">
                    {days}
                    <span>Days</span>
                </div>
                <div className="coming-box">
                    {hours}
                    <span>Hours</span>
                </div>
                <div className="coming-box">
                    {minutes}
                    <span>Minutes</span>
                </div>
                <div className="coming-box">
                    {seconds}
                    <span>Seconds</span>
                </div>
            </>
        )
    }
}

const Section = (props) => {
    return (
        <React.Fragment>
            <section className="section hero-section bg-ico-hero" id="home">
                <div className="bg-overlay bg-primary"></div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="5">
                            <div className="text-white-50">
                                <h1 className="text-white font-weight-semibold mb-3 hero-title">Find a developer for live tutoring</h1>
                                <p className="font-size-14">
                                    It will be as simple as occidental in fact to an English person, it will seem like simplified as a skeptical
                                    Cambridge
                                </p>

                                <div className="button-items mt-4">
                                    <Link to="#" className="btn btn-success mr-1">
                                        Search Now
                                    </Link>
                                    <Link to="#" className="btn btn-light">
                                        How it works
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg="5" md="8" sm="10" className="ml-lg-auto">
                            <Card className="overflow-hidden mb-0 mt-5 mt-lg-0">
                                <CardHeader className="text-center">
                                    <h5 className="mb-0">Landing Picture here</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="text-center">
                                        <h5>Some text :</h5>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section
