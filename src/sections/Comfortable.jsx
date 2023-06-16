import React from 'react'
import comfort from '../assets/images/comfort.png'
const Comfortable = () => {
    return (
        <>
            <section className="comfortable-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="comforable-img">
                                <img src={comfort} alt="img" data-aos="zoom-in-right" duration="300"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 d-lg-flex mt-lg-0 mt-4 justify-content-lg-center align-items-lg-center">
                            <div className="comfortable-text"data-aos="zoom-in-right" duration="300">
                                <h2 className="main-heading-sm">Comfortable rides, happy passengers</h2>
                                <p className="sub-para-white">It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                    here', making it look like readable English.
                                </p>
                                <button className="redbtn">Book a Ride</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comfortable