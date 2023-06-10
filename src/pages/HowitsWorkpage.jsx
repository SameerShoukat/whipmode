import React from "react";
import FormContainer from "../component/searchForm";
import Banner2 from "../sections/Banner2";
import MemberSection from "../sections/members";
import Comfortable from "../sections/Comfortable";
import StartingTrip from "../sections/StartingTrip";
import MobileAppSec from "../sections/MobileAppSec";
import Footer from "../sections/Footer";

const HowitsWorkpage = () => {
  return (
    <>
      <FormContainer />
      <Banner2/>
      <MemberSection/>
      <Comfortable/>
      <StartingTrip/>
      <MobileAppSec/> 
    </>
  );
};

export default HowitsWorkpage;
