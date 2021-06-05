import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import { logoutUser } from '../../../store/actions'

const ProfileMenu = ({ authUser, logoutUser, history }) => {
    const [menu, setMenu] = useState(false)

    return (
        <React.Fragment>
            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
                <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                    <img className="rounded-circle header-profile-user" src={authUser.imageUrl} alt={authUser.username} />
                    <span className="d-none d-xl-inline-block ml-2 mr-1">{authUser.username}</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </DropdownToggle>
                <DropdownMenu right>
                    <Link className="dropdown-item" to={'/profile/' + authUser.userUrlId}>
                        <i className="bx bx-user font-size-16 align-middle mr-1"></i>
                        {'Profile'}
                    </Link>
                    <Link className="dropdown-item" to="/settings">
                        <i className="bx bx-cog font-size-16 align-middle mr-1"></i>
                        {'Settings'}
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link onClick={() => logoutUser(history)} className="dropdown-item btn-primary" to="#">
                        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
                        <span>{'Logout'}</span>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, { logoutUser })(ProfileMenu))
