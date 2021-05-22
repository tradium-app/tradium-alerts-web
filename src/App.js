import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { userRoutes, publicRoutes } from './routes/allRoutes'
import HomeLayout from './components/HomeLayout'
import './assets/scss/theme.scss'
import 'toastr/build/toastr.min.css'

const App = (props) => {
    const Middleware = ({ component: Component, layout: Layout }) => (
        <Route
            render={(props) => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            }}
        />
    )

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {publicRoutes.map((route, idx) => (
                        <Middleware path={route.path} layout={HomeLayout} component={route.component} key={idx} exact />
                    ))}

                    {userRoutes.map((route, idx) => (
                        <Middleware path={route.path} layout={HomeLayout} component={route.component} key={idx} exact />
                    ))}
                </Switch>
            </Router>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        layout: state.Layout,
    }
}

export default connect(mapStateToProps, null)(App)
