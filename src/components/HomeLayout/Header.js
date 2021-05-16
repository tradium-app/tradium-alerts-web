import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

import logoLightSm from '../../assets/images/logo-light-sm.svg'
import logoLightLg from '../../assets/images/logo-light-lg.svg'

import { loginUser, logoutUser, apiError } from '../../store/actions'
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown'
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu'

const Header = (props) => {
    // const [isSearch, setSearch] = useState(false)
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
                        <div className="d-lg-inline-block ml-1">
                            <Link to="/create-poll" className="btn header-item waves-effect">
                                Create a Poll
                            </Link>
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
    const handleGoogleLoginSuccess = (response) => {
        console.log(response.profileObj)
        props.loginUser(response.profileObj, props.history)
    }

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
            render={(renderProps) => (
                <div className="d-lg-inline-block ml-1">
                    <button
                        aria-haspopup="true"
                        className="btn header-item waves-effect"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        {props.text}
                    </button>
                </div>
            )}
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginSuccess}
            cookiePolicy={'single_host_origin'}
        />
    )
}

const mapStatetoProps = (state) => {
    const { error } = state.Login
    return { error }
}

export default withRouter(connect(mapStatetoProps, { loginUser, logoutUser, apiError })(Header))
