import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import GoogleAnalytics from 'react-ga'

import { userRoutes, publicRoutes } from './routes/allRoutes'
import HomeLayout from './components/HomeLayout'
import './assets/scss/theme.scss'
import 'toastr/build/toastr.min.css'

GoogleAnalytics.initialize(process.env.REACT_APP_GAID || 'G-6GX7ZD08X8')

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
