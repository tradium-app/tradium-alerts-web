import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardBody, Media, Badge } from 'reactstrap'

const SkillCard = (props) => {
    return (
        <React.Fragment className="mt-4">
            {props.skills.map((skill, key) => (
                <Col xl="4" sm="6" key={'_project_' + key}>
                    <Card className="border">
                        <CardBody>
                            <Media>
                                <div className="avatar-md mr-4">
                                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                        <img src={skill.img} alt="" height="30" />
                                    </span>
                                </div>

                                <Media className="overflow-hidden" body>
                                    <h5 className="text-truncate font-size-15">
                                        <Link to="#" className="text-dark">
                                            {skill.name}
                                        </Link>
                                    </h5>
                                    <p className="text-muted mb-4">{skill.experience}</p>

                                    <div className="team">
                                        <ul className="list-inline mb-0">
                                            {skill.related &&
                                                skill.related.map((tech, key) => (
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
            ))}
        </React.Fragment>
    )
}

export default SkillCard
