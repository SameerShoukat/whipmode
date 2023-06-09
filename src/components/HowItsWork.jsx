import React from 'react'
import location from '../assets/images/location.png'
import redCar    from '../assets/images/redCar.png'
import picklocation from '../assets/images/pick-location.png'

const HowItsWork = () => {
    return (
        <>
            <section className="HowItsWork-sec">
                <div className="container">
                    <h2 className="sub-heading">HOW IT WORKS</h2>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="how-work-card">
                                <div className="work-card-img">
                                    <img src={location} alt="image" />
                                </div>
                                <div className="work-card-text">
                                    <h3 className="prime-heading">1. CHOOSE LOCATIONS</h3>
                                    <p className="sub-para-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="how-work-card">
                                <div className="work-card-img">
                                    <img src={redCar} alt="image" />
                                </div>
                                <div className="work-card-text">
                                    <h3 className="prime-heading">2. PICK-UP LOCATIONS</h3>
                                    <p className="sub-para-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="how-work-card">
                                <div className="work-card-img">
                                    <img src={picklocation} alt="image" />
                                </div>
                                <div className="work-card-text">
                                    <h3 className="prime-heading">3. BOOK YOUR CAR</h3>
                                    <p className="sub-para-white">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItsWork