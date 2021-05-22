import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table } from 'reactstrap'

import avatar2 from '../../assets/images/users/avatar-2.jpg'
import avatar3 from '../../assets/images/users/avatar-3.jpg'

const ProfileMenu = (props) => {
    const links = [
        {
            id: 1,
            name: 'Github',
            imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            url: 'https://github.com/syuraj',
        },
        {
            id: 2,
            name: 'LinkedIn',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
            url: 'https://www.linkedin.com/in/surajshrestha',
        },
        {
            id: 3,
            name: 'Stack Overflow',
            imgUrl: 'https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-icon.svg?v=f13ebeedfa9e',
            url: 'https://stackoverflow.com/users/291668/suraj-shrestha',
        },
    ]

    let authUser
    if (localStorage.getItem('authUser')) {
        authUser = JSON.parse(localStorage.getItem('authUser'))
    }

    let { userId } = useParams()

    const { loading, error, data } = useQuery(GET_PROFILE_QUERY, {
        variables: { userId: userId || authUser?._id },
    })

    const user = data?.getUserProfile

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl="4">
                            <Card className="overflow-hidden">
                                <CardBody className="pt-0">
                                    <Row>
                                        <Col className="text-center">
                                            <div className="avatar-xl mt-2 mb-2 d-inline-block">
                                                <img src={user?.imageUrl} alt="" className="img-thumbnail rounded-circle" />
                                            </div>
                                            <h5 className="font-size-20 text-truncate">{user?.name}</h5>
                                            <p className="text-muted mb-0 text-truncate">Indianapolis, Indiana</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="text-center pt-4">
                                                <Row className="mt-4 mb-4">
                                                    <Col className="align-self-center text-center">
                                                        <a href="https://github.com/syuraj" target="_blank" rel="noreferrer noopener">
                                                            <img
                                                                className="avatar-sm img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                                                alt="Github"
                                                            />
                                                        </a>
                                                        <a
                                                            href="https://www.linkedin.com/in/surajshrestha/"
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                        >
                                                            <img
                                                                className="avatar-sm img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                                                alt="LinkedIn"
                                                            />
                                                        </a>
                                                        <a
                                                            href="https://stackoverflow.com/users/291668/suraj-shrestha"
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                        >
                                                            <img
                                                                className="avatar-sm img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                                src="https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-icon.svg?v=f13ebeedfa9e"
                                                                alt="Stack Overflow"
                                                            />
                                                        </a>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="8">
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">{user?.title}</CardTitle>
                                    <p className="font-size-16 text-muted">{user?.shortBio}</p>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="media mb-4">
                                        <img className="d-flex align-self-start rounded mr-4" src={avatar3} alt="Skote" height="50" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">JavaScript</h5>
                                            <p>
                                                I'm a full-stack developer with 15+ years of experience in web application development and code
                                                mentoring. Are you stuck? Let me help!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="media mb-4">
                                        <img className="d-flex align-self-start rounded mr-4" src={avatar3} alt="Skote" height="50" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-16">Python</h5>
                                            <p>
                                                I'm a full-stack developer with 15+ years of experience in web application development and code
                                                mentoring. Are you stuck? Let me help!
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export const GET_PROFILE_QUERY = gql`
    query getUserProfile($userId: String) {
        getUserProfile(userId: $userId) {
            _id
            name
            imageUrl
            title
            shortBio
            githubLink
            linkedinLink
            stackOverflowLink
            pollsCreated {
                _id
                question
            }
        }
    }
`

export default ProfileMenu
