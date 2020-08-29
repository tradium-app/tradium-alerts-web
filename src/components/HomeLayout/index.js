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
        // Scrollto 0,0
        window.scrollTo(0, 0)

        const title = this.props.location.pathname
        let currentage = title.charAt(1).toUpperCase() + title.slice(2)

        document.title = currentage + ' | Skote - Responsive Bootstrap 4 Admin Dashboard'

        // this.props.changeLayout('horizontal')
        // if (this.props.topbarTheme) {
        //     this.props.changeTopbarTheme(this.props.topbarTheme)
        // }
        // if (this.props.layoutWidth) {
        //     this.props.changeLayoutWidth(this.props.layoutWidth)
        // }
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
