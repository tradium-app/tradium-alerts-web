import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardBody, Media, Badge, Row } from 'reactstrap'

const EmploymentCard = (props) => {
    return (
        <React.Fragment>
            {props.employments.map((employment, key) => (
                <Row>
                    <Col xl="1"></Col>
                    <Col xl="10" key={'_project_' + key}>
                        <Card className="border">
                            <CardBody>
                                <Media>
                                    <div className="avatar-md mr-4">
                                        <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                            <img src={employment.img} alt="" height="30" />
                                        </span>
                                    </div>

                                    <Media className="overflow-hidden" body>
                                        <h5 className="text-truncate font-size-15">
                                            <Link to="#" className="text-dark">
                                                {employment.name}
                                            </Link>
                                        </h5>
                                        <p className="mb-1">{employment.company}</p>
                                        <p className="text-muted mb-3 font-size-12">
                                            From {employment.from} - To {employment.to}
                                        </p>
                                        <p className="text-muted mb-4">{employment.description}</p>

                                        <div className="team">
                                            <ul className="list-inline mb-0">
                                                {employment.technologies &&
                                                    employment.technologies.map((tech, key) => (
                                                        <li className="list-inline-item mr-2">
                                                            <Badge pill className="font-size-12 py-2 pt-2 pb-2">
                                                                {tech}
                                                            </Badge>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="1"></Col>
                </Row>
            ))}
        </React.Fragment>
    )
}

export default EmploymentCard
