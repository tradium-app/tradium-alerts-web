import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle } from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import logoLight from '../../assets/images/logo-light.png'
import logoLightSvg from '../../assets/images/logo-light.svg'

import { logoutUser, apiError } from '../../store/actions'
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown'
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu'

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
                                    <img src={logoLightSvg} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLight} alt="" height="40" />
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
                        <Dropdown className="d-lg-inline-block ml-1">
                            <DropdownToggle className="btn header-item waves-effect" caret tag="button">
                                Find a Tutor
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown className="d-none d-lg-inline-block ml-1">
                            <DropdownToggle className="btn header-item waves-effect" caret tag="button">
                                Become a Tutor
                            </DropdownToggle>
                        </Dropdown>

                        <NotificationDropdown />

                        <ProfileMenu />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const mapStatetoProps = (state) => {
    const { error } = state.Login
    return { error }
}

export default withRouter(connect(mapStatetoProps, { logoutUser, apiError })(withNamespaces()(Header)))
