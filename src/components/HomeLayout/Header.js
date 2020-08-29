import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { Dropdown, DropdownToggle } from 'reactstrap'

import logoLight from '../../assets/images/logo-light.png'
import logoLightSvg from '../../assets/images/logo-light.svg'

//i18n
import { withNamespaces } from 'react-i18next'

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

                        <GoogleLoginWebtutor text="Sign Up" />
                        <GoogleLoginWebtutor text="Login" />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

const GoogleLoginWebtutor = (props) => {
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
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

const responseGoogle = (response) => {
    console.log(response.profileObj)
}

export default withNamespaces()(Header)
