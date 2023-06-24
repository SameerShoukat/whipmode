import React from 'react'
import banner from '../assets/images/bannerImg-1.png'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <img src={banner} alt="image"data-aos="fade-down-left"duration="200"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-12 d-lg-flex justify-content-lg-center align-items-lg-center">
                                <div className="banner-text">
                                    <h1 className="main-heading mb-0">Better Car With<span className="red-color"> Great Rates</span></h1>
                                    <p className="main-para-black mb-0 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    <div className="banner-btns-sec">
                                        <Link to="/searchVehicle" className="redbtn">Get Started</Link>
                                        <Link to="/howItWork" className="bdr-btn-black">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Banner
