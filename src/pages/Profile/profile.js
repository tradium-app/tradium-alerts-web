import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap'
import PollCard from '../Home/Poll/PollCard'

const socialLinks = [
    {
        id: 'githubLink',
        name: 'Github',
        imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
        id: 'linkedinLink',
        name: 'LinkedIn',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    },
    {
        id: 'stackOverflowLink',
        name: 'Stack Overflow',
        imgUrl: 'https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-icon.svg?v=f13ebeedfa9e',
    },
]

const Profile = () => {
    let authUser
    if (localStorage.getItem('authUser')) {
        authUser = JSON.parse(localStorage.getItem('authUser'))
    }

    let { userId } = useParams()

    const { loading, error, data } = useQuery(GET_PROFILE_QUERY, {
        variables: { userId: userId || authUser?.userId },
    })

    const user = data?.getUserProfile

    return (
        <React.Fragment>
            <Helmet>
                <title>{user?.name + ' | DevPolls'}</title>
            </Helmet>
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
                                                        {socialLinks.map((link) => (
                                                            <a href={user && user[link.id]} target="_blank" rel="noreferrer noopener" key={link.id}>
                                                                <img
                                                                    className="avatar-sm img-thumbnail d-inline-block rounded-circle ml-1 mr-1"
                                                                    src={link.imgUrl}
                                                                    alt={link.name}
                                                                />
                                                            </a>
                                                        ))}
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

                            {user &&
                                !error &&
                                !loading &&
                                user.pollsCreated.map((poll) => <PollCard key={poll._id} poll={poll} authUser={authUser} />)}
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
                options {
                    _id
                    text
                    order
                    selected
                    totalVotes
                }
                author {
                    _id
                    userId
                    name
                    imageUrl
                    status
                }
                createdDate
                modifiedDate
            }
        }
    }
`

export default Profile
