import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, Row, Col } from 'reactstrap'

// Pages Components
import TopPolls from '../../components/TopTrendingPolls/Index'
import TopHashtags from '../../components/TopTrendingTags/Index'
import PollCard from '../../components/Poll/PollCard'
import { searchPolls } from './store/actions'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const SearchPage = ({ authUser, searchPolls, searchPollsResult }) => {
    let query = useQuery()
    const searchText = query.get('q')

    useEffect(() => {
        if (searchText) {
            searchPolls(searchText)
        }
    }, [searchPolls, searchText])

    return (
        <React.Fragment>
            <Helmet>
                <title>DevPolls | {searchText || ''}</title>
            </Helmet>
            <div className="page-content">
                <Container>
                    <Row>
                        <Col xl="8">
                            {searchPollsResult?.map((poll) => (
                                <PollCard key={poll._id} poll={poll} authUser={authUser} />
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

const mapStateToProps = (state) => {
    return {
        authUser: state?.Search?.authUser,
        searchPollsResult: state?.SearchReducer?.searchPollsResult,
    }
}

export default withRouter(connect(mapStateToProps, { searchPolls })(SearchPage))
