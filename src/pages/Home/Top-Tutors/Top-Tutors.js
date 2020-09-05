import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

//Import Images
import { Link } from 'react-router-dom'
import avatar1 from '../../../assets/images/users/avatar-1.jpg'
import avatar2 from '../../../assets/images/users/avatar-2.jpg'
import avatar3 from '../../../assets/images/users/avatar-3.jpg'
import avatar4 from '../../../assets/images/users/avatar-4.jpg'
import avatar5 from '../../../assets/images/users/avatar-5.jpg'
import avatar8 from '../../../assets/images/users/avatar-8.jpg'
import CardContact from './card-contact'

const users = [
    {
        id: 1,
        img: avatar1,
        name: 'David McHenry',
        designation: 'UI/UX Designer',
        color: 'primary',
        skills: [{ name: 'Photoshop' }, { name: 'illustrator' }],
    },
    {
        id: 2,
        img: avatar2,
        name: 'Frank Kirk',
        designation: 'Frontend Developer',
        skills: [{ name: 'Html' }, { name: 'Css' }, { name: '2 + more' }],
    },
    {
        id: 3,
        img: avatar3,
        name: 'Rafael Morales',
        designation: 'Backend Developer',
        skills: [{ name: 'Php' }, { name: 'Java' }, { name: 'Python' }],
    },
    {
        id: 4,
        img: avatar4,
        name: 'Mark Ellison',
        designation: 'Full Stack Developer',
        color: 'success',
        skills: [{ name: 'Ruby' }, { name: 'Php' }, { name: '2 + more' }],
    },
    {
        id: 5,
        img: avatar5,
        name: 'Minnie Walter',
        designation: 'Frontend Developer',
        skills: [{ name: 'Html' }, { name: 'Css' }, { name: '2 + more' }],
    },
    {
        id: 6,
        img: avatar5,
        name: 'Shirley Smith',
        designation: 'UI/UX Designer',
        skills: [{ name: 'Photoshop' }, { name: 'UI/UX Designer' }],
    },
    {
        id: 7,
        img: 'Null',
        name: 'John Santiago',
        designation: 'Full Stack Developer',
        color: 'info',
        skills: [{ name: 'Ruby' }, { name: 'Php' }, { name: '2 + more' }],
    },
    {
        id: 8,
        img: 'avatar7',
        name: 'Colin Melton',
        designation: 'Backend Developer',
        color: '',
        skills: [{ name: 'Php' }, { name: 'Java' }, { name: 'Python' }],
    },
]

const OurTeam = (props) => {
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)

    return (
        <React.Fragment>
            <section className="section" id="team">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="text-center mb-5">
                                <div className="small-title">Tutors</div>
                                <h4>Meet our Top Tutors</h4>
                            </div>
                        </Col>
                    </Row>

                    <Col lg="12">
                        <div className="hori-timeline">
                            <div className="owl-carousel owl-theme  navs-carousel events" id="timeline-carousel">
                                {step1 ? (
                                    <Row>
                                        {users.slice(0, 4).map((user, key) => (
                                            <CardContact user={user} key={'_user_' + key} />
                                        ))}
                                    </Row>
                                ) : null}

                                {step2 ? (
                                    <Row>
                                        {users.slice(4, 8).map((user, key) => (
                                            <CardContact user={user} key={'_user_' + key} />
                                        ))}
                                    </Row>
                                ) : null}

                                <div className="owl-nav" style={{ textAlign: 'center' }}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep1(true)
                                            setStep2(false)
                                        }}
                                        className="border-0"
                                        disabled={step1}
                                    >
                                        <i className="mdi mdi-chevron-left"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep1(false)
                                            setStep2(true)
                                        }}
                                        className="border-0"
                                        disabled={step2}
                                    >
                                        <i className="mdi mdi-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default OurTeam
