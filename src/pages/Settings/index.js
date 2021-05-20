import React from 'react'
import { Container } from 'reactstrap'
import ProfileEdit from './ProfileEdit/ProfileEdit'

const Page = (props) => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <ProfileEdit />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Page
