import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

// Pages Components
import avatar3 from '../../assets/images/users/avatar-3.jpg'
import Poll from './Poll/Poll'
import TopPolls from './TopPolls/Index'
import TopHashtags from './TopHashtags/Index'

const HomePage = (props) => {
    const { loading, error, data } = useQuery(GET_TOP_POLLS_QUERY)

    return (
        <React.Fragment>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xl="8">
                            {data &&
                                !error &&
                                !loading &&
                                data.getTopPolls.map((poll) => (
                                    <Card key={poll._id}>
                                        <CardBody>
                                            <Row className="media align-items-center mb-2">
                                                <Link to="/profile">
                                                    <img className="avatar-sm img-thumbnail rounded-circle mr-2" src={avatar3} alt="" />
                                                </Link>
                                                <div className="media-body align-items-center">
                                                    <p className="text-muted font-size-12 mb-0">Suraj Shrestha</p>
                                                    <p className="text-muted font-size-10 mb-0">May 16 (9 hours ago)</p>
                                                </div>
                                            </Row>
                                            <div className="media mb-2">
                                                <div className="media-body">
                                                    <Poll poll={poll} />
                                                    <div>
                                                        <Badge className="badge badge-primary font-size-11 mr-1">Java</Badge>
                                                        <Badge className="badge badge-primary font-size-11 mr-1">Redux</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                ))}
                        </Col>
                        <Col xl="4">
                            <TopPolls />
                            <TopHashtags />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export const GET_TOP_POLLS_QUERY = gql`
    query getTopPolls {
        getTopPolls {
            _id
            question
            options {
                text
                votes
            }
            author {
                name
            }
        }
    }
`

export default HomePage
