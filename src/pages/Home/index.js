import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col } from 'reactstrap'

// Pages Components
import TopPolls from '../../components/TopTrendingPolls/Index'
import TopHashtags from '../../components/TopTrendingTags/Index'
import PollCard from '../../components/Poll/PollCard'

const HomePage = ({ authUser }) => {
    const { loading, error, data } = useQuery(GET_TOP_POLLS_QUERY)

    return (
        <React.Fragment>
            <Helmet>
                <title>DevPolls - fun polls for developers</title>
            </Helmet>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xl="8">
                            {data &&
                                !error &&
                                !loading &&
                                data.getTopPolls.map((poll) => <PollCard key={poll._id} poll={poll} authUser={authUser} />)}
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

export default withRouter(connect(mapStateToProps, {})(HomePage))
