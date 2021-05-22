import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import firebase from 'firebase/app'
import { logoutUser } from '../../../store/actions'

const ProfileMenu = (props) => {
    const [menu, setMenu] = useState(false)
    const [username, setusername] = useState('Admin')
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('authUser')) {
            const obj = JSON.parse(localStorage.getItem('authUser'))
            setusername(obj.givenName)
            setImageUrl(obj.imageUrl)
        }
    }, [props.success])

    return (
        <React.Fragment>
            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
                <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                    <img className="rounded-circle header-profile-user" src={imageUrl} alt={username} />
                    <span className="d-none d-xl-inline-block ml-2 mr-1">{username}</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </DropdownToggle>
                <DropdownMenu right>
                    <Link className="dropdown-item" to="/profile">
                        <i className="bx bx-user font-size-16 align-middle mr-1"></i>
                        {'Profile'}
                    </Link>
                    <Link className="dropdown-item" to="/settings">
                        <i className="bx bx-cog font-size-16 align-middle mr-1"></i>
                        {'Settings'}
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                        onClick={() => {
                            firebase
                                .auth()
                                .signOut()
                                .then(() => props.logoutUser(props.history))
                        }}
                        className="dropdown-item btn-primary"
                        to="#"
                    >
                        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
                        <span>{'Logout'}</span>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}

const mapStatetoProps = (state) => {
    const { error, success } = state.Profile
    return { error, success }
}

export default withRouter(connect(mapStatetoProps, { logoutUser })(ProfileMenu))
