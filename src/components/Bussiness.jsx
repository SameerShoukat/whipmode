import React from 'react'
import human from '../assets/images/human.svg'
import rigtlogarrow from '../assets/images/rigtlogarrow.svg'
import bussines from '../assets/images/bussines.svg'
const Bussiness = () => {
    return (
        <>
            <section className="bussines-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-12">
                            <div className="bussines-card">
                                <div className="bussines-img">
                                    <img src={human} alt="image"/>
                                </div>
                                <div className="bussines-text">
                                    <h3 className="sub-heading">Whipmode for Students</h3>
                                    <p className="sub-para-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.</p>
                                </div>
                                <div className="bussines-card-btm">
                                    <h5>Go to Universities</h5>
                                    <img src={rigtlogarrow} alt="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="bussines-card">
                                <div className="bussines-img">
                                    <img src={bussines} alt="image"/>
                                </div>
                                <div className="bussines-text">
                                    <h3 className="sub-heading">Whipmode for Buisness</h3>
                                    <p className="sub-para-white">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.</p>
                                </div>
                                <div className="bussines-card-btm">
                                    <h5>Go to Buisness</h5>
                                    <img src={rigtlogarrow} alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bussiness
