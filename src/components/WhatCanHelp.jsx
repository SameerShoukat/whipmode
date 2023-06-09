import React from 'react'

const WhatCanHelp = () => {
    return (
        <>
            <section className="whatWecan-sec">
                <div className="container">
                    <h2 className="sub-heading text-center">WHAT CAN WE HELP YOU WITH?</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-12">
                            <div className="whatwecan-text">
                                <form>
                                    <textarea name="" placeholder="Type your question here.."></textarea>
                                    <button className="redbtn">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatCanHelp