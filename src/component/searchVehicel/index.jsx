import React, {useState} from "react";
import Form, { useForm } from "antd/es/form/Form";
import CustomDatePicker from "../forms/datePicker";
import CustomSelectBox from "../forms/selectBox";
import FormButton from "../forms/button";
import { times } from "../../utils/time";
import AutoComplete from "../forms/googleMapInput";
import './style.css';
import { message } from "antd";
import { useEffect } from "react";
import UseIsMounted from "../../hooks/mounted";
import {postResponse} from '../../hooks/axios';

const SearchVehicelForm = ({setCordinate, setReload, setExistCarList}) => {
  const [locaion, setLocation]  = useState()
  const [searchedLocation, setSearchedLocation] = useState(JSON.parse(localStorage.getItem('search-locaion')))

  const [responseList, setReposnseList] = useState()
  const [startTime, setStartTime]  = useState()
  const [startDate, setStartDate]  = useState()
  const isMounted = UseIsMounted();
  const [form] = useForm();



  useEffect(()=>{
    if (isMounted.current) {
      if (searchedLocation) {
          form.setFieldsValue({
              start_date : searchedLocation && searchedLocation.start_date,
              start_time : searchedLocation && searchedLocation.start_time,
              end_date : searchedLocation && searchedLocation.end_date,
              end_time : searchedLocation && searchedLocation.end_time,
          })
      }
  }
  },[])



  const onFormSubmit = (values) =>{
    if(!locaion){
      message.error('Location is required');
      return true;
    }
    let location = { 
      lat: locaion.latitude,
      lng: locaion.longitude
    }
    values ={...values, selectLocation : locaion}
    localStorage.setItem('search-locaion', JSON.stringify(values));
    setCordinate(location)

    postResponse('/vehicle/searchVehicle', location)
    .then((res)=>{
      if(res.data.status && res.data.data){
        setExistCarList(res.data.data)
      }
      else{
        message.error(res.data.message)
      }
    })
    .catch(error => message.error(error.response.data.message))
  }


  return (
    <>
        <Form 
          form={form}
          name="login"
          className='search-form' 
          initialValues={{}}
          onFinish={onFormSubmit}
        >
          <div className="d-flex flex-md-row flex-column align-items-center w-100">
            <div className="search-container separator location-search">
              <img src={require("../../assets/images/search.png")} alt="search" />
              <AutoComplete name="place" message="Select place" setLocation={setLocation} value={searchedLocation && searchedLocation.selectLocation && searchedLocation.selectLocation.address} />
            </div>
            <div className="date-container separator position-relative">
              <label className="support-label mx-2">Pick Up</label>
              <div className="dateInput ">
                <img src={require('../../assets/images/calendar.png')} alt="calender"  />
                <CustomDatePicker name="start_date" message="Start Date" suffixIcon={null} setStartDate={startDate}   />
              </div>
              <div className="dateInput">
               <img src={require('../../assets/images/clock.png')} alt="calender"  />
                <CustomSelectBox name="start_time" options={times} message="Start Time" suffixIcon={null} setStartTime={startTime} />
              </div>
            </div>
            <div className="date-container separator position-relative">
            <label className="support-label mx-2">Return</label>
              <div className="dateInput ">
                <img src={require('../../assets/images/calendar.png')} alt="calender"  />
                  <CustomDatePicker name="end_date" message="End Date" suffixIcon={null} startDate={startDate}  />
              </div>
              <div className="dateInput">
              <img src={require('../../assets/images/clock.png')} alt="calender"  />
                <CustomSelectBox name="end_time" options={times} message="End Time" startTime={startTime} />
              </div>
            </div>
            <div className="date-container small">
              <FormButton type="submit" value="Search" />
            </div>
          </div>
        </Form>
    </>
  );
};

export default SearchVehicelForm;
