import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Table } from 'reactstrap'
import { fetchTopPolls } from '../../store/actions'

const TopTrendingPolls = ({ fetchTopPolls, topPolls }) => {
    useEffect(() => {
        fetchTopPolls()
    }, [fetchTopPolls])

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-4">Top Trending Polls</CardTitle>

                    <div className="table-responsive">
                        <Table className="table table-centered">
                            <tbody>
                                {topPolls &&
                                    topPolls.slice(0, 5).map((poll) => (
                                        <tr key={poll._id}>
                                            <td style={{ width: '50px' }}>
                                                <Link to={'/profile/' + poll.author?.userUrlId} className="text-dark font-size-14 m-0">
                                                    {poll.author?.imageUrl !== 'Null' ? (
                                                        <img src={poll.author?.imageUrl} className="rounded-circle avatar-xs" alt="" />
                                                    ) : (
                                                        <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                                {poll.author?.name.charAt(0)}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="" className="text-dark font-size-14 m-0">
                                                    {poll.question.length > 100 ? poll.question.substring(0, 100) + '...' : poll.question}
                                                </Link>
                                                <div>
                                                    {poll.tags &&
                                                        poll.tags.map((tag, key) => (
                                                            <Link to="#" className="badge badge-primary font-size-11 mr-1" key={key}>
                                                                {tag}
                                                            </Link>
                                                        ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        topPolls: state.Home.topPolls,
    }
}

export default connect(mapStateToProps, { fetchTopPolls })(TopTrendingPolls)
