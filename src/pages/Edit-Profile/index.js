import React from 'react'
import { Container } from 'reactstrap'
import FAQs from './Faqs/FAQs'

const Page = (props) => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <FAQs />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Page
