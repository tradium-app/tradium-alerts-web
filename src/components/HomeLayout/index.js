import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Other Layout related Component
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpened: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    /**
     * Opens the menu - mobile
     */
    openMenu = (e) => {
        this.setState({ isMenuOpened: !this.state.isMenuOpened })
    }
    render() {
        return (
            <React.Fragment>
                <div id="layout-wrapper">
                    <Header isMenuOpened={this.state.isMenuOpened} openLeftMenuCallBack={this.openMenu} />
                    <div className="main-content">{this.props.children}</div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Layout)
