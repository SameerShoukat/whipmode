import React from "react";
import Form from "../components/Form";
import Banner from "../components/Banner";
import LatestInventory from "../components/LatestInventory";
import HowItsWork from "../components/HowItsWork";
import PricingSec from "../components/PricingSec";
import MobileAppSec from "../components/MobileAppSec";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Form/>
      <Banner/>
      <LatestInventory/>
      <HowItsWork/>
      <PricingSec/>
      <MobileAppSec/>
      <Footer/>
    </>
  );
};

export default index;
