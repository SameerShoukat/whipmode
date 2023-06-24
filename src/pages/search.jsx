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
  const [existCarList, setExistCarList] = useState()
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
        <SearchVehicelForm setCordinate={setCordinate} setReload={setReload} setExistCarList={setExistCarList} />
        <Row>
            <Col md={10} span={24}>
              <div className="vehicel-container">
                
              {
              reload  ? <Skeleton active /> 
              :
             <>
              {existCarList && existCarList.length > 0 ? existCarList.map((cars, val)=>(
                <div className="vehicel-exist">
                    {
                    !cardDetail ? 
                      <VehicleCard setCardDetail={setCardDetail} cars={cars} />
                    :
                    <VehicalCarDetail setCardDetail={setCardDetail} cars={cars} />
                    }
              </div>
              )) 
              :
              <div className="vehicel-not-exist text-center">
                <img src={require("../assets/images/car.png")} alt="car-image" />
                <h4 className="subheading">Wipmode aren't in this area yet</h4>
                <p>We don't have any cars in this area. Try searching for a different location or check out the closest locations below.</p>
            </div>
            
              }
              </>
}
              </div>
            </Col>
            <Col md={14} span={24}>
              <StyleMap cordinate={cordinate} existCarList={existCarList}  />
            </Col>
        </Row>
    </div>
   
    </>
  );
};

export default SearchVehicel;
