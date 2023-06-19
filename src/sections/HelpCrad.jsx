import React from 'react'
import join from '../assets/images/join.svg'
import book from '../assets/images/book.svg'
import account from '../assets/images/account.svg'
import drive from '../assets/images/drive.svg'

const HelpCrad = () => {
    return (
        <>
            <section className="helpsCrads-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 mb-lg-0 mb-3">
                            <div className="helpCrads">
                                <div className="helpcard-img">
                                    <img src={join} alt="image" />
                                </div>
                                <div className="helpcrad-text">
                                    <h3 className="foot-heading ">Join</h3>
                                    <p className="foot-links-text">Lorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 mb-lg-0 mb-3">
                            <div className="helpCrads">
                                <div className="helpcard-img">
                                    <img src={book} alt="image" />
                                </div>
                                <div className="helpcrad-text">
                                    <h3 className="foot-heading ">Book</h3>
                                    <p className="foot-links-text">Lorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 mb-lg-0 mb-3">
                            <div className="helpCrads">
                                <div className="helpcard-img">
                                    <img src={account} alt="image" />
                                </div>
                                <div className="helpcrad-text">
                                    <h3 className="foot-heading ">My account & more</h3>
                                    <p className="foot-links-text">Lorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="helpCrads">
                                <div className="helpcard-img">
                                    <img src={drive} alt="image" />
                                </div>
                                <div className="helpcrad-text">
                                    <h3 className="foot-heading ">Drive</h3>
                                    <p className="foot-links-text">Lorem ipsum dolor sit amet,</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HelpCrad