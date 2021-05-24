import React from 'react'
import { Card, CardBody, CardTitle, Media, Table } from 'reactstrap'
import { Link } from 'react-router-dom'

const TopTrendingTopics = () => {
    const members = [
        {
            id: 1,
            name: 'Daniel Canales',
            skills: [
                { id: 1, name: 'Frontend' },
                { id: 2, name: 'UI' },
            ],
        },
        {
            id: 2,
            name: 'Jennifer Walker',
            skills: [{ id: 1, name: 'UI/UX' }],
        },
        {
            id: 3,
            img: 'Null',
            name: 'Carl Mackay',
            skills: [{ id: 1, name: 'Backend' }],
        },
        {
            id: 4,
            name: 'Janice Cole',
            skills: [
                { id: 1, name: 'Frontend' },
                { id: 2, name: 'UI' },
            ],
        },
        {
            id: 5,
            img: 'Null',
            name: 'Tony Brafford',
            skills: [{ id: 1, name: 'Backend' }],
        },
    ]
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="mb-4">Top Trending Topics</CardTitle>

                    <div className="table-responsive">
                        <Table className="table table-centered table-nowrap">
                            <tbody>
                                {members.map((member, k) => (
                                    <tr key={'_member_' + k}>
                                        <td>
                                            <div>
                                                {member.skills.map((skill, key) => (
                                                    <Link to="#" className="badge badge-primary font-size-11 mr-1" key={'_skill_' + key}>
                                                        {skill.name}
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

export default TopTrendingTopics
