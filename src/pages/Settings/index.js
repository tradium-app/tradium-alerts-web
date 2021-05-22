import React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from 'reactstrap'
import ProfileEdit from './ProfileEdit/ProfileEdit'

const Page = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Settings | DevPolls</title>
            </Helmet>
            <div className="page-content">
                <Container fluid>
                    <ProfileEdit />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Page
