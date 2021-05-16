import React from 'react'
import { Container } from 'reactstrap'
import CreatePoll from './CreatePoll'

const Page = (props) => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container>
                    <CreatePoll />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Page
