import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>{new Date().getFullYear()} © DevPolls</Col>
                        <Col md={6}>
                            <a
                                href="https://github.com/devpolls/devpolls-web/issues"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-reset"
                            >
                                <div className="text-sm-right d-none d-sm-block">Request a feature</div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer
