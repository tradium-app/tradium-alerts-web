import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6}>{new Date().getFullYear()} © Webtutor.io</Col>
                        <Col md={6}>
                            <div className="text-sm-right d-none d-sm-block">Developed by Webtutor Inc. Indianapolis, Indiana, USA</div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer
