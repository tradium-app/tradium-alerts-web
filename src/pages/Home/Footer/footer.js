import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Features = (props) => {
    const footerLinks = [
        {
            title: 'Company',
            links: [
                { title: 'About Us', link: '#' },
                { title: 'News', link: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { title: 'Github', link: 'https://github.com/webtutor-dev' },
                { title: 'Privacy Policy', link: '#' },
            ],
        },
        {
            title: 'Social Links',
            links: [{ title: 'Twitter', link: 'https://twitter.com/webtutor-dev' }],
        },
    ]

    return (
        <React.Fragment>
            <footer className="landing-footer">
                <Container>
                    <Row>
                        {footerLinks.map((footerLink, key) => (
                            <Col lg="4" sm="6" key={key}>
                                <div className="mb-4 mb-lg-0">
                                    <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                                    <ul className="list-unstyled footer-list-menu">
                                        {footerLink.links.map((Flink, key) => (
                                            <li key={key}>
                                                <a href={Flink.link}>{Flink.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <hr className="my-4" />
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Features
