import React from 'react'
import banner4 from '../assets/images/banner4.png'
import { Link } from 'react-router-dom'
const Banner4 = () => {
    return (
        <>
            <section className="banner-section">
                <img src={banner4} className="animate__animated animate__backInRight"data-aos="fade-down-left"duration="200" alt="image"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-12 d-lg-flex justify-content-lg-center align-items-lg-center">
                                <div className="banner-text">
                                    <h1 className="main-heading">Help</h1>
                                    <p className="main-para-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    <div className="banner-btns-sec">
                                        <Link to="/searchVehicel" className="redbtn">Get Started</Link>
                                        <Link to="/howItWork" className="bdr-btn-black">Learn More</Link >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Banner4
