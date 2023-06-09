import React from 'react'
import playstore from '../assets/images/playstore.png'
import appstore from '../assets/images/appstore.png'
import mobile from '../assets/images/mobile.png'

const MobileAppSec = () => {
    return (
        <>
            <section className="mobileApp-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 d-lg-flex justify-content-lg-center align-items-lg-center">
                            <div className="mobileApp-text">
                                <h2 className="main-heading-sm">Download our app to get most out of it</h2>
                                <p className="sub-para-white">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s
                                </p>
                                <div className="banner-btns-sec">
                                    <a href="javaScript:;"> <img src={playstore} alt="images" /> </a>
                                    <a href="javaScript:;"> <img src={appstore} alt="images" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-lg-0 mt-4">
                            <div className="mobileApp-img">
                                <img src={mobile} alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileAppSec