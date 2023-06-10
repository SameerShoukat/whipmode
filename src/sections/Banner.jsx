import React from 'react'
import banner from '../assets/images/bannerImg-1.png'

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <img src={banner} alt="image"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-12 d-lg-flex justify-content-lg-center align-items-lg-center">
                                <div className="banner-text">
                                    <h1 className="main-heading">Better Car With<span className="red-color"> Great Rates</span></h1>
                                    <p className="main-para-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    <div className="banner-btns-sec">
                                        <button className="redbtn">Get Started</button>
                                        <button className="bdr-btn-black">Learn More</button>
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
