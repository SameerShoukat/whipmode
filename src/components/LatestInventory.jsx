import React from 'react'
import sedan from '../assets/images/sedan.png'
import suv from '../assets/images/suv.png'
import sedan2 from '../assets/images/sedan2.png'

const LatestInventory = () => {
    return (
        <>
            <section className="latestInvent-sec">
                <div className="container">
                    <h2 className="sub-heading">LATEST INVENTORY</h2>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="latest-Inv-card">
                                <div className="card-title">
                                    <h5 className="sub-heading">SEDAN</h5>
                                </div>
                                <div className="card-img animate__animated animate__zoomIn">
                                    <img src={sedan} alt="" />
                                </div>
                                <div className="card-text">
                                    <p className="main-para-white">LOREM IPSUM IS SIMPLY</p>
                                    <p className="sub-para-white"><span>2018</span> <span>255 HP</span> <span>MANUAL</span></p>
                                </div>
                                <div className="card-btn">
                                    <button className="redbtn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="latest-Inv-card">
                                <div className="card-title">
                                    <h5 className="sub-heading">SUV</h5>
                                </div>
                                <div className="card-img animate__animated animate__zoomIn">
                                    <img src={suv} alt="" />
                                </div>
                                <div className="card-text">
                                    <p className="main-para-white">LOREM IPSUM IS SIMPLY</p>
                                    <p className="sub-para-white"><span>2018</span> <span>255 HP</span> <span>MANUAL</span></p>
                                </div>
                                <div className="card-btn">
                                    <button className="redbtn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="latest-Inv-card">
                                <div className="card-title">
                                    <h5 className="sub-heading">SEDAN</h5>
                                </div>
                                <div className="card-img animate__animated animate__zoomIn">
                                    <img src={sedan2} alt="" />
                                </div>
                                <div className="card-text">
                                    <p className="main-para-white">LOREM IPSUM IS SIMPLY</p>
                                    <p className="sub-para-white"><span>2018</span> <span>255 HP</span> <span>MANUAL</span></p>
                                </div>
                                <div className="card-btn">
                                    <button className="redbtn">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestInventory