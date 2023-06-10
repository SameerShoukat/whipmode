import { Steps } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
// form
import Personalnfo from '../component/createCollector/personalInfoForm';
import CompanyInfo from '../component/createCollector/companyInfoForm';
import SuccessRoute from '../component/successRoute';

import bg from '../assets/images/clean.jpg';

//api

import { api } from '../api';

const { Step } = Steps;
const steps = [
  {
    title: 'Personal Info',
  },
  {
    title: 'Company Info',
  },
  {
    title: 'Succeed',
  },
];

const CreateCollector = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const next = () => {
    setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

  const collectorPostData = async (value) => {
    setData({ ...data, ...value });
    if (step === 1) {
      let postData = { ...data, ...value };
      const formData = new FormData();

      formData.append('image', value.cnicImgBack[0].originFileObj);
      formData.append('image', value.cnicImgFront[0].originFileObj);
      formData.append('image', value.drivingLicenseBack[0].originFileObj);
      formData.append('image', value.drivingLicenseFront[0].originFileObj);

      //for test data
      delete postData['cnicImgBack'];
      delete postData['cnicImgFront'];
      delete postData['drivingLicenseBack'];
      delete postData['drivingLicenseFront'];

      // statis location
      const location = {
        location: { type: 'Point', coordinates: [24.946218, 67.005615] },
      };
      postData = { ...postData, ...location };

      formData.append('data', JSON.stringify(postData));

      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      };

      await axios
        .post(`${api}/collectors/signup`, formData, config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  };

  const details = {
    heading: 'Your Application Has Been Submitted',
    message: 'We will look after it and response you as soon an possible',
  };

  return (
    <>
      <section
        className='section banner overlay d-flex align-items-center'
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='container position-relative'>
          <div className='create-form-cont bg-white'>
            <h2 className='text-center sub-heading mb-4'>USWMS</h2>
            <div className='create-form-inner'>
              <h2>Register a Collector </h2>
              <Steps step={step} className='mb-5 px-3' current={step}>
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>

              <div className='steps-content'>
                {step === 0 && (
                  <Personalnfo
                    next={next}
                    prev={prev}
                    postData={collectorPostData}
                  />
                )}
                {step === 1 && (
                  <CompanyInfo
                    next={next}
                    prev={prev}
                    postData={collectorPostData}
                  />
                )}
                {step === 2 && <SuccessRoute {...details} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateCollector;
