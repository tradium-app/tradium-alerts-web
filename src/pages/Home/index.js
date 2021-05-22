import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col } from 'reactstrap'

// Pages Components
import TopPolls from './TopPolls/Index'
import TopHashtags from './TopHashtags/Index'
import PollCard from './Poll/PollCard'

const HomePage = () => {
    const { loading, error, data } = useQuery(GET_TOP_POLLS_QUERY)

    return (
        <React.Fragment>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xl="8">{data && !error && !loading && data.getTopPolls.map((poll) => <PollCard key={poll._id} poll={poll} />)}</Col>
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
                selected
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
