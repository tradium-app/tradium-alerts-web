import React from 'react'
import { Card, CardBody, CardTitle, Media, Table } from 'reactstrap'
import { Link } from 'react-router-dom'

const TopPolls = () => {
    const members = [
        {
            id: 1,
            img: 'Null',
            name: 'What is the best Serverless',
            skills: [
                { id: 1, name: 'Frontend' },
                { id: 2, name: 'UI' },
            ],
        },
        {
            id: 2,
            img: 'Null',
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
            img: 'Null',
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
                    <CardTitle className="mb-4">Top Trending Polls</CardTitle>

                    <div className="table-responsive">
                        <Table className="table table-centered table-nowrap">
                            <tbody>
                                {members.map((member, k) => (
                                    <tr key={'_member_' + k}>
                                        <td style={{ width: '50px' }}>
                                            {member.img !== 'Null' ? (
                                                <img src={member.img} className="rounded-circle avatar-xs" alt="" />
                                            ) : (
                                                <div className="avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                        {member.name.charAt(0)}
                                                    </span>
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <h5 className="font-size-14 m-0">
                                                <Link to="" className="text-dark">
                                                    {member.name}
                                                </Link>
                                            </h5>
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

export default TopPolls
