import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import toastr from 'toastr'

import logoLightSm from '../../assets/images/logo-light-sm.svg'
import logoLightLg from '../../assets/images/logo-light-lg.svg'
import { loginUser, logoutUser } from '../../store/actions'
import NotificationDropdown from '../Common/TopbarDropdown/NotificationDropdown'
import ProfileMenu from '../Common/TopbarDropdown/ProfileMenu'
import CreatePollModal from '../Common/create-poll-modal'
import useModal from './useModal'
import GoogleLoginDevPolls from '../Common/GoogleLoginDevPolls'

const Header = (props) => {
    const { isShowing, toggle } = useModal()
    const [searchTerm, setSearchTerm] = useState('')
    const isUserLoggedIn = !!props.authUser

    const handleSubmit = (event) => {
        if (searchTerm) {
            props.history.push('/search?q=' + searchTerm)
        }
        event.preventDefault()
    }

    const createPollHandler = () => {
        if (props.authUser) {
            toggle()
        } else {
            toastr.error('Please login to create a poll.')
        }
    }

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

                        <form onSubmit={handleSubmit} className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Stocks..."
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value)
                                    }}
                                />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex">
                        <div className="d-flex mr-2 align-items-center">
                            <Button type="button" color="primary" onClick={createPollHandler}>
                                Create an Alert
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

const mapStateToProps = (state) => {
    return {
        error: state?.Login.error,
        authUser: state?.Login.authUser,
        profile: state?.Profile.profile,
    }
}

export default withRouter(connect(mapStateToProps, { loginUser, logoutUser })(Header))
