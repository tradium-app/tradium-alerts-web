import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

// Pages Components
import Poll from './Poll/Poll'
import TopPolls from './TopPolls/Index'
import TopHashtags from './TopHashtags/Index'
import { getRelativeTime } from '../../components/Common/time'

const HomePage = () => {
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
                                                    <img className="avatar-sm img-thumbnail rounded-circle mr-2" src={poll.author.imageUrl} alt="" />
                                                </Link>
                                                <div className="media-body align-items-center">
                                                    <p className="text-muted font-size-12 mb-0">{poll.author.name}</p>
                                                    <p className="text-muted font-size-10 mb-0">{getRelativeTime(poll.modifiedDate)}</p>
                                                </div>
                                            </Row>
                                            <div className="media mb-2">
                                                <div className="media-body">
                                                    <Poll poll={poll} key={poll._id} />
                                                    <div>
                                                        <Badge className="badge badge-primary font-size-11 mr-1">#java</Badge>
                                                        <Badge className="badge badge-primary font-size-11 mr-1">#redux</Badge>
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
                _id
                text
                order
                totalVotes
            }
            author {
                _id
                name
                imageUrl
                status
            }
            createdDate
            modifiedDate
        }
    }
`

export default HomePage
