import React from "react";
import clock from "../assets/images/clock.png";
import calendar from "../assets/images/calendar.png";
import search from "../assets/images/search.png";

const Form = () => {
  return (
    <>
      <section className="form-section">
        <div className="container">
          <form className="main-form">
            <div className="row justify-content-sm-center">
              <div className="col-md-3 col-12 w-auto p-0">
                <label>
                  <p className="form-title">Location</p>
                  <div className="form-inputs">
                    <a href="javascript:;">
                      <img src={search} alt="image" />
                    </a>
                    <input
                      type="text"
                      className="form-text"
                      placeholder="Enter a location"
                    />
                  </div>
                </label>
              </div>
              <div className="col-md-4 col-12 w-auto p-0">
                <label>
                  <p className="form-title">Pick up</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-inputs">
                      <a href="javascript:;">
                        <img src={calendar} alt="image" />
                      </a>
                      <input
                        type="date"
                        className="form-text"
                        placeholder="Enter a location"
                      />
                    </div>
                    <div className="form-inputs">
                      <a href="javascript:;">
                        <img src={clock} alt="image" />
                      </a>
                      <input
                        type="time"
                        className="form-text"
                        placeholder="Enter a location"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-md-4 col-12 w-auto p-0">
                <label>
                  <p className="form-title">Return</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-inputs">
                      <a href="javascript:;">
                        <img src={calendar} alt="image" />
                      </a>
                      <input
                        type="date"
                        className="form-text"
                        placeholder="Enter a location"
                      />
                    </div>
                    <div className="form-inputs">
                      <img src={clock} alt="image" />
                      <input
                        type="time"
                        className="form-text"
                        placeholder="Enter a location"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div className="col-md-1 col-12 w-lg-auto p-0 mt-sm-3 mt-3">
                <div className="form-btn">
                  <button type="submit" className="whitebtn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
