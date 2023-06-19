import React from "react";
import sedan from "../assets/images/sedan.png";
import suv from "../assets/images/suv.png";
import sedan2 from "../assets/images/sedan2.png";
import rightarrow from "../assets/images/rightarrow.svg";
import leftarrow from "../assets/images/leftarrow.svg";

const whipmodeSlide = () => {
  return (
    <>
      <section class="whipmode-slide-sec">
        <div class="container">
          <h2 class="sub-heading text-center">
            EXPLORE WHIPMODE'S PRICES FOR DAILY AND HOURLY CAR RENTAL
          </h2>
          <div class="row whipSlide">
            <div class="col-md-4 col-12">
              <div class="latest-Inv-card">
                <div class="card-title">
                  <h5 class="sub-heading">SEDAN</h5>
                </div>
                <div class="card-img">
                  <img src={sedan} alt="image" />
                </div>
                <div class="card-text">
                  <p class="main-para-white">LOREM IPSUM IS SIMPLY</p>
                  <p class="sub-para-white">
                    <span>2018</span> <span>255 HP</span> <span>MANUAL</span>
                  </p>
                </div>
                <div class="card-btn">
                  <button class="redbtn">Book Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="latest-Inv-card">
                <div class="card-title">
                  <h5 class="sub-heading">SUV</h5>
                </div>
                <div class="card-img">
                  <img src={suv} alt="image" />
                </div>
                <div class="card-text">
                  <p class="main-para-white">LOREM IPSUM IS SIMPLY</p>
                  <p class="sub-para-white">
                    <span>2018</span> <span>255 HP</span> <span>MANUAL</span>
                  </p>
                </div>
                <div class="card-btn">
                  <button class="redbtn">Book Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="latest-Inv-card">
                <div class="card-title">
                  <h5 class="sub-heading">SEDAN</h5>
                </div>
                <div class="card-img">
                  <img src={sedan2} alt="image" />
                </div>
                <div class="card-text">
                  <p class="main-para-white">LOREM IPSUM IS SIMPLY</p>
                  <p class="sub-para-white">
                    <span>2018</span> <span>255 HP</span> <span>MANUAL</span>
                  </p>
                </div>
                <div class="card-btn">
                  <button class="redbtn">Book Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="latest-Inv-card">
                <div class="card-title">
                  <h5 class="sub-heading">SEDAN</h5>
                </div>
                <div class="card-img">
                  <img src={sedan} alt="image" />
                </div>
                <div class="card-text">
                  <p class="main-para-white">LOREM IPSUM IS SIMPLY</p>
                  <p class="sub-para-white">
                    <span>2018</span> <span>255 HP</span> <span>MANUAL</span>
                  </p>
                </div>
                <div class="card-btn">
                  <button class="redbtn">Book Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="latest-Inv-card">
                <div class="card-title">
                  <h5 class="sub-heading">SUV</h5>
                </div>
                <div class="card-img">
                  <img src={suv} alt="image" />
                </div>
                <div class="card-text">
                  <p class="main-para-white">LOREM IPSUM IS SIMPLY</p>
                  <p class="sub-para-white">
                    <span>2018</span> <span>255 HP</span> <span>MANUAL</span>
                  </p>
                </div>
                <div class="card-btn">
                  <button class="redbtn">Book Now</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div class="latest-Inv-card">
                <div class="card-title">
                  <h5 class="sub-heading">SEDAN</h5>
                </div>
                <div class="card-img">
                  <img src={sedan2} alt="image" />
                </div>
                <div class="card-text">
                  <p class="main-para-white">LOREM IPSUM IS SIMPLY</p>
                  <p class="sub-para-white">
                    <span>2018</span> <span>255 HP</span> <span>MANUAL</span>
                  </p>
                </div>
                <div class="card-btn">
                  <button class="redbtn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-lg-5">
            <div class="col-12 ">
              <div class="slide-arrow">
                <img src={rightarrow} alt="img" class="prev" />
                <img src={leftarrow} alt="img" class="next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default whipmodeSlide;
