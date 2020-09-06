import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import FeatureBox from './feature-box'

import signupImg from '../../../assets/images/home/sign-up-1.svg'
import searchImg from '../../../assets/images/home/search-1.svg'
import reserveImg from '../../../assets/images/home/reserve-1.svg'

const Features = (props) => {
    const features1 = [
        { id: 1, desc: 'List your experencies & technologies' },
        { id: 2, desc: 'Link your LinkedIn & Github' },
    ]
    const features2 = [{ id: 1, desc: 'Search using technologies & experencies' }]
    const features3 = [
        { id: 1, desc: 'Specify your requirements' },
        { id: 2, desc: 'Select technology and development tools' },
        { id: 2, desc: 'Select date & time for a Zoom meeting' },
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
                                <img src={signupImg} alt="" className="img-fluid mx-auto d-block" width="240" />
                            </div>
                        </Col>
                        <Col md="6" className="ml-auto">
                            <FeatureBox num="01" title="Sign Up" features={features1} />
                        </Col>
                    </Row>

                    <Row className="align-items-center pt-4">
                        <Col md="6" sm="8">
                            <div>
                                <img src={searchImg} alt="" className="img-fluid mx-auto d-block" width="240" />
                            </div>
                        </Col>
                        <Col md="6" className="ml-auto">
                            <FeatureBox num="02" title="Find a Tutor" features={features2} />
                        </Col>
                    </Row>

                    <Row className="align-items-center pt-4">
                        <Col md="6" sm="8">
                            <div>
                                <img src={reserveImg} alt="" className="img-fluid mx-auto d-block" width="240" />
                            </div>
                        </Col>
                        <Col md="6" className="ml-auto">
                            <FeatureBox num="03" title="Book a class" features={features3} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Features
