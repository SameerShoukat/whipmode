import React, {useState} from "react";
import Form, { useForm } from "antd/es/form/Form";
import CustomDatePicker from "../forms/datePicker";
import CustomSelectBox from "../forms/selectBox";
import FormButton from "../forms/button";
import { times } from "../../utils/time";
import AutoComplete from "../forms/googleMapInput";
import './style.css';
import { message } from "antd";

const FormContainer = () => {
  const [locaion, setLocation]  = useState({})
  const [startTime, setStartTime]  = useState()
  const [startDate, setStartDate]  = useState()
  const [form] = useForm();

  const onFormSubmit = (values) =>{
    if(!locaion){
      message.error('Location is required');
      return true;
    }
    values ={...values, selectLocation : locaion}
    console.log(values);
  }

  return (
    <>
      <div className="container">
        <Form 
          form={form}
          name="login"
          className='search-form ' 
          initialValues={{}}
          onFinish={onFormSubmit}
        >
          <div className="d-flex align-items-center w-100">
            <div className="search-container separator location-search">
              <img src={require("../../assets/images/search.png")} alt="search" />
              <AutoComplete name="place" message="Select place" setLocation={setLocation} />
            </div>
            <div className="date-container separator">
              <div className="dateInput ">
                <img src={require('../../assets/images/calendar.png')} alt="calender"  />
                <CustomDatePicker name="start_date" message="Start Date" suffixIcon={null} setStartDate={startDate}   />
              </div>
              <div className="dateInput">
               <img src={require('../../assets/images/clock.png')} alt="calender"  />
                <CustomSelectBox name="start_time" options={times} message="Start Time" suffixIcon={null} setStartTime={startTime} />
              </div>
            </div>
            <div className="date-container separator">
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
      </div>
    </>
  );
};

export default FormContainer;
