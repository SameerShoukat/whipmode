import React from "react";
import Form, { useForm } from "antd/es/form/Form";
import CustomDatePicker from "../forms/datePicker";
import CustomSelectBox from "../forms/selectBox";
import FormButton from "../forms/button";
import { times } from "../../utils/time";
import PlaceComponent from "../forms/googleMapInput";
import './style.css';
const FormContainer = () => {
  const [form] = useForm();
  const onFormSubmit = (values) =>{
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
        onFinish={ onFormSubmit}
        >
          <div className="d-flex align-items-center w-100">
            <div className="search-container separator">
              <PlaceComponent name="place" message="Select place" />
            </div>
            <div className="date-container separator">
              <div className="dateInput ">
                <img src={require('../../assets/images/calendar.png')} alt="calender"  />
                <CustomDatePicker name="start_date" message="Start Date" suffixIcon={null} />
              </div>
              <div className="dateInput">
               <img src={require('../../assets/images/clock.png')} alt="calender"  />
                <CustomSelectBox name="start_time" options={times} message="Start Time" suffixIcon={null} />
              </div>
            </div>
            <div className="date-container separator">
              <div className="dateInput ">
                <img src={require('../../assets/images/calendar.png')} alt="calender"  />
                <CustomDatePicker name="end_date" message="End Date" suffixIcon={null} />
              </div>
              <div className="dateInput">
              <img src={require('../../assets/images/clock.png')} alt="calender"  />
                <CustomSelectBox name="end_time" options={times} message="End Time" />
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
