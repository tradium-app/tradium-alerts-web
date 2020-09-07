import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { withNamespaces } from 'react-i18next'

import logoLightSm from '../../assets/images/logo-light-sm.svg'
import logoLightLg from '../../assets/images/logo-light-lg.svg'

import { loginUser, apiError } from '../../store/actions'

const Header = (props) => {
    // const [isSearch, setSearch] = useState(false)

    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoLightSm} alt="" height="22" />
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
                            <Link to="/find-tutors" className="btn header-item waves-effect">
                                Find a Tutor
                            </Link>
                        </div>

                        <div className="d-none d-lg-inline-block ml-1">
                            <Link to="/edit-profile" className="btn header-item waves-effect">
                                Become a Tutor
                            </Link>
                        </div>

                        <GoogleLoginWebtutor text="Sign Up" {...props} />
                        <GoogleLoginWebtutor text="Login" {...props} />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const GoogleLoginWebtutor = (props) => {
    const handleGoogleLoginSuccess = (response) => {
        console.log(response.profileObj)
        props.loginUser(response.profileObj, props.history)
    }

    return (
        <GoogleLogin
            clientId="173892898030-lqdnujddqgv4j5kloa94lkmdsssfale5.apps.googleusercontent.com"
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

export default withRouter(connect(mapStatetoProps, { loginUser, apiError })(withNamespaces()(Header)))
