import { useState } from 'react';
import { Form, Button } from 'antd';
import { LockOutlined, UserOutlined , MailOutlined, PhoneFilled} from '@ant-design/icons';
//component
import InputIcon from '../forms/inputIcon';
import InputPassword from '../forms/inputPassword';
import CustomInputNumber from '../forms/inputNumber';
import CustomInputPassword from '../forms/inputPassword';
import InputCheckBox from '../forms/inputCheckbox';
import FormButton from '../forms/button';
import { occupation } from '../../utils/occupation';
import CustomSelectBox from '../forms/selectBox';
import {Row , Col } from 'antd';




const SignUp = () => {
  const onSignupFinish = (values)=>{
    console.log(values)
  }

  return (
      <div className='signin-form-cont'>

              <Form
                name="login"
                className='signin-form'
                initialValues={{
                  remember: true,
                }}
                onFinish={onSignupFinish}
              >
                <Row>
                  <Col md={12} span={24} className='signup-input'>
                    <InputIcon name='first_name' icon={<UserOutlined />} message='Enter First Name' type="string" />
                  </Col>
                  <Col md={12} span={24} className='signup-input'>
                    <InputIcon name='last_name' icon={<UserOutlined />} message='Enter First Name' type="string" />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputIcon name='email' icon={<MailOutlined />} message='Enter Email' type="email" />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <CustomInputNumber name='mobile' icon={<PhoneFilled />} message='Enter Mobile' />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputPassword name='password' icon={<LockOutlined />} message='Enter Password' />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <CustomInputPassword name='confirm_password' icon={<LockOutlined />} message='Confirm Your Password' />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <CustomSelectBox name="occupation" message="Please select occupation" options={occupation}  />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputCheckBox name="policy" message="By creating your account, you acknowledge that Wipmode and Wipmode partner's Terms of Use and Privacy Notice apply to you." />
                  </Col>
                </Row>
                <FormButton value="Create Account" type="submit" />
              </Form>
      </div>
  );
};



export default SignUp;