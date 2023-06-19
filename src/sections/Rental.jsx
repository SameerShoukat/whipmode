import React from 'react'

const Rental = () => {
    return (
        <>
            <section className="rental-sec">
                <div className="container">
                    <h2 className="sub-heading text-center">RENTAL MEMBERSHIP PLANS</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-12">
                            <div className="retal-card">
                                <div className="rental-card-head">
                                    <span className="red-color">BASIC</span>
                                    <h3 className="red-color">$39.00</h3>
                                    <span className="red-color"><small>PER MONTH</small></span>
                                </div>
                                <div className="retal-card-body">
                                    <p className="sub-para-black ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="rental-btn">
                                    <button className="redbtn">Select Plan</button>
                                </div>
                                <retal className="card-bottom"></retal>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-lg-0 mt-3">
                            <div className="retal-card">
                                <div className="rental-card-head">
                                    <span className="red-color">PREMIUM</span>
                                    <h3 className="red-color">$139.00</h3>
                                    <span className="red-color"><small>6 MONTH</small></span>
                                </div>
                                <div className="retal-card-body">
                                    <p className="sub-para-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="rental-btn">
                                    <button className="redbtn">Select Plan</button>
                                </div>
                                <retal className="card-bottom"></retal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rental