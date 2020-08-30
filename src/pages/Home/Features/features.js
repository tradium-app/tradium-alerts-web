import React from 'react'
import { Container, Row, Col } from 'reactstrap'

//Import Components
import FeatureBox from './feature-box'

//Import images
import feature1 from '../../../assets/images/crypto/features-img/img-1.png'
import feature2 from '../../../assets/images/crypto/features-img/img-2.png'

const Features = (props) => {
    const features1 = [
        { id: 1, desc: 'Donec pede justo vel aliquet' },
        { id: 2, desc: 'Aenean et nisl sagittis' },
    ]
    const features2 = [
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
                                <img src={feature1} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                        <Col md="5" className="ml-auto">
                            {/* featurebox */}
                            <FeatureBox num="01" title="Sign Up" features={features1} desc="Sign up and fill the forms" />
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5 pt-md-5">
                        <Col md="5">
                            {/* featurebox */}
                            <FeatureBox num="02" title="Find a Tutor" features={features2} desc="Search using all keywords" />
                        </Col>
                        <Col md="6" sm="8" className="ml-md-auto">
                            <div className="mt-4 mr-md-0">
                                <img src={feature2} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Features
