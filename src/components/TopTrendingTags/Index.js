import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { fetchTopTags } from '../../store/actions'

const TopTags = ({ fetchTopTags, topTags }) => {
    useEffect(() => {
        fetchTopTags()
    }, [fetchTopTags])

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-4">Top Trending Tags</CardTitle>
                    <div className="table-responsive">
                        <Table className="table table-centered table-nowrap">
                            <tbody>
                                {topTags?.slice(0, 10).map((tag, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div>
                                                <Link to="#" className="badge badge-primary font-size-11 mr-1">
                                                    {tag.tagId}
                                                </Link>
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
        topTags: state.Home.topTags,
    }
}

export default connect(mapStateToProps, { fetchTopTags })(TopTags)
