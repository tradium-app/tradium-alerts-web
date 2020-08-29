import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

import logo from '../../assets/images/logo-sm-light.png'
import logoLight from '../../assets/images/logo-light.png'
import logoLightSvg from '../../assets/images/logo-light.svg'
import logoDark from '../../assets/images/logo-dark.png'

//i18n
import { withNamespaces } from 'react-i18next'

const Header = (props) => {
    const [menu, setMenu] = useState(false)
    const [isSearch, setSearch] = useState(false)

    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoDark} alt="" height="17" />
                                </span>
                            </Link>

                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoLightSvg} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLight} alt="" height="19" />
                                </span>
                            </Link>
                        </div>

                        <button
                            type="button"
                            className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                            data-toggle="collapse"
                            onClick={() => {
                                props.toggleLeftmenu(!props.leftMenu)
                            }}
                            data-target="#topnav-menu-content"
                        >
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex">
                        <Dropdown className="d-none d-lg-inline-block ml-1">
                            <DropdownToggle className="btn header-item waves-effect" caret tag="button">
                                Find a Tutor
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown className="d-none d-lg-inline-block ml-1">
                            <DropdownToggle className="btn header-item waves-effect" caret tag="button">
                                Become a Tutor
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown className="d-none d-lg-inline-block ml-1">
                            <DropdownToggle className="btn header-item waves-effect" caret tag="button">
                                Sign Up
                            </DropdownToggle>
                        </Dropdown>

                        <Dropdown className="d-none d-lg-inline-block ml-1">
                            <DropdownToggle className="btn header-item waves-effect" caret tag="button">
                                Login
                            </DropdownToggle>
                        </Dropdown>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default withNamespaces()(Header)
