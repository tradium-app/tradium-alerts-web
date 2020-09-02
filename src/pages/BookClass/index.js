import React from 'react'
import { Container } from 'reactstrap'
import BookClass from './BookClass'

const Page = (props) => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BookClass />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Page
