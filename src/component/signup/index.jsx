
import { Form } from 'antd';
import { LockOutlined, UserOutlined , MailOutlined, PhoneFilled} from '@ant-design/icons';
//component
import InputIcon from '../forms/inputIcon';
import InputPassword from '../forms/inputPassword';
import CustomInputNumber from '../forms/inputNumber';
import InputConfirmPassword from '../forms/inputConfirmPassword';
import InputCheckBox from '../forms/inputCheckbox';
import FormButton from '../forms/button';
import { occupation } from '../../utils/occupation';
import CustomSelectBox from '../forms/selectBox';
import {Row , Col } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { postResponse } from '../../hooks/axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {
  const [form] = useForm();
  const Navigate = useNavigate();

  const onSignupFinish = (values)=>{
    postResponse('/users/signup', values)
    .then(response => {
      if(response && response.data){
        message.success(response.data.message)
        Navigate('/signin')
      }
      else{
        message.error(response.data.message)
      }
    })
  .catch(error => message.error(error.response.data.message))
  }

  return (
      <div className='signin-form-cont'>

              <Form
                form={form}
                name="login"
                className='signin-form'
                initialValues={{
                  remember: true,
                }}
                onFinish={onSignupFinish}
              >
                <Row>
                  <Col md={12} span={24} className='signup-input'>
                    <InputIcon name='firstName' icon={<UserOutlined />} message='Enter First Name' type="string" />
                  </Col>
                  <Col md={12} span={24} className='signup-input'>
                    <InputIcon name='lastName' icon={<UserOutlined />} message='Enter last Name' type="string" />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputIcon name='email' icon={<MailOutlined />} message='Enter Email' type="email" />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <CustomInputNumber name='phoneNo' icon={<PhoneFilled />} message='Enter Mobile' />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputPassword name='password' icon={<LockOutlined />} message='Enter Password' />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputConfirmPassword name='confirm_password' icon={<LockOutlined />} message='Confirm Your Password' />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <CustomSelectBox name="occupation" message="Please select occupation" options={occupation}  />
                  </Col>
                  <Col span={24} className='signup-input'>
                    <InputCheckBox name="policy" alert="Required" message="By creating your account, you acknowledge that Wipmode and Wipmode partner's Terms of Use and Privacy Notice apply to you." />
                  </Col>
                </Row>
                <FormButton value="Create Account" type="submit" />
              </Form>
      </div>
  );
};



export default SignUp;