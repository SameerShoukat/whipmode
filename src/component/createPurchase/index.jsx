import { Form } from 'antd';
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HeatMapOutlined,
  ShopOutlined,
  AimOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Col, Row  , message} from 'antd';

import axios from 'axios';

//component
import InputIcon from '../forms/inputIcon';
import InputPassword from '../forms/inputPassword';
import FormButton from '../forms/button';
import CustomInputNumber from '../forms/inputNumber';

import InputConfirmPassword from '../forms/inputConfirmPassword';

import { api } from '../../api';

//scss
import './purchaserform.scss';

export default function Purchaser() {
  // loginSubmit
  const onSubmit = async (values) => {
    await axios
      .post(`${api}/purchasers/signup`, values)
      .then(
          (res) => {
            res &&
            res.data &&
            message.success('Purchaser Registered Successfully')
        }
         
      )
        .catch((error) => {
          error.response && error.response.data.message
          ? message.error(error.response.data.message)
          : message.error(error.message)
      } );

    console.log(values);
  };

  return (
    <div className='create-form-cont bg-white'>
      <h2 className='text-center sub-heading mb-4'>USWMS</h2>
      <div className='create-form-inner'>
        <h2>Register a Purchaser</h2>
        <Form
          name='login'
          className='signin-form'
          initialValues={{}}
          onFinish={onSubmit}
        >
          <Row>
            <Col span={8} className='input-div'>
              <InputIcon
                name='firstName'
                icon={<UserOutlined />}
                message='Enter firstname'
                type='string'
              />
            </Col>
            <Col span={8} className='input-div'>
              <InputIcon
                name='lastName'
                icon={<UserOutlined />}
                message='Enter lastname'
                type='string'
              />
            </Col>
            <Col span={8} className='input-div'>
              <CustomInputNumber
                name='phoneNo'
                icon={<PhoneOutlined />}
                message='Enter phone number'
                type='string'
                max={11}
                min={11}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12} className='input-div'>
              <InputIcon
                name='email'
                icon={<MailOutlined />}
                message='Enter email'
                type='email'
              />
            </Col>
            <Col span={12} className='input-div'>
              <InputIcon
                name='organizationName'
                icon={<ShopOutlined />}
                message='Enter Organization name'
                type='string'
              />
            </Col>
          </Row>
          <Row>
            <Col span={8} className='input-div'>
              <InputIcon
                name='address'
                icon={<AimOutlined />}
                message='Enter address'
                type='string'
              />
            </Col>
            <Col span={8} className='input-div'>
              <InputIcon
                name='area'
                icon={<HeatMapOutlined />}
                message='Enter area'
                type='string'
              />
            </Col>
            <Col span={8} className='input-div'>
              <InputIcon
                name='city'
                icon={<ShopOutlined />}
                message='Enter city'
                type='string'
              />
            </Col>
          </Row>
          <Row>
            <Col span={8} className='input-div'>
              <InputIcon
                name='userName'
                icon={<UserSwitchOutlined />}
                message='Enter  username'
                type='string'
              />
            </Col>
            <Col span={8} className='input-div'>
              <InputPassword
                name='password'
                icon={<LockOutlined />}
                max={11}
                min={11}
                message='Enter Organization password'
              />
            </Col>

            <Col span={8} className='input-div'>
              <InputConfirmPassword
                name='passwordConfirmation'
                icon={<LockOutlined />}
                message='Enter your password confirmation'
              />
            </Col>
          </Row>
          <div className='mt-4'>
            <FormButton value='Create Account' type='submit' />
          </div>
        </Form>
      </div>
    </div>
  );
}
