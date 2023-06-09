import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sedan from "../assets/images/sedan.png";
import suv from "../assets/images/suv.png";
import sedan2 from "../assets/images/sedan2.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: true,
      dots: false,
      speed: 500,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="whipmode-slide-sec">
        <div className="container">
          <h2 class="sub-heading text-center">
            EXPLORE WHIPMODE'S PRICES FOR DAILY AND HOURLY CAR RENTAL
          </h2>
          <Slider {...settings} className="row">
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
                  <button className="redbtn">Book Now</button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
