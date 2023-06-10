import React from "react";
import FormContainer from "../component/searchForm";
import Banner from "../sections/Banner";
import LatestInventory from "../sections/LatestInventory";
import HowItsWork from "../sections/HowItsWork";
import PricingSec from "../sections/PricingSec";
import MobileAppSec from "../sections/MobileAppSec";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <FormContainer />
      <Banner/>
      <LatestInventory/>
      <HowItsWork/>
      <PricingSec/>
      <MobileAppSec/>
    </>
  );
};

export default Home;
