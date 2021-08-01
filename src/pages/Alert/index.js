import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col } from 'reactstrap'

// Pages Components
import TopPolls from '../../components/TopTrendingPolls/Index'
import TopTags from '../../components/TopTrendingTags/Index'
import PollCard from '../../components/Poll/PollCard'

const AlertPage = ({ authUser }) => {
    let { userUrlId, pollUrlId } = useParams()

    const { loading, error, data } = useQuery(GET_POLL_QUERY, {
        variables: { userUrlId, pollUrlId },
    })

    const poll = data?.getPoll

    return (
        <React.Fragment>
            <Helmet>
                <title>DevPolls | {poll?.question || pollUrlId}</title>
            </Helmet>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xl="8">{poll && !error && !loading && <PollCard key={poll._id} poll={poll} authUser={authUser} />}</Col>
                        <Col xl="4">
                            <TopPolls />
                            <TopTags />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export const GET_POLL_QUERY = gql`
    query getPoll($userUrlId: String, $pollUrlId: String) {
        getPoll(userUrlId: $userUrlId, pollUrlId: $pollUrlId) {
            _id
            pollUrlId
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
                userUrlId
                name
                imageUrl
                status
            }
            tags
            createdDate
            modifiedDate
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(AlertPage))
