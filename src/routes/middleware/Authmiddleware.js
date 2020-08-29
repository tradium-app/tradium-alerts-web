import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

const Authmiddleware = ({ component: Component, layout: Layout }) => (
    <Route
        render={(props) => {
            if (!localStorage.getItem('authUser')) {
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }

            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            )
        }}
    />
)

export default withRouter(Authmiddleware)
