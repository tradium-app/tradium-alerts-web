import React, { useEffect, useState } from 'react'

import Section from './HeroSection/Section'
import Features from './Features/features'
import TopTutors from './Top-Tutors/Top-Tutors'
import Footer from './Footer/footer'

const Home = (props) => {
    const [imglight, setimglight] = useState(true)
    const [navClass, setnavClass] = useState('')

    // Use ComponentDidMount
    useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true)
    })

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop
        if (scrollup > 80) {
            setimglight(false)
            setnavClass('nav-sticky')
        } else {
            setimglight(true)
            setnavClass('')
        }
    }

    return (
        <React.Fragment>
            <Section />

            <Features />

            <TopTutors />

            <Footer />
        </React.Fragment>
    )
}

export default Home
