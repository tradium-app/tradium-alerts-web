import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import FeatureBox from './feature-box'

import signupImg from '../../../assets/images/home/sign-up-1.svg'
import searchImg from '../../../assets/images/home/search-1.svg'
import reserveImg from '../../../assets/images/home/reserve-1.svg'

const Features = (props) => {
    const features1 = [
        { id: 1, desc: 'Donec pede justo vel aliquet' },
        { id: 2, desc: 'Aenean et nisl sagittis' },
    ]
    const features2 = [
        { id: 1, desc: 'Donec pede justo vel aliquet' },
        { id: 2, desc: 'Aenean et nisl sagittis' },
    ]
    const features3 = [
        { id: 1, desc: 'Donec pede justo vel aliquet' },
        { id: 2, desc: 'Aenean et nisl sagittis' },
    ]

    return (
        <React.Fragment>
            <section className="section" id="features">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <div className="small-title">Features</div>
                                <h4>How does it work?</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center pt-4">
                        <Col md="6" sm="8">
                            <div>
                                <img src={signupImg} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                        <Col md="5" className="ml-auto">
                            <FeatureBox num="01" title="Sign Up" features={features1} desc="Sign up and fill the forms" />
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5 pt-md-5">
                        <Col md="6">
                            <FeatureBox num="02" title="Find a Tutor" features={features2} desc="Search using all keywords" />
                        </Col>
                        <Col md="5" sm="8" className="ml-md-auto">
                            <div className="mt-4 mr-md-0">
                                <img src={searchImg} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center pt-4">
                        <Col md="6" sm="8">
                            <div>
                                <img src={reserveImg} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                        <Col md="5" className="ml-auto">
                            <FeatureBox num="03" title="Book a class" features={features3} desc="Request a class from your preferred tutor" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Features
