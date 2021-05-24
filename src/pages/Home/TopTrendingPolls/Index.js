import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Table } from 'reactstrap'
import { fetchTopPolls } from '../../../store/actions'

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
                        <Table className="table table-centered table-nowrap">
                            <tbody>
                                {topPolls &&
                                    topPolls.slice(0, 5).map((poll) => (
                                        <tr key={poll._id}>
                                            <td style={{ width: '50px' }}>
                                                {poll.author?.imageUrl !== 'Null' ? (
                                                    <img src={poll.author?.imageUrl} className="rounded-circle avatar-xs" alt="" />
                                                ) : (
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                            {poll.author?.name.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                            <td>
                                                <h5 className="font-size-14 m-0">
                                                    <Link to="" className="text-dark">
                                                        {poll.question}
                                                    </Link>
                                                </h5>
                                                <div>
                                                    {poll.question.topics &&
                                                        poll.question.topics.map((topic, key) => (
                                                            <Link to="#" className="badge badge-primary font-size-11 mr-1" key={topic}>
                                                                {topic}
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
