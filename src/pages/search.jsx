import React, { useEffect } from "react";
import SearchVehicelForm from "../component/searchVehicel";
import { Row, Col } from "antd";
import { useState } from "react";
import VehicleCard from "../component/vehicel-card";
import StyleMap from "../component/map";
import {Skeleton} from "antd";
import VehicalCarDetail from "../component/vehicel-car-detail";



const SearchVehicel = () => {
  const [carlist, setCarlist] =  useState()
  const[ cordinate, setCordinate ] = useState({})
  const [reload, setReload] =  useState(false)
  const [cardDetail ,  setCardDetail] =  useState(false)

  useEffect(()=>{
   let searchlocation = JSON.parse(localStorage.getItem('search-locaion'))
   if(searchlocation){
    setCordinate({ 
      lat: searchlocation.selectLocation.latitude,
      lng: searchlocation.selectLocation.longitude
    })
   }
  },[])


 
  
  return (
    <>
    <div className="search-page">
        <SearchVehicelForm setCordinate={setCordinate} setReload={setReload} />
        <Row>
            <Col md={10} span={24}>
              <div className="vehicel-container">
                
              {
              reload  ? <Skeleton active /> 
              :
             <>
              {carlist ? 
                <div className="vehicel-not-exist text-center">
                    <img src={require("../assets/images/car.png")} alt="car-image" />
                    <h4 className="subheading">Wipmode aren't in this area yet</h4>
                    <p>We don't have any cars in this area. Try searching for a different location or check out the closest locations below.</p>
                </div>
              :
                <div className="vehicel-exist">
                  {!cardDetail ? 
                  <ul className="list-inline">
                    <li className="mb-4">
                      <VehicleCard setCardDetail={setCardDetail} />
                    </li>
                    <li className="mb-4">
                      <VehicleCard setCardDetail={setCardDetail} />
                    </li>
                    <li className="mb-4">
                      <VehicleCard setCardDetail={setCardDetail} />
                    </li>
                    <li className="mb-4">
                      <VehicleCard setCardDetail={setCardDetail} />
                    </li>
                    <li className="mb-4">
                      <VehicleCard setCardDetail={setCardDetail} />
                    </li>
                    <li className="mb-4">
                      <VehicleCard setCardDetail={setCardDetail}  />
                    </li>
                  </ul>
                  :
                  <VehicalCarDetail setCardDetail={setCardDetail} />
                  }
                </div>
              }
              </>
}
              </div>
            </Col>
            <Col md={14} span={24}>
              <StyleMap {...cordinate}  />
            </Col>
        </Row>
    </div>
   
    </>
  );
};

export default SearchVehicel;
