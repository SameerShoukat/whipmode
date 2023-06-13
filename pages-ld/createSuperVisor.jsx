import { useEffect, useState } from 'react';
import { Form } from 'antd';
import {
  LockOutlined,
  UserOutlined,
  HeatMapOutlined,
  ShopOutlined,
  AimOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Col, Row, message } from 'antd';

import { api } from '../api/index';

import axios from 'axios';

//component
import InputIcon from '../component/forms/inputIcon';
import InputPassword from '../component/forms/inputPassword';
import FormButton from '../component/forms/button';
import InputConfirmPassword from '../component/forms/inputConfirmPassword';
import CustomInputNumber from '../component/forms/inputNumber';
import CustomUploadFile from '../component/forms/uploadFile';
import SuccessRoute from '../component/successRoute';
import StyleMap from '../component/map';
import bg from '../assets/images/clean.jpg';


// getting token

export default function CreateSupervisor() {
  const [locationfromMap, setLocation] = useState({});

  const onSubmit = async (values) => {
    if (!locationfromMap.lat) {
      alert('turn on your location');
      return;
    }
    const formData = new FormData();
    formData.append('image', values.cnicImgBack[0].originFileObj);
    formData.append('image', values.cnicImgFront[0].originFileObj);
    const location = {
      location: {
        type: 'Point',
        coordinates: [locationfromMap.lng, locationfromMap.lat],
      },
    };
    const data = { ...values, ...location };
    formData.append('data', JSON.stringify(data));
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: `Bearer ${localStorage.getItem('uswms-login')}`,
      },
    };

    await axios
      .post(`${api}/admins/registersupervisor`, formData, config)
      .then(function (res) {
        res &&
          res.data &&
          message.success('Supervisor Registered Successfully');
      })
      .catch(function (res) {
        res && message.error(res.response.data.message);
      });
  };

  return (
    <section
      className='section banner overlay d-flex align-items-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='container position-relative'>
        <div className='create-form-cont bg-white'>
          <h2 className='text-center sub-heading mb-4'>USWMS</h2>
          <div className='create-form-inner'>
            <h2>Register Supervisor </h2>

            <Form
              name='supervisorForm'
              className='signin-form'
              initialValues={{}}
              onFinish={onSubmit}
            >
              <Row>
                <Col span={8} className='input-div'>
                  <InputIcon
                    name='firstName'
                    icon={<UserOutlined />}
                    message='Enter supervisor firstname'
                    type='string'
                  />
                </Col>
                <Col span={8} className='input-div'>
                  <InputIcon
                    name='lastName'
                    icon={<UserOutlined />}
                    message='Enter supervisor lastname'
                    type='string'
                  />
                </Col>
                <Col span={8} className='input-div'>
                  <InputIcon
                    name='phoneNo'
                    icon={<ShopOutlined />}
                    message="Enter supervisor number'"
                    type='string'
                    max={11}
                    min={11}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12} className='input-div'>
                  <CustomInputNumber
                    name='cnicNo'
                    icon={<HeatMapOutlined />}
                    message='Enter supervisor CNIC'
                    type='string'
                  />
                </Col>
                <Col span={12} className='input-div'>
                  <InputIcon
                    name='area'
                    icon={<HeatMapOutlined />}
                    message='Enter supervisor area'
                    type='string'
                  />
                </Col>
              </Row>
              <Row>
                <Col span={16} className='input-div'>
                  <InputIcon
                    name='address'
                    icon={<AimOutlined />}
                    message='Enter supervisor address'
                    type='string'
                  />
                </Col>
                <Col span={8} className='input-div'>
                  <InputIcon
                    name='city'
                    icon={<ShopOutlined />}
                    message='Enter superviosr city name'
                    type='string'
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8} className='input-div'>
                  <InputIcon
                    name='userName'
                    icon={<UserSwitchOutlined />}
                    message='Enter superviosr username'
                    type='string'
                  />
                </Col>
                <Col span={8} className='input-div'>
                  <InputPassword
                    name='password'
                    icon={<LockOutlined />}
                    message='enter password'
                  />
                </Col>

                <Col span={8} className='input-div'>
                  <InputConfirmPassword
                    name='passwordConfirmation'
                    icon={<LockOutlined />}
                    message='confirm password'
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24} className='input-div mt-4'>
                  <div className='create-form-inner'>
                    <h2>Upload CNIC </h2>
                    <Row>
                      <Col span={12}>
                        <CustomUploadFile
                          name='cnicImgFront'
                          message='Upload CNIC Front Picture'
                        />
                      </Col>
                      <Col span={12}>
                        <CustomUploadFile
                          name='cnicImgBack'
                          message='Upload CNIC Back Picture'
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24} className='my-4'>
                  <StyleMap setLocation={setLocation} />
                </Col>
              </Row>
              <div className='mt-4 d-flex justify-content-center'>
                <FormButton
                  value='Add Supervisor'
                  type='submit'
                  className='style-btn'
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
