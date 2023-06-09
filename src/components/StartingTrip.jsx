import React from 'react'
import staringbaner from '../assets/images/staring-baner.png'
import dustbin from '../assets/images/dustbin.png'
import meter from '../assets/images/meter.png'
import clockRed from '../assets/images/clockRed.png'

const StartingTrip = () => {
    return (
        <>
            <section className="startingTrip-sec">
                <div className="container">
                    <h2 className="sub-heading text-center">STARTING YOUR TRIP</h2>
                    <div className="row">
                        <div className="col-12">
                            <div className="starting-ban-img">
                                <img src={staringbaner} alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-lg-5">
                        <div className="col-md-7 col-12">
                            <h2 className="sub-heading">OUR COMMUNITY RULES</h2>
                            <p className="sub-para-white">
                                It is a long established fact that a reader will be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-lg-5">
                        <div className="col-md-4 col-12">
                            <div className="starting-card">
                                <div className="starting-card-img">
                                    <img src={dustbin} alt="image" />
                                </div>
                                <div className="starting-card-text">
                                    <h3 className="sub-heading">Keep the car clean</h3>
                                    <p className="sub-para-white">
                                        It is a long established fact that a reader will be distracted by the
                                        readable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="starting-card">
                                <div className="starting-card-img">
                                    <img src={meter} alt="image" />
                                </div>
                                <div className="starting-card-text">
                                    <h3 className="sub-heading">Fuel up</h3>
                                    <p className="sub-para-white">
                                        It is a long established fact that a reader will be distracted by the
                                        readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="starting-card">
                                <div className="starting-card-img">
                                    <img src={clockRed} alt="image" />
                                </div>
                                <div className="starting-card-text">
                                    <h3 className="sub-heading">Return on time</h3>
                                    <p className="sub-para-white">
                                        It is a long established fact that a reader will be distracted by the
                                        readable content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StartingTrip