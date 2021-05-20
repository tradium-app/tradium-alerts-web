import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import firebase from 'firebase/app'
import 'firebase/auth'

import logoLightSm from '../../assets/images/logo-light-sm.svg'
import logoLightLg from '../../assets/images/logo-light-lg.svg'

import { loginUser, logoutUser, apiError } from '../../store/actions'
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown'
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu'
import CreatePollModal from '../Common/create-poll-modal'
import useModal from './useModal'

const Header = (props) => {
    const { isShowing, toggle } = useModal()
    const isUserLoggedIn = localStorage.getItem('authUser')

    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoLightSm} alt="" height="32" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLightLg} alt="" height="40" />
                                </span>
                            </Link>
                        </div>

                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex">
                        <div className="d-flex mr-2 align-items-center">
                            <Button type="button" color="primary" onClick={toggle}>
                                Create a Poll
                            </Button>
                            <CreatePollModal isShowing={isShowing} toggle={toggle} />
                        </div>

                        {!isUserLoggedIn && <GoogleLoginDevPolls text="Sign Up" {...props} />}
                        {!isUserLoggedIn && <GoogleLoginDevPolls text="Login" {...props} />}

                        {isUserLoggedIn && <NotificationDropdown />}
                        {isUserLoggedIn && <ProfileMenu logoutUser={logoutUser} />}
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const GoogleLoginDevPolls = (props) => {
    const handleGoogleLogin = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((response) => {
                props.loginUser(response.credential.accessToken, props.history)
            })
    }

    return (
        <div className="d-lg-inline-block ml-1">
            <button aria-haspopup="true" className="btn header-item waves-effect" onClick={handleGoogleLogin}>
                {props.text}
            </button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    const { error } = state.Login
    return { error }
}

export default withRouter(connect(mapStatetoProps, { loginUser, logoutUser, apiError })(Header))
