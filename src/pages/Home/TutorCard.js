import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardBody, UncontrolledTooltip, Media, Badge } from 'reactstrap'
import StarRatings from 'react-star-ratings'

const CardProject = (props) => {
    return (
        <React.Fragment>
            {props.projects.map((project, key) => (
                <Col xl="4" sm="6" key={'_project_' + key}>
                    <Card>
                        <CardBody>
                            <Media>
                                <div className="avatar-md mr-4">
                                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                        <img src={project.img} alt="" height="30" />
                                    </span>
                                </div>

                                <Media className="overflow-hidden" body>
                                    <h5 className="text-truncate font-size-15">
                                        <Link to="#" className="text-dark">
                                            {project.name}
                                        </Link>
                                    </h5>
                                    <p>
                                        <StarRatings
                                            rating={4}
                                            starRatedColor="#F1B44C"
                                            starEmptyColor="#2D363F"
                                            numberOfStars={5}
                                            name="rating"
                                            starDimension="14px"
                                            starSpacing="3px"
                                        />
                                    </p>
                                    <p className="text-muted mb-4">{project.description}</p>
                                </Media>
                            </Media>
                        </CardBody>
                        <div className="px-4 py-3 border-top">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mr-3">
                                    <Badge color={project.color}>{project.status}</Badge>
                                </li>
                                <li className="list-inline-item mr-3" id="dueDate">
                                    <i className="bx bx-calendar mr-1"></i> {project.date}
                                    <UncontrolledTooltip placement="top" target="dueDate">
                                        Due Date
                                    </UncontrolledTooltip>
                                </li>
                                <li className="list-inline-item mr-3" id="comments">
                                    <i className="bx bx-comment-dots mr-1"></i> {project.comments}
                                    <UncontrolledTooltip placement="top" target="comments">
                                        Comments
                                    </UncontrolledTooltip>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            ))}
        </React.Fragment>
    )
}

export default CardProject
