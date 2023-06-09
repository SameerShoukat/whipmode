import React from 'react'
import circle from '../assets/images/circle.png'

const promoted = () => {
    return (
        <>
            <section className="promoted-sec">
                <div className="container">
                    <h2 className="sub-heading text-center">PROMOTED ARTICLES</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-12">
                            <div className="promoted-text">
                                <ul>
                                    <li> 
                                    <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                    <li> 
                                    <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                    <li>
                                     <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                    <li>
                                     <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="promoted-text">
                                <ul>
                                    <li> 
                                    <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                    <li> 
                                    <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                    <li> 
                                    <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                    <li> 
                                    <span><img src={circle} alt="image"/> &nbsp; Lorem Ipsum is simply dummy text ?</span>
                                        <span>the printing and typesetting industry.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default promoted