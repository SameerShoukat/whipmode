import React from "react";
import FormContainer from "../component/searchForm";
import Banner4 from "../sections/Banner4";
import WhatCanHelp from "../sections/WhatCanHelp";
import HelpCard from "../sections/HelpCrad";
import Promoted from "../sections/promoted";
import MobileAppSec from "../sections/MobileAppSec";

import Footer from "../sections/Footer";

const Helping = () => {
  return (
    <>
      <div className="container">
        <FormContainer />
      </div>
      <Banner4/>
      <WhatCanHelp/>
      <HelpCard/>
      <Promoted/>
      <MobileAppSec/>
    </>
    
  );
};

export default Helping;
