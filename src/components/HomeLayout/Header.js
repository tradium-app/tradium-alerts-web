import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import SearchStock from '../../components/Common/SearchStock'
import logoLightSm from '../../assets/images/logo-light-sm.svg'
import logoLightLg from '../../assets/images/logo-light-lg.svg'
import { loginUser, logoutUser } from '../../store/actions'
import NotificationDropdown from '../Common/TopbarDropdown/NotificationDropdown'
import ProfileMenu from '../Common/TopbarDropdown/ProfileMenu'
import GoogleLoginDevPolls from '../Common/GoogleLoginDevPolls'

const Header = (props) => {
    const isUserLoggedIn = !!props.authUser

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

                        <div className="app-search">
                            <div className="position-relative">
                                <SearchStock className="form-control mb-2" handleSelect={(symbol) => handleSelect(symbol, props.history)} />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex">
                        {!isUserLoggedIn && <GoogleLoginDevPolls text="Login" {...props} />}

                        {isUserLoggedIn && <NotificationDropdown />}
                        {isUserLoggedIn && <ProfileMenu logoutUser={logoutUser} />}
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const handleSelect = (symbol, history) => {
    symbol?.value && history.push('/symbol/' + symbol.value)
}

const mapStateToProps = (state) => {
    return {
        error: state?.Login.error,
        authUser: state?.Login.authUser,
        profile: state?.Profile.profile,
    }
}

export default withRouter(connect(mapStateToProps, { loginUser, logoutUser })(Header))
