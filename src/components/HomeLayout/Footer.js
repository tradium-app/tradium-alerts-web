import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>{new Date().getFullYear()} © Tradium</Col>
                        <Col md={6}>
                            <a
                                href="https://github.com/tradium-app/swing-trade-alerts/issues"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-reset"
                            >
                                <div className="text-sm-right d-none d-sm-block">Report an Issue</div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer
