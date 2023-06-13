import React from "react";
import FormContainer from "../component/searchForm";
import Banner3 from "../sections/Banner3";
import Rental from "../sections/Rental";
import Bussiness from "../sections/Bussiness";
import MobileAppSec from "../sections/MobileAppSec";
import Footer from "../sections/Footer";
const Pricing = () => {
  return (
    <>
      <div className="container">
        <FormContainer />
      </div>
      <Banner3/>
      <Rental/>
      <Bussiness/>
      <MobileAppSec/>
    </>
  );
};

export default Pricing;
